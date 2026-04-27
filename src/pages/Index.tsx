import { Sidebar } from "@/components/site/Sidebar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="md:pl-[200px] pt-14 md:pt-0">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
