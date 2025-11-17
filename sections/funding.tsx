"use client";

import { CheckCircle, Globe, Target, TrendingUp } from "lucide-react";
import SlideHeader from "@/components/pitch/slide-header";

export default function Funding() {
  const useOfFunds = [
    { label: "Product Development & AI", value: "40%" },
    { label: "Content Creation (20 courses)", value: "25%" },
    { label: "Marketing & User Acquisition", value: "20%" },
    { label: "Team Expansion (5 hires)", value: "10%" },
    { label: "Operations & Legal", value: "5%" },
  ];

  const milestones = [
    {
      title: "Launch with 20 courses",
      subtitle: "Tech, business, soft skills",
    },
    {
      title: "Acquire 5,000 paid users",
      subtitle: "Across Rwanda",
    },
    {
      title: "2 government contracts",
      subtitle: "Youth training programs",
    },
    {
      title: "3 corporate B2B clients",
      subtitle: "Employee upskilling",
    },
    {
      title: "Break-even on unit economics",
      subtitle: "Positive cash flow trajectory",
    },
  ];

  const whyInvest = [
    {
      icon: TrendingUp,
      text: "First-mover advantage in Rwanda's AI-education space",
    },
    {
      icon: Target,
      text: "Clear path to profitability in 24 months",
    },
    {
      icon: Globe,
      text: "Scalable model across African markets ($3.4B+ market)",
    },
  ];

  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Funding" />

      <div className="flex flex-col lg:px-6 gap-6 min-h-screen py-16">
        <div className="space-y-6">
          {/* Raised Amount */}
          <div className="rounded-xl bg-muted/50  p-8 text-center backdrop-blur-sm">
            <p className="mb-3 text-2xl">We are raising</p>
            <div className="mb-3 font-bold text-7xl">$50K</div>
            <p className="text-xl">
              Seed funding to scale operations and reach profitability
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Use of Funds */}
            <div className="rounded-xl bg-muted/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 font-bold text-2xl">Use of Funds:</h3>

              <div className="space-y-3">
                {useOfFunds.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between pb-2 ${
                      index !== useOfFunds.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="text-lg">{item.label}</span>
                    <span className="font-bold text-xl">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="rounded-xl  p-6 backdrop-blur-sm">
              <h3 className="mb-4 font-bold text-2xl">18-Month Milestones:</h3>

              <div className="space-y-4">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">{m.title}</p>
                      <p className="text-sm">{m.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Invest */}
          <div className="rounded-xl bg-mute/50 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-center font-bold text-xl">
              Why Invest Now?
            </h3>

            <div className="grid grid-cols-3 gap-4 text-center">
              {whyInvest.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    <Icon className="mx-auto mb-2 h-10 w-10" />
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
