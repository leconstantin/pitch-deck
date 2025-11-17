"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionBook from "@/sections/book";
import SectionNext from "@/sections/next";
import SectionDemo from "@/sections/section-demo";
import SectionProblem from "@/sections/section-problem";
import SectionSolution from "@/sections/section-solution";
import { SectionStart } from "@/sections/section-start";
import SectionSubscription from "@/sections/section-subscription";
import SectionTraction from "@/sections/section-traction";
import SectionTeam from "@/sections/team";
import SectionVision from "@/sections/vision";
import CarouselToolbar from "./carousel-toolbar";

export default function PitchCarusel() {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchViewsCount() {
      try {
        // const data = await setViewCount("pitch");
        // setViews(data);
        setViews(18000);
      } catch {}
    }

    if (!called.current) {
      fetchViewsCount();
      called.current = true;
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="w-full  dark:bg-black font-inter   relative"
      setApi={setApi}
    >
      <CarouselContent className="">
        <CarouselItem className="">
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          {/* Problem */}
          <SectionProblem />
        </CarouselItem>
        <CarouselItem>
          {/* solution */}
          <SectionSolution />
        </CarouselItem>
        <CarouselItem>
          {/* demo */}
          <SectionDemo playVideo={current === 4} />
        </CarouselItem>
        <CarouselItem>
          {/* traction */}
          <SectionTraction />
        </CarouselItem>
        <CarouselItem>
          {/* team */}
          <SectionTeam />
        </CarouselItem>
        <CarouselItem>
          {/* subscriptio */}
          <SectionSubscription />
        </CarouselItem>
        <CarouselItem>
          {/* vision */}
          <SectionVision />
        </CarouselItem>
        <CarouselItem>
          {/* next */}
          <SectionNext />
        </CarouselItem>
        <CarouselItem>
          {/* book */}
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={views} />
    </Carousel>
  );
}
