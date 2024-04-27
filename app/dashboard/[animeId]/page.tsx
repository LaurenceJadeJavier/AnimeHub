// Anime component
"use client";
import useAnimeStore from "@/service/store";
import { useQuery } from "@tanstack/react-query";
import GlobalCard from "@/components/globalcard";
import api from "@/service/api";
import { useRouter } from "next/navigation";
import NotFound from "@/app/not-found";
import CustomizedGrid from "@/customizedStyle/CustomizedGrid";

export default function Anime() {
  const router = useRouter();
  const { selectedAnimeId, setSelectedAnimeId } = useAnimeStore();
  const {
    data: Anime,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["anime", selectedAnimeId],
    queryFn: async () => {
      const res = await api.get(`/meta/anilist/episodes/${selectedAnimeId}`);
      return res.data;
    },
  });

  const handleWatchAnime = (id: string) => {
    setSelectedAnimeId(id);
    router.push(`/dashboard/anime=${selectedAnimeId}/Animewatch=${id}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-500">
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
    );
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <CustomizedGrid>
        {Anime?.map((episode: any) => (
          <GlobalCard
            imageUrl={episode?.image}
            title={episode?.title}
            releaseDate={episode?.episodeNumber}
            key={episode?.id}
            button={
              <button onClick={() => handleWatchAnime(episode?.id)}>
                {"Episode " + episode?.number}
              </button>
            }
          />
        ))}
      </CustomizedGrid  >
    </>
  );
}
