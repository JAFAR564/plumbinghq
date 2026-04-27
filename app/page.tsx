import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemAgitation } from "@/components/problem-agitation";
import { ServicesBento } from "@/components/services-bento";
import { TrustBlock } from "@/components/trust-block";
import { Regions } from "@/components/regions";
import { CtaPhone } from "@/components/cta-phone";
import { StickyCallBar } from "@/components/sticky-call-bar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemAgitation />
        <ServicesBento />
        <TrustBlock />
        <Regions />
        <CtaPhone />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
