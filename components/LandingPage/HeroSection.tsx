"use client";

import React, { useEffect, useState } from 'react'
import { TypographyH1 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";
import Particles from "@/components/ui/particles";
import { useTheme } from 'next-themes';
import { Spotlight } from '../ui/Spotlight';

function HeroSection() {
    const [color, setColor] = useState("#ffffff");
    const { theme } = useTheme()

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="h-[48rem]  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    BetterHire <br /> is the way of getting Hired.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a specific part
                    of the page. Here, we are drawing the attention towards the text
                    section of the page. I don&apos;t know why but I&apos;m running out of
                    copy.
                </p>
            </div>
        </div>
    )
}

export default HeroSection
