import Hero from "@/components/Hero/Index";
import styles from "./page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FormQuote from "@/components/FormQuote";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <FormQuote />
    </>
  );
}
