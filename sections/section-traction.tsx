"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import customers from "@/public/customers.png";
import { Card } from "./ui";

export default function SectionTraction() {
  return (
    <div className="min-h-screen container relative w-screen">
      <div className="flex justify-between py-6 text-lg">
        <span>Where we are</span>
        <span className="">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen py-16 justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Waitlist sign ups</h2>

              <p className="text-[#878787] text-sm text-center">
                We have built Midday in public on X and amassed nearly 4000
                signups ready to start using Midday.
              </p>

              <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                3453
              </span>
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">GitHub stars</h2>

              <p className="text-[#878787] text-sm text-center">
                Our goal is to build a great community around Midday.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  303
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
