// components/HeroSection.js

import React from 'react'
import { TypographyH1 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";

function HeroSection() {
    return (
        <section className="bg-black flex flex-col justify-center items-center text-center rounded-2xl py-12 px-4 min-h-lvh">
            <div className="container mx-auto">
                <TypographyH1 className=" font-bold text-gray-600 mb-4">
                    Design and Dev, see where you’ll Thrive and Rev!
                </TypographyH1>
                <TypographyP className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
                    <span className="text-blue-200 font-mono text-md">Clear insights</span> and <span className="text-green-200 font-mono text-md">open ranks</span> for a fair recruitment experience
                </TypographyP>
                <button className="bg-slate-900 text-[#dffd6e] font-mono py-3 px-6 rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg mt-10">
                    Dive In ➡
                </button>
            </div>
        </section>
    )
}

export default HeroSection
