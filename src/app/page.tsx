"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import CTAStudents from "@/app/components/CTAStudents";
import CTATeachers from "@/app/components/CTATeachers";
import Patronage from "@/components/Patronage";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <LogoCloud />
        <CTAStudents />
        <CTATeachers />
        <Patronage />
      </main>
    </>
  );
}
