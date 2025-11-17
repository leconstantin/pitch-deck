import Image from "next/image";
import Link from "next/link";
import app from "@/public/app.png";
import apps from "@/public/apps.png";
import engine from "@/public/engine.png";
import invoice from "@/public/invoice.png";
import ai from "@/public/midday-ai.png";
import { Card } from "./ui";

export default function SectionNext() {
  return (
    <div className="min-h-screen container relative w-screen">
      <div className="flex justify-between py-6 text-lg">
        <span>Whats coming next</span>
        <span className="">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div>
          <div className="flex space-y-8">
            <Card className="min-h-[370px]">
              <h2 className="text-xl">Invoice</h2>
              <span />
              <Image src={invoice} width={362} alt="Invoice" quality={100} />
            </Card>

            <a
              href="https://midday.ai/engine"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Card className="min-h-[370px]">
                <h2 className="text-xl">Engine</h2>
                <span className="underline">Read more</span>
                <Image src={engine} width={362} alt="Engine" quality={100} />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
