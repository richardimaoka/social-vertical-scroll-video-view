// import Image from "next/image";

import { Video } from "./Video";

export default function Home() {
  const videos = [
    "/videos/1_屋外でアイスクリームを食べている女性_720x405.mp4",
    "/videos/2_ハニーディッパーに垂れるハチミツ_720x405.mp4",
    "/videos/3_玉ねぎと新玉ねぎ_720x405.mp4",
    "/videos/4_鏡を見ながらくしを通す女の子_720x405.mp4",
  ];
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory mx-auto w-full lg:max-w-[56.25vh] video-container">
      {videos.map((src) => (
        <Video key={src} src={src} />
      ))}
    </main>
  );
}
