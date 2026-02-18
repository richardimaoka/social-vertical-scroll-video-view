type Props = {
  src: string;
};

export function Video(props: Props) {
  return (
    <div className="h-screen bg-[#81A1C1] snap-start flex items-center justify-center">
      <video
        width="405"
        height="720"
        src={props.src}
        loop
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}
