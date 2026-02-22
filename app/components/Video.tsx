import { usePathname, useRouter } from "next/navigation";
import { RefObject, useEffect, useRef } from "react";

type Props = {
  src: string;
  id: string;
  rootRef: RefObject<HTMLElement | null>;
};

export function Video(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry.intersectionRatio, pathname, props);
        const targetPath = `/videos/${props.id}`;
        if (entry.intersectionRatio >= 1 && pathname !== targetPath) {
          // alert("Video is 100% in view!");
          console.log(`window.history.pushState /videos/${props.id}`);
          window.history.pushState(null, "", targetPath);
        }
      },
      {
        root: props.rootRef.current,
        threshold: 1.0,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [pathname, props, props.id, props.rootRef, router]);

  return (
    <div
      ref={ref}
      className="h-screen bg-[#81A1C1] snap-start flex items-center justify-center"
    >
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
