import Filter from "@/components/shared/Filter";
import HomeFilters from "@/app/(root)/_imports/HomeFilters";
import LocalSearchbar from "@/components/shared/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constant/filters";
import Link from "next/link";
import QuestionSection from "../_imports/QuestionSection";
import { Suspense } from "react";
export default function Home() {
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center"
            >
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Link href="/ask-question" className="flex justify-end max-sm:w-full">
                    <Button
                        className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
                    >
                        Ask a Question
                    </Button>
                </Link>
            </div>
            <div className="mt-11 flex  justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchbar
                    route="/"
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for Questions"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                    containerClasses="hidden max-md:flex"
                />

            </div>
            <HomeFilters />
            <Suspense fallback="wait..">
                <QuestionSection />
            </Suspense>
        </>
    )
}