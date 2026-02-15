// import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory max-w-[56.25vh] mx-auto">
      <div className="h-screen bg-[#81A1C1] snap-start flex items-center justify-center">
        <video
          width="405"
          height="720"
          src="/videos/1_屋外でアイスクリームを食べている女性_720x405.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="h-screen bg-[#D08770] snap-start flex items-center justify-center">
        <video
          width="405"
          height="720"
          src="/videos/2_ハニーディッパーに垂れるハチミツ_720x405.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="h-screen bg-[#A3BE8C] snap-start flex items-center justify-center">
        <video
          width="405"
          height="720"
          src="/videos/3_玉ねぎと新玉ねぎ_720x405.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="h-screen bg-[#EBCB8B] snap-start flex items-center justify-center">
        <video
          width="405"
          height="720"
          src="/videos/4_鏡を見ながらくしを通す女の子_720x405.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
    </main>
  );
}
