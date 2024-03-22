// "use client";

// import Link from "next/link";

// export default function Cards({ animeinfo }: any) {
//   const animeData = Array.isArray(animeinfo) ? animeinfo : [];


  

//   return (
//     <>
//       {animeData.map((anime: any) => (
//         <div className="card w-60  bg-base-100 shadow-xl mt-6" key={anime.id}>
//           <figure className="px-10 pt-10">
//             <img
//               src={anime.image}
//               alt="Shoes"
//               className="rounded-xl h-50 w-50"
//             />
//           </figure>
//           <div className="card-body items-center text-center">
//             <h2 className="card-title text-sm">{anime.title}</h2>
//             <p>{anime.releaseDate}</p>
//             <div className="card-actions">
//               <button className="btn btn-primary">
//                 {" "}
//                 <Link href={`/dashboard/anime`}>Watch Now</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
