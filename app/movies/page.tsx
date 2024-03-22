"use client";
import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import GlobalCard from "@/components/globalcard";
import NotFound from "../not-found";
import useAnimeStore from "@/service/store";
import { useRouter } from "next/navigation";

interface MoviesCard {
  id: string;
  title: string;
  image: string;
  url: string;
  key: any;
}
export default function Movies() {
  const router = useRouter();
  const { selectedAnimeId, setSelectedAnimeId } = useAnimeStore();
  const {
    data: PopularMovies,
    isLoading,
    isError,
  } = useQuery<MoviesCard[]>({
    queryKey: ["Movies"],
    queryFn: async () => {
      const response = await api.get("movies/flixhq/trending", {
        params: { page: 1, perPage: 20 },
      });
      return response.data.results;
    },
  });
  const handleSelectMovies = (selectedAnimeId: string) => {
    setSelectedAnimeId(selectedAnimeId);
    router.push(`/movies/WatchMovies/${selectedAnimeId}`);
  };

  console.log(PopularMovies);

  if (isLoading) {
    return (
      <>
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
      </>
    );
  }

  if (isError) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <div className="p-5 grid grid-cols-5 bg-slate-500 ">
        {PopularMovies?.map((item: any) => (
          <GlobalCard
            imageUrl={item?.image}
            title={item?.title}
            releaseDate={item?.releaseDate}
            key={item?.id}
            button={
              <button onClick={() => handleSelectMovies(item.url)}>
                Watch now!
              </button>
            }
            id={item?.id}
          />
        ))}
      </div>
    </>
  );
}
