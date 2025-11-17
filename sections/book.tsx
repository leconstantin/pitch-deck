import SlideHeader from "@/components/pitch/slide-header";
import CalEmbed from "./cal-embed";

export default function SectionBook() {
  return (
    <div className="container relative">
      <SlideHeader title="Book a meeting" />
      <div className="flex flex-col  justify-center container">
        <CalEmbed />
      </div>
    </div>
  );
}
