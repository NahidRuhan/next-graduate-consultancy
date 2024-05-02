import Image from "next/image";
import banner from "@/public/assets/about-us/visionBanner.webp"
import vision1 from "@/public/assets/about-us/1.png"
import vision2 from "@/public/assets/about-us/2.png"

const VisionMission = () => {
    return (
        <div>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 text-justify">  
        <h1 className="font-bold text-3xl pb-10 text-center lg:text-left">Our Vision</h1>
        <div className="flex flex-col-reverse lg:flex-row">
            <Image src={vision1} alt="" />
            <div className="flex flex-col gap-5 pt-20">
            <p>Our vision is to be the most trusted and respected education and visa consultancy in Bangladesh by providing our students with honest and unbiased career advice. </p>
                <p>Our ultimate goal is to be a one-stop solution for all of your international education needs. </p>
                <p>We want to help our students gain admission to world-class institutions and achieve great things in the future.</p>
                <p>We wish to be a trailblazer in fusing technology with career advice.</p>
            </div>
        </div>

        <h1 className="mt-10 font-bold text-3xl text-center lg:text-left">Our mission</h1>
        <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-5 pt-20">
        <p>We work endlessly to provide elite services and assist all students in achieving success in their studies and building their future by placing students in courses at leading institutions that are in the best interest of the student or their profile. </p>
                <p>We are truly concerned about students and thus provide innovative and high-quality study options to international destinations with superior customer service, quality, and commitment to promoting growth through superior ethical representation. </p>
                <p>We want to help our students gain admission to world-class institutions and achieve great things.</p>
                <p>Our mission is to make the students study abroad experience as smooth and seamless as possible, from the time of enrolment until the student departs the country.</p>
            </div>
            <Image src={vision2} alt="" />
        </div>

        </div>


        
        </div>
    );
};

export default VisionMission;