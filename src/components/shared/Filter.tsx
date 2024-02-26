"use client"

import { cn } from "@/lib/utils";
import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FilterProps {
    filters: {
        name: string;
        value: string;
    }[];
    otherClasses?: string;
    containerClasses?: string;
}

const Filter: React.FC<FilterProps> = ({ filters, otherClasses, containerClasses }) => {
    return (
        <div className={cn("relative", containerClasses)}>
            <Select>
                <SelectTrigger className={cn("body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5", otherClasses)}>
                    <div className="line-clamp-1 flex-1 text-left">
                        <SelectValue placeholder="Select a Filter" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {filters.map(filter => (
                            <SelectItem key={filter.name} value={filter.value}>
                                {filter.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>


        </div>
    );
};

export default Filter;