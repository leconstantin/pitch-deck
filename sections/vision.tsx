import SlideHeader from "@/components/pitch/slide-header";

export default function SectionVision() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Our Vision" />
      <div className="flex flex-col lg:px-6 gap-6 lg:gap-10 min-h-screen py-16">
        <h1 className="text-[45px] px-4 md:px-0 md:text-[100px] font-medium text-center leading-none">
          Our mission is to be the #1 Education Platform for learners.
        </h1>
      </div>
    </div>
  );
}
