"use client";

import Header from "@/components/template/Header";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import CTAStudents from "@/components/sections/CTAStudents";
import CTATeachers from "@/components/sections/CTATeachers";
import CTAChanges from "@/components/sections/CTAChanges";
import Patronage from "@/components/sections/Patronage";
import CTAQuestions from "@/components/sections/CTAQuestions";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/template/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <LogoCloud />
        <div className="w-full min-h-screen relative isolate overflow-hidden pt-14 bg-gray">
          <img
            src="/img/backgrounds/bg-2.svg"
            alt=""
            className="absolute translate translate-y-1/2 inset-0 -z-10 w-full object-cover"
          />
          <CTAStudents />
          <CTATeachers />
        </div>
        <CTAChanges />
        <Patronage />
        <CTAQuestions />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
