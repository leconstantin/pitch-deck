"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionBook from "@/sections/book";
import SectionDemo from "@/sections/demo";
import Funding from "@/sections/funding";
import GoToMarket from "@/sections/go-to-market";
import SectionHowItWork from "@/sections/how";
import BusinessModel from "@/sections/model";
import MarketOpportunity from "@/sections/opportunity";
import SectionProblem from "@/sections/problem";
import SectionSolution from "@/sections/solution";
import { SectionStart } from "@/sections/start";
import SectionVision from "@/sections/vision";
import CarouselToolbar from "./carousel-toolbar";

export default function PitchCarusel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="w-full  dark:bg-black font-inter   relative"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
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
          {/* how work*/}
          <SectionHowItWork />
        </CarouselItem>
        <CarouselItem>
          {/* demo */}
          <SectionDemo playVideo={current === 4} />
        </CarouselItem>
        <CarouselItem>
          {/* market opport */}
          <MarketOpportunity />
        </CarouselItem>
        <CarouselItem>
          {/* model */}
          <BusinessModel />
        </CarouselItem>
        <CarouselItem>
          {/* Go to market */}
          <GoToMarket />
        </CarouselItem>
        <CarouselItem>
          {/* Funding */}
          <Funding />
        </CarouselItem>
        <CarouselItem>
          {/* vision */}
          <SectionVision />
        </CarouselItem>

        <CarouselItem>
          {/* book */}
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar count={count} current={current} />
    </Carousel>
  );
}
