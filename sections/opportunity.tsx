import { CheckIcon, ExternalLinkIcon, HashIcon } from "lucide-react";
import Link from "next/link";
import SlideHeader from "@/components/pitch/slide-header";
// import { Card } from "./ui";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const statistics = [
  {
    number: "$3.4B",
    details: "Africa E-Learning Market (2024)",
    source: "UNICEF Rwanda Education Analysis (January 2024)",
    sourceLink:
      "https://www.unicef.org/rwanda/media/5346/file/UNICEF%20Rwanda.pdf",
  },
  {
    number: "$7.7B",
    details: "Projected Market (2033)",
    source: "UNICEF Rwanda Education Analysis (January 2024)",
    sourceLink:
      "https://www.unicef.org/rwanda/media/5346/file/UNICEF%20Rwanda.pdf",
  },
  {
    number: "19.2%",
    details: "CAGR (2025-2034)",
    source: "UNICEF Rwanda Education Analysis (January 2024)",
    sourceLink:
      "https://www.unicef.org/rwanda/media/5346/file/UNICEF%20Rwanda.pdf",
  },
];

const includes = [
  {
    details: "13.2M population, 75% under 35 years old",
  },
  {
    details: "20% of national budget allocated to education",
  },
  {
    details: "Vision 2050: Transform into knowledge economy",
  },
  {
    details: "Government actively promotes digital learning",
  },
  {
    details: "Mobile-first population (high smartphone adoption)",
  },
  {
    details: "Skills gap creates urgent demand for solutions",
  },
];
export default function MarketOpportunity() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Market Opportunity" />
      <div className="flex flex-col lg:px-6 gap-6 lg:gap-10 min-h-screen py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {statistics.map((stat, i) => (
            <Card key={i} className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">
                  {stat.number}
                </CardTitle>
                <CardDescription>{stat.details}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center  text-blue-500 gap-1 text-xs ">
                  <ExternalLinkIcon className="size-4" />
                  <a
                    href={stat.sourceLink}
                    className="hover:underline  line-clamp-1"
                    title={stat.source}
                  >
                    {stat.source}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-lg lg:text-3xl font-semibold ">
            Rwanda - Ideal Market Entry Point:
          </h2>

          <div className=" text-foreground/90 grid grid-cols-2 gap-4 text-lg">
            {includes.map((inc, i) => (
              <div className="flex items-center gap-2" key={i}>
                <CheckIcon />
                <p>{inc.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-lg lg:text-2xl font-semibold ">
            AI in Education Market:
          </h2>

          <div className=" text-foreground/90 space-y-4 text-lg">
            <p>
              Global AI Education market: $5.88B (2024) → $32.27B (2030) at
              31.2% CAGR
            </p>
            <p>
              AI chatbots & virtual assistants are the fastest-growing segment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
