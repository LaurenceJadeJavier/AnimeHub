"use client";
import { useRouter } from "next/navigation";
import imgaes from "../assets/animes.gif";
import movies from "../assets/images.gif";
import Image from "next/image"; 


export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-500">
      <div className="p-6 flex flex-row gap-4 items-center justify-center ">
        <div className="card w-96 glass">
          <figure>
            <Image src={movies} alt="123" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Movies</h2>
            <p>Watching popular movies</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => router.push("/movies")}
                className="btn btn-primary"
              >
                Get started !
              </button>
            </div>
          </div>
        </div>
        {/* movies */}
        <div className="card w-96 glass">
          <figure>
            <Image src={imgaes} alt="123" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Anime</h2>
            <p>Watching popular Animes</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => router.push("/dashboard")}
                className="btn btn-primary"
              >
                Get started !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
