import {
  AwardIcon,
  BotMessageSquareIcon,
  ClapperboardIcon,
  DollarSignIcon,
  SearchIcon,
} from "lucide-react";
import SlideHeader from "@/components/pitch/slide-header";

const includes = [
  {
    icon: SearchIcon,
    title: "Browse your Courses",
    details:
      "Choose from comprehensive certified courses across various fields - tech, business, healthcare, and more",
  },
  {
    icon: DollarSignIcon,
    title: "Pay & Enroll in Courses ",
    details:
      "You may pay or continue for free coureses based on type of course you choose",
  },
  {
    icon: ClapperboardIcon,
    title: "Learn with Video Lectures",
    details:
      "Watch professionally designed video content optimized for low-bandwidth environments",
  },
  {
    icon: BotMessageSquareIcon,
    title: "Ask AI Assistant Anytime",
    details:
      "Confused by a concept? Click the sidebar AI assistant for instant, contextual explanations in your language",
  },
  {
    icon: AwardIcon,
    title: "Complete & Get Certified ",
    details:
      "Finish assessments and receive recognized certificates that employers value",
  },
];

export default function SectionHowItWork() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="How It Works" />
      <div className="flex flex-col lg:px-6  min-h-screen py-16">
        <div className=" text-muted-foreground flex flex-col gap-8 text-lg">
          {includes.map((inc, i) => (
            <div className="flex items-center gap-6" key={i}>
              <div className="p-5 rounded-full bg-muted">
                <inc.icon />
              </div>
              <div>
                <p className="font-semibold text-primary">{inc.title}</p>{" "}
                <p>{inc.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
