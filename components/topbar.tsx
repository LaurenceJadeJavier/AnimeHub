import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="navbar bg-slate-600  ">
        <div className="flex-1 items-center justify-center">
          <Link href="/" className="btn btn-ghost text-xl text-stone-300  ">
            A n i m e H u b
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
