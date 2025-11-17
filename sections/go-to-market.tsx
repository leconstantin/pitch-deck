import {
  AwardIcon,
  BotMessageSquareIcon,
  ClapperboardIcon,
  DollarSignIcon,
  SearchIcon,
} from "lucide-react";
import SlideHeader from "@/components/pitch/slide-header";
import { Button } from "@/components/ui/button";

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

export default function GoToMarket() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Go-To-Market Strategy" />
      <div className="flex flex-col lg:px-6 gap-6 min-h-screen py-16">
        {/* phase 1 */}
        <div className="flex flex-col bg-muted/50 rounded-xl p-5  gap-6">
          <div className="flex items-center gap-4">
            <div className="size-10 text-2xl flex items-center justify-center rounded-full bg-background">
              1
            </div>
            <p className="font-semibold text-2xl text-primary">
              Phase 1: Rwanda Launch (Months 1-6)
            </p>
          </div>
          <div className="flex gap-32">
            <div className="space-y-3">
              <p className="font-semibold text-primary">Target Segments:</p>
              <ul className="list-disc text-foreground/90 px-5">
                <li>University students (200k+ potential users)</li>
                <li>Young professionals seeking upskilling</li>
                <li>Secondary school graduates</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-primary">Tactics:</p>
              <ul className="list-disc text-foreground/90 px-5">
                <li>Partner with universities for pilots</li>
                <li>Social media campaigns (TikTok, Instagram)</li>
                <li> Student ambassador program</li>
                <li>Free trials with 2-3 flagship courses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* phase 2 */}
        <div className="flex flex-col bg-muted/50 rounded-xl p-5  gap-6">
          <div className="flex items-center gap-4">
            <div className="size-10 text-2xl flex items-center justify-center rounded-full bg-background">
              2
            </div>
            <p className="font-semibold text-2xl text-primary">
              Phase 2: B2B & Government (Months 6-12)
            </p>
          </div>
          <div className="flex gap-32">
            <div className="space-y-3">
              <ul className="list-disc text-foreground/90 px-5">
                <li>Pitch to Rwanda Education Board</li>
                <li>Target corporate training departments (banks, telecoms)</li>
                <li>Apply for government digital education grants</li>
              </ul>
            </div>
            <div className="space-y-3">
              <ul className="list-disc text-foreground/90 px-5">
                <li>Partner with World Bank's $200M PSGYE Project</li>
                <li>Integrate with existing Smart Classroom Program</li>
                <li>White-label for NGOs working in education</li>
              </ul>
            </div>
          </div>
        </div>

        {/* phase 3 */}
        <div className="flex flex-col bg-muted/50 rounded-xl p-5  gap-6">
          <div className="flex items-center gap-4">
            <div className="size-10 text-2xl flex items-center justify-center rounded-full bg-background">
              3
            </div>
            <p className="font-semibold text-2xl text-primary">
              Phase 3: Regional Expansion (Year 2)
            </p>
          </div>
          <div className="flex justify-between gap-10">
            <div className="space-y-3">
              <p className="font-semibold">Kenya</p>
              <p>9M mobile learning users, strong tech adoption</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Nigeria</p>
              <p>200M+ population, fastest-growing e-learning market</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">East Africa</p>
              <p>Uganda, Tanzania, Ethiopia - similar challenges</p>
            </div>
          </div>
        </div>

        {/* phase 4 */}
        <div className="flex flex-col bg-muted/50 rounded-xl p-5  gap-6">
          <div className="flex items-center gap-4">
            <p className="font-semibold text-2xl text-primary">
              Marketing Channels:
            </p>
          </div>
          <div className="flex justify-between gap-10 w-full ">
            <div className="shadow w-full bg-background px-4 py-2 rounded-lg">
              Social Media
            </div>
            <div className="shadow w-full bg-background px-4 py-2 rounded-lg">
              Radio Ads
            </div>
            <div className="shadow w-full bg-background px-4 py-2 rounded-lg">
              Campus Events
            </div>
            <div className="shadow w-full bg-background px-4 py-2 rounded-lg">
              Referral Program
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
