"use client";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 100) {
    throw new Error("error loading");
  }
  return (
    <>
      {children}
    </>
  );
}
