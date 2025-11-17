import { ExternalLinkIcon } from "lucide-react";
import SlideHeader from "@/components/pitch/slide-header";
// import { Card } from "./ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BusinessModel() {
  return (
    <div className="min-h-screen container relative w-screen">
      <SlideHeader title="Business Model" />
      <div className="flex flex-col lg:px-6 gap-6 lg:gap-10 min-h-screen py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl">
                Individual Subscriptions
              </CardTitle>
              <CardDescription className="sr-only">
                Rwanda GDP per capita: $900/year ($75/month). $25/month = 33% of
                monthly income
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col  gap-4">
              <div className="flex flex-col  gap-0.5">
                <p>Student: $5/month</p>
                <p className="text-muted-foreground">Access to core courses</p>
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Individual: $15/month</p>
                <p className="text-muted-foreground">Access to core courses</p>
              </div>
              <div className="flex flex-col  gap-0.5">
                <p>Professional: $30/month</p>
                <p className="text-muted-foreground">Access to core courses</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl">
                B2B Corporate Training
              </CardTitle>
              <CardDescription className="sr-only">
                Rwanda GDP per capita: $900/year ($75/month). $25/month = 33% of
                monthly income
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="flex flex-col text-muted-foreground  list-disc gap-0.5">
                <li>Custom course development</li>
                <li>Employee upskilling programs</li>
                <li>White-label solutions</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <p className="font-semibold text-left mt-auto">
                $100-500/employee/year
              </p>
            </CardFooter>
          </Card>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl">
                Government Partnerships
              </CardTitle>
              <CardDescription className="sr-only">
                Rwanda GDP per capita: $900/year ($75/month). $25/month = 33% of
                monthly income
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="flex flex-col text-muted-foreground  list-disc gap-0.5">
                <li>Digital literacy programs</li>
                <li>Youth skills training</li>
                <li>Teacher development</li>
                <li>National education initiatives</li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <p className="font-semibold text-left mt-auto">
                Contract-based (6-7 figures)
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-lg lg:text-3xl font-semibold ">
            Additional Revenue Opportunities:
          </h2>

          <div className=" text-muted-foreground flex flex-col gap-4 text-lg">
            <p>
              <span className="font-semibold text-primary">
                Certification Fees:
              </span>{" "}
              One-time fees for exam proctoring and certificate issuance
            </p>
            <p>
              <span className="font-semibold text-primary">
                Job Marketplace:
              </span>{" "}
              Connect graduates with employers (placement fees)
            </p>

            <p>
              <span className="font-semibold text-primary">
                Content Licensing:
              </span>{" "}
              License courses to other platforms or institution
            </p>
            <p>
              <span className="font-semibold text-primary">
                Premium Support:
              </span>{" "}
              1-on-1 mentoring and career counseling services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
