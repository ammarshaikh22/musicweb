"use client"
import { HoverEffect } from "./ui/card-hover-effect";
export const Webinors = () => {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];

    return (
        <div className='w-full relative py-6 md:py-4'>
            <div className='max-w-[90%] mx-auto p-3 md:p-5'>
                <div className='flex flex-col'>
                    <div className='my-3'>
                        <h2 className='text-base font-bold text-green-800 text-center mb-3'>FEATURED WEBINARS</h2>
                        <p className='text-4xl font-bold md:max-w-full max-w-[95%] text-center'>Enhance Your Musical Journey</p>
                    </div>
                    <div>
                        <HoverEffect
                            items={featuredWebinars.map((web) =>
                            (
                                {
                                    title: web.title,
                                    description: web.description,
                                    link: web.slug
                                }
                            ))}
                        />
                    </div>
                    <div className='my-8 md:my-3 text-center'>
                        <button className='text-sm mb-5 p-2 w-36 h-[50px] rounded-3xl bg-transparent border border-blue-400'>
                            View All webinars
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
