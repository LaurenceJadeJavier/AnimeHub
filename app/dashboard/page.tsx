"use client";
import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import GlobalCard from "@/components/globalcard";
import useAnimeStore from "@/service/store";
import { useRouter } from "next/navigation";
import CustomizedGrid from "@/customizedStyle/CustomizedGrid";

interface AnimeCards {
  id: string;
  title: {
    romaji: string; // Assuming 'title' has a 'romaji' property
  };
  image: string;
  url: string;
  key:any
}

export default function Dashboard() {
  const router = useRouter();

  const { selectedAnimeId, setSelectedAnimeId } = useAnimeStore();
  const {
    data: animejjk,
    isLoading,
    isError,
  } = useQuery<AnimeCards[]>({
    queryKey: ["Anime"],
    queryFn: async () => {
      const response = await api.get("meta/anilist/popular", {
        params: { page: 1, perPage: 20 },
      });
      return response.data.results;
    },
  });

  // const { data: AnimeEpisode } = useQuery<AnimeEpCards[]>({
  //   queryKey: ["Anime Episode", selectedAnimeId],
  //   queryFn: async ({ queryKey }) => {
  //     const [_, id] = queryKey;
  //     const res = await api.get(`meta/anilist/episodes/${id}`);
  //     console.log(res.data);
  //     return res.data;
  //   },
  //   enabled: !!selectedAnimeId,
  // });

  const handleSelectAnime = (selectedAnimeId: string) => {
    setSelectedAnimeId(selectedAnimeId);
    router.push(`/dashboard/anime=${selectedAnimeId}`);
  };

  console.log("123", selectedAnimeId);

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen flex bg-slate-500 items-center justify-center">
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
  console.log("Anime", animejjk);
  // console.log("AnimeEpisode", AnimeEpisode);

  if (isError) {
    return <div>It is error....</div>;
  }

  return (
    <>
      {/*  */}
      <CustomizedGrid>
        {animejjk?.map((item: any) => (
          <GlobalCard
            imageUrl={item?.image}
            title={item?.title?.romaji}
            releaseDate={item?.releaseDate}
            key={item?.id}
            button={
              <button onClick={() => handleSelectAnime(item.id)}>Click Here to Watch</button>
            }
            id={item?.title.romaji}
          />
        ))}
      </CustomizedGrid>
    </>
  );
}
