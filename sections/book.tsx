import Link from "next/link";
import CalEmbed from "./cal-embed";

export default function SectionBook() {
  return (
    <div className="container relative">
      <div className="flex justify-between py-6 text-lg">
        <span>Book a meeting</span>
        <span className="">
          <Link href="/">midday.ai</Link>
        </span>
      </div>
      <div className="flex flex-col  justify-center container">
        <div className=" text-center flex flex-col items-center justify-center">
          <CalEmbed />
        </div>
      </div>
    </div>
  );
}
