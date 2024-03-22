// import React from "react";

// const Watchings = ({epUrl,keyId}:any) => {
//   return (
//     <>
//       <iframe
//         className="w-full aspect-video hover:aspect-square"
//         src={epUrl}
//         key={keyId}
//       ></iframe>
//     </>
//   );
// };

// export default Watchings;
export default function Watchings({ epUrl, keyId }: any) {
  return (
    <>
      <div>
        <iframe
          className="w-100 h-96 aspect-video flex items-center justify-center"
          src={epUrl}
          key={keyId}
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}
