// AnimeWatch component
"use client";
import NotFound from "@/app/not-found";
import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import useAnimeStore from "@/service/store";
import Watchings from "@/components/watching";

export default function AnimeWatch() {
  const { selectedAnimeId } = useAnimeStore();

  const {
    data: AniWatching,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["anime Episodes", selectedAnimeId],
    queryFn: async () => {
      const res = await api.get(`/meta/anilist/watch/${selectedAnimeId}`);
      return res.data;
    },
  });

  console.log("AniWatching:", AniWatching);

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

  const referer = AniWatching?.headers?.Referer;

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-500">
        {referer && <Watchings epUrl={referer} />}
      </div>
    </>
  );
}
