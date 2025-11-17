"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalEmbeded() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section className="container py-16">
      <Cal
        calLink="rathon-webdev/30min"
        config={{ layout: "month_view" }}
        namespace="30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
      />
    </section>
  );
}
