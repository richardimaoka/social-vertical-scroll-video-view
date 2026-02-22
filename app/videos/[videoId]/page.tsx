"use client";

// import Image from "next/image";

import { useRef } from "react";
import { Video } from "../../components/Video";

export default function Home() {
  console.log("Home");
  const videos = [
    {
      src: "/videos/1_屋外でアイスクリームを食べている女性_720x405.mp4",
      id: "1",
    },
    {
      src: "/videos/2_ハニーディッパーに垂れるハチミツ_720x405.mp4",
      id: "2",
    },
    { src: "/videos/3_玉ねぎと新玉ねぎ_720x405.mp4", id: "3" },
    { src: "/videos/4_鏡を見ながらくしを通す女の子_720x405.mp4", id: "4" },
  ];
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={rootRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory mx-auto w-full lg:max-w-[56.25vh] video-container"
    >
      {videos.map((v) => (
        <Video key={v.src} src={v.src} id={v.id} rootRef={rootRef} />
      ))}
    </main>
  );
}
