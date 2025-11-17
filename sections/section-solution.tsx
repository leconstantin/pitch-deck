import { ArmchairIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import overview from "@/public/overview.png";
import { Card } from "./ui";

export default function SectionSolution() {
  return (
    <div className="min-h-screen container relative w-screen">
      <div className="flex justify-between py-6 text-lg">
        <span>Our solution</span>
        <span className="">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen py-16 justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card>
              <ArmchairIcon className="size-10 text-primary" />

              <h2 className="text-2xl">One OS</h2>

              <p className="text-[#878787] text-sm text-center">
                We set out on a journey to develop an all-encompassing business
                operating system. Our overarching aim is to empower
                entrepreneurs by providing them with a comprehensive suite of
                tools that not only streamlines tedious tasks but also
                facilitates the acquisition of deeper insights into their
                businesses.
              </p>
            </Card>

            <Card>
              <ArmchairIcon className="size-10 text-primary" />

              <h2 className="text-2xl">Intermediary</h2>

              <p className="text-[#878787] text-sm text-center">
                Midday serves as the bridge between you and your accountant,
                streamlining your month-end procedures, reducing manual work,
                and easily packaging everything up for financial review. By
                prioritizing user experience over building a accountant system,
                we ensure our platform remains user-friendly and entirely
                focused on what entrepreneurs need. This approach enables us to
                scale quickly and globally without the need to navigate domestic
                tax laws and change accountants current workflows.
              </p>
            </Card>
          </div>
          <div className="space-y-8">
            <div className="px-8">
              <h2 className="text-3xl text-center leading-12">
                We offer business insights and automates tedious tasks, freeing
                users to focus on what they love.
              </h2>
            </div>

            <Card>
              <ArmchairIcon className="size-10 text-primary" />

              <h2 className="text-2xl">User friendly & AI</h2>

              <p className="text-[#878787] text-sm text-center">
                We're focusing on building the platform with our community to
                ensure it's as user-friendly as possible and covers all the
                features needed to assist as many business owners as possible.
                We've all witnessed the rise of AI, and we've already integrated
                various AI aspects into our platform. For instance, we've
                implemented features such as matching receipts to transactions,
                category automation, and engaging with your financials through
                Midday AI, allowing users to ask for any insights they may need.
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src={overview}
              alt="Overview"
              width={650}
              height={875}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
