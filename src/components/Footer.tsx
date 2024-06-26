import React from 'react'

export const Footer = () => {
    return (
        <footer className='w-full relative py-10 md:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-x-2 md:space-x-5  justify-center max-w-[92%] md:max-w-[90%] m-auto'>
                <div className='mb-5 md:mb-0'>
                    <h3 className='text-lg mb-3'>About Us</h3>
                    <p className='text-sm max-w-[80%] md:max-w-[85%]'> Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.</p>
                </div>
                <div className='mb-5 md:mb-0'>
                    <h3 className='text-lg mb-3'>Quick Links</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>About</li>
                        <li className='text-sm'>Courses</li>
                        <li className='text-sm'>Contact</li>
                    </ul>
                </div>
                <div className='mb-5 md:mb-0'>
                    <h3 className='text-lg mb-2'>Follow Us</h3>
                    <ul className='flex flex-col gap-2 '>
                        <li className='text-sm'>Facebook</li>
                        <li className='text-sm'>Twitter</li>
                        <li className='text-sm'>Instagram</li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-lg mb-2'>Contact Us</h3>
                    <p>New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-10">© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}
