import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Skills from "../components/Skills";
import CaseStudies from "../components/CaseStudies";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Featured />
            <Skills />
            {/* <CaseStudies /> */}
            <Experience />
            <Contact />
        </>
    );
}
