"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import CTAStudents from "@/app/components/CTAStudents";
import CTATeachers from "@/app/components/CTATeachers";
import CTAChanges from "@/app/components/CTAChanges";
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
        <CTAStudents />
        <CTATeachers />
        <CTAChanges />
        <Patronage />
        <CTAQuestions />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
