"use client"

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constant/filters";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface HomeFiltersProps {
}

const HomeFilters: React.FC<HomeFiltersProps> = () => {
    const [selected, setSelected] = useState("")
    return (
        <div className="mt-10 hidden flex-wrap gap-3 md:flex">
            {HomePageFilters.map(filter => (
                <Button onClick={() => setSelected(filter.value)} className={cn("body-medium rounded-lg px-6 py-3 capitalize shadow-none hover:underline", selected === filter.value ? "bg-primary-100 text-primary-500" : "bg-light-800 text-light-500 ")} key={filter.value}>{filter.name}</Button>
            ))}
        </div>
    );
};

export default HomeFilters;