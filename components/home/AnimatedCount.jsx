"use client"

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'use-count-up';

const AnimatedCount = () => {
    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures the animation runs only once when it comes into view
        threshold: 0.5, // Adjust the threshold as needed
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    const renderCountUp = (endValue) => {
        if (isInView) {
            return <CountUp isCounting end={endValue} duration={2} />;
        } else {
            return 0; // You can set a default value to show before the animation triggers
        }
    };

    const backgroundStyles = {
        backgroundImage: "url('https://i.ibb.co/N7ng4M4/animated.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div ref={ref} style={backgroundStyles} className='flex flex-col items-center gap-16 py-10 text-white my-10'>
            <p className='font-bold text-5xl text-center'>Thousands of People Choose <span className='text-[#FF0000]'>Graduate Consultation</span></p>

            <div className='flex flex-col md:flex-row gap-10'>

                <div className='flex flex-col items-center'>
                    <div className='flex text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>
                        {renderCountUp(5)}
                        <p className='text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>+</p>
                    </div>
                    <p className='text-lg'>Years of experience</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>
                        {renderCountUp(500)}
                        <p className='text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>+</p>
                    </div>
                    <p className='text-lg'>Universities</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>
                        {renderCountUp(2000)}
                        <p className='text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>+</p>
                    </div>
                    <p className='text-lg'>Programs</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>
                        {renderCountUp(2100)}
                        <p className='text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>+</p>
                    </div>
                    <p className='text-lg'>Student Counseled</p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>
                        {renderCountUp(800)}
                        <p className='text-5xl font-roboto text-[#FF0000] leading-[60px] font-semibold'>+</p>
                    </div>
                    <p className='text-lg'>Students Enrolled</p>
                </div>

            </div>

        </div>
    );
};

export default AnimatedCount;
