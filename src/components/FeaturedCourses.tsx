"use client"
import React, { useEffect, useState } from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import music_course from "../data/music_courses.json"
import Link from 'next/link';
export const FeaturedCourses = () => {
    interface card {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image?: string
    }
    const [data, setData] = useState<card[]>(music_course.courses)
    useEffect(() => {
        let filteredData = data.filter((course: card) => course.isFeatured === true)
        setData(filteredData)
    }, [data])
    return (
        <div className='relative bg-gray-900'>
            <div className='w-[92%] md:max-w-[95%] m-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-6'>
                        <h2 className='text-base font-bold text-green-800 text-center mb-3'>FEATURED COURSES</h2>
                        <p className='text-4xl font-bold md:max-w-full max-w-[95%] text-center'>Learn With The Best</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 justify-center'>
                        {data.map((course: card) => {
                            return (
                                <div key={course.id} className='max-w-sm'>
                                    <BackgroundGradient className="w-full lg:h-[230px] h-full flex flex-col rounded-[22px]  p-8 2xl:p-3 bg-white dark:bg-zinc-900">
                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                            {course.title}
                                        </p>

                                        <p className=" mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                                            {course.description}
                                        </p>
                                        <Link href={`/courses/${course.slug}`}>
                                            Learn More
                                        </Link>
                                    </BackgroundGradient>
                                </div>
                            )
                        })}
                    </div>
                    <div className='my-8 md:my-3'>
                        <button className='mb-5 p-2 w-36 h-[50px] rounded-3xl bg-transparent border border-blue-400'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
