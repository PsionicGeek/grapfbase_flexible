"use client";

import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";



const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    const handleTags = (item: string) => {
        router.push(`${pathName}?category=${item}`);
    };
    const clearFilter = () => {
        router.push(pathName);
    };

    return (
        <div className="flexBetween w-full gap-5 flex-wrap">
            <ul className="flex gap-2 overflow-auto">
                <button

                    key="clearFilter"
                    type="button"
                    onClick={() => clearFilter()}
                    className={` px-4 py-3 rounded-xl text-sm my-1 rounded-lg capitalize whitespace-nowrap bg-primary-purple text-white`}
                >
                    Clear Filter
                </button>


                {categoryFilters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => handleTags(filter)}
                        className={`${category === filter
                            ? "bg-light-white-300 font-medium"
                            : "font-normal"
                            } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
                    >
                        {filter}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default Categories;