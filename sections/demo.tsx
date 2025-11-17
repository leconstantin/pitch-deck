"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Icons } from "@/components/icons";
import SlideHeader from "@/components/pitch/slide-header";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

type Props = {
  playVideo: boolean;
};

export default function SectionDemo({ playVideo }: Props) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setPlaying] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useHotkeys(
    "space",
    () => {
      togglePlay();
    },
    []
  );

  useHotkeys(
    "backspace",
    () => {
      handleRestart();
    },
    [playerRef]
  );

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }

    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isDesktop) {
      if (playVideo) {
        togglePlay();
      } else {
        togglePlay();
      }
    }
  }, [playVideo, isDesktop]);

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
    }
  };
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Demo - Version 0.1" />
      <div className="flex flex-col min-h-screen  justify-center container">
        <div className="group max-w-5xl mx-auto">
          <div className="absolute top-[50%] left-[50%] w-[200px] h-[50px] -ml-[100px] -mt-[50px] group-hover:opacity-100 hidden md:flex space-x-4 items-center justify-center opacity-0 z-30 transition-all">
            <Button
              size="icon"
              className="rounded-full w-14 h-14 bg-transparent border border-white text-white hover:bg-transparent"
              onClick={handleRestart}
            >
              <Icons.Reply size={24} />
            </Button>
            <Button
              size="icon"
              className="rounded-full w-14 h-14"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Icons.PauseOutline size={24} />
              ) : (
                <Icons.PlayOutline size={24} />
              )}
            </Button>
          </div>
          <video
            ref={playerRef}
            className="w-full h-full object-cover rounded-lg"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source
              src="https://ik.imagekit.io/leco/Better%20Flow/workflow.mp4?updatedAt=1756654100576"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>
  );
}
