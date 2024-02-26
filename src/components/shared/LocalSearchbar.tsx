"use client"

import Image from "next/image";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";

interface LocalSearchbarProps {
    route: string;
    iconPosition: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
}

const LocalSearchbar: React.FC<LocalSearchbarProps> = ({ route, iconPosition, imgSrc, placeholder, otherClasses }) => {
    return (
        <div className="relative w-full">
            <div className={cn("background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4", otherClasses)}>
                {iconPosition === "left" && <Image
                    src={imgSrc}
                    alt="Search"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />}
                <Input value={""} onChange={() => { }} placeholder={placeholder} className="no-focus paragraph-regular placeholder background-light800_darkgradient border-none shadow-none outline-none" />
                {iconPosition === "right" && <Image
                    src={imgSrc}
                    alt="Search"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />}
            </div>
        </div>
    );
};

export default LocalSearchbar;