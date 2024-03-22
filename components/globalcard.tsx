import Link from "next/link";


// GLOBAL/ USABLE COMPONENTS 
export default function GlobalCard({
  imageUrl,
  title,
  releaseDate,
  key,
  button,
  id,
}: any) {
  return (
    <>
      <div className="card w-60 bg-base-100 shadow-xl m-4" key={key}>
        <figure>
          <img src={imageUrl} className="w-full" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-xs">{title}</h2>
          <p>{releaseDate}</p>
          <button className="btn btn-primary">{button}</button>
        </div>
      </div>
    </>
  );
}
