"use client";

import { PresentationIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useHotkeys } from "react-hotkeys-hook";
import { FaXTwitter } from "react-icons/fa6";
import { CopyInput } from "@/components/custom/copy-input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ModeSwitcher } from "../custom/theme-switcher";

type Props = {
  count: number;
  current: number;
};

const popupCenter = ({
  url,
  title,
  w,
  h,
}: {
  url: string;
  title: string;
  w: number;
  h: number;
}) => {
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `
  );

  return newWindow;
};

export default function CarouselToolbar({ count, current }: Props) {
  const { api, scrollNext, scrollPrev } = useCarousel();

  useHotkeys("arrowRight", () => scrollNext(), [api]);
  useHotkeys("arrowLeft", () => scrollPrev(), [api]);

  const handleOnShare = () => {
    const popup = popupCenter({
      url: "https://twitter.com/intent/tweet?text=Check this pitch deck https://midday.ai/pitch @middayai",
      title: "Share",
      w: 800,
      h: 400,
    });

    popup?.focus();
  };

  return (
    <Dialog>
      <div className="fixed flex justify-center left-0 bottom-5 w-full">
        <AnimatePresence>
          <motion.div animate={{ y: count > 0 ? 0 : 100 }} initial={{ y: 100 }}>
            <TooltipProvider delayDuration={20}>
              <div className="flex backdrop-filter backdrop-blur-lg bg-popover h-10 px-4 py-2 border  items-center space-x-4">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="text-[#878787] flex items-center space-x-2 border-r border-border pr-4">
                      <PresentationIcon size={18} />

                      <span className="text-sm">
                        {current} / {count}
                      </span>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Views</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={() => api?.scrollTo(100)}>
                      <Icons.Calendar size={18} className="text-[#878787]" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Book a meeting</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <DialogTrigger asChild>
                      <Icons.Share
                        size={18}
                        className="text-[#878787] -mt-px"
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Share</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <DialogTrigger asChild>
                      <ModeSwitcher className="text-muted-foreground" />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Change Theme</span>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center border-l border-border pl-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollPrev}
                        className={cn(
                          !api?.canScrollPrev && "opacity-50 cursor-pointer"
                        )}
                        onClick={() => {
                          scrollPrev();
                        }}
                      >
                        <Icons.ChevronLeft className="h-6 w-6" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Previous slide</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollNext}
                        className={cn(
                          !api?.canScrollNext && "opacity-50 cursor-pointer"
                        )}
                        onClick={() => {
                          scrollNext();
                        }}
                      >
                        <Icons.ChevronRight className="h-6 w-6" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Next slide</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Thanks for sharing our pitch deck.
          </DialogDescription>

          <div className="grid gap-6 py-4">
            <CopyInput value="https://midday.ai/pitch" />
            <Button
              className="w-full flex items-center space-x-2 h-10"
              onClick={handleOnShare}
            >
              <span>Share on</span>
              <FaXTwitter />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
