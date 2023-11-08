"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import CTAStudents from "@/components/CTAStudents";
import CTATeachers from "@/components/CTATeachers";
import CTAChanges from "@/components/CTAChanges";
import Patronage from "@/components/Patronage";
import CTAQuestions from "@/components/CTAQuestions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
