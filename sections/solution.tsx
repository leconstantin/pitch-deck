import {
  AwardIcon,
  BotMessageSquareIcon,
  BrainIcon,
  DollarSignIcon,
  GlobeIcon,
  SmartphoneIcon,
  SquareUserRoundIcon,
  TestTubesIcon,
} from "lucide-react";
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

const features = [
  {
    icon: GlobeIcon,
    details: "Accessible Anywhere",
  },
  {
    icon: DollarSignIcon,
    details: "Affordable Pricing",
  },
  {
    icon: AwardIcon,
    details: "Certified Courses",
  },
];
const includes = [
  {
    icon: BotMessageSquareIcon,
    title: "Instant, contextual explanations",
    details:
      " Ask questions anytime during lectures and receive real-timeanswers",
  },
  {
    icon: SquareUserRoundIcon,
    title: "24/7 Personal Tutor",
    details:
      "Understands entire course content and adapts to your learning pace",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-Friendly",
    details: "Optimized for Rwanda's internet conditions, accessible anywhere",
  },
  {
    icon: TestTubesIcon,
    title: "Interactive Learning ",
    details: "Transforms passive video lectures into engaging experiences",
  },
  {
    icon: AwardIcon,
    title: "Recognized Certificates ",
    details:
      "Validate skills and advance careers with professional credentials",
  },
];

export default function SectionSolution() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Our Solution" />
      <div className="flex flex-col lg:px-6 lg:gap-10 gap-6 min-h-screen py-16">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center gap-4">
            <BrainIcon className="size-10" />
            <div className="space-y-2">
              <h2 className="text-lg lg:text-3xl font-semibold ">
                AI Powered Web Platform
              </h2>
              <p>Integrated into every course sidebar</p>
            </div>
          </div>

          <div className=" text-muted-foreground flex flex-col gap-4 text-lg">
            {includes.map((inc, i) => (
              <div className="flex items-center gap-2" key={i}>
                <inc.icon />
                <p>
                  <span className="font-semibold text-primary">
                    {inc.title}
                  </span>{" "}
                  - {inc.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Card key={i} className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">
                  <f.icon />
                </CardTitle>
                <CardDescription>{f.details}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
