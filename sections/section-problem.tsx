import { ArmchairIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import reciept from "@/public/reciept.png";
import { Card } from "./ui";

export default function SectionProblem() {
  return (
    <div className="min-h-screen container relative w-screen">
      <div className="flex justify-between py-6 text-lg">
        <span>Current problem</span>
        <span className="">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen py-16 justify-center container">
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="space-y-8 text-primary">
            <Card>
              <ArmchairIcon className="size-10 text-primary" />
              <h2 className="text-2xl">Disorganization</h2>

              <p className="text-muted-foreground text-sm text-center">
                Running a business is tough, and one of the biggest challenges
                is disorganization. From scattered files to misplaced documents,
                this lack of structure hampers productivity and wastes time.
                Moreover, this disorganization often creates problems for your
                accountant, leading to delays and errors in financial reporting.
              </p>
            </Card>
            <div className="px-8">
              <h2 className="text-3xl text-center leading-tight">
                The current market for SMB financial tools is a mess.
              </h2>
            </div>
          </div>
          <div>
            <Image
              src={reciept}
              alt="Reciept"
              width={650}
              height={875}
              quality={100}
            />
          </div>
          <div className="ml-auto w-full space-y-8">
            <Card className="min-h-[315px] text-primary">
              <ArmchairIcon className="size-10 text-primary" />

              <h2 className="text-2xl">Scattered workflow</h2>

              <p className="text-[#878787] text-sm text-center">
                Existing services often compound the problem by residing on
                various platforms, resulting in a fragmented workflow. From
                tracking time to managing finances and storing documents,
                entrepreneurs navigate multiple interfaces and systems. This
                scattered approach wastes time and money, increases the risk of
                errors, and disrupts productivity.
              </p>
            </Card>
            <Card className="min-h-[315px]">
              <ArmchairIcon className="size-10 text-primary" />

              <h2 className="text-2xl">Old tech</h2>

              <p className="text-[#878787] text-sm text-center">
                Services are outdated and prioritize features tailored to
                accountants rather than offering a user-friendly interface for
                business owners. This approach often results in cumbersome
                navigation and a disconnect between the software and the needs
                of users.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
