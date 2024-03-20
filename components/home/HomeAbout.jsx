import Image from "next/image";
import Link from "next/link";
import image from "@/public/assets/home/1.jpg"
import { TiTick } from "react-icons/ti";
import { IoIosFastforward } from "react-icons/io";


const HomeAbout = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-10 my-20 items-center mx-3 lg:mx-0">

            <div>
                <Image src={image} alt="" />
            </div>

            <div className="flex flex-col gap-2">
    <h1 className="text-3xl pb-2 font-bold">About Graduate Consultancy</h1>
    <p className='flex items-center gap-2'><span className="text-red-500"><TiTick /></span> Tailored mentorship for graduate&apos;s academic journey and visa processes. </p>
                <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Customized consultancy covering global educational programs and institutions comprehensively. </p>
                <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Proficient guidance simplifies intricate visa applications for smooth transitions. </p>
                <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Accessible international education through worldwide connections and local adeptness. </p>
                <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Dedicated support ensures the achievement of academic and career aspirations. </p>
    <div className="flex justify-center lg:justify-start"> {/* Added flex and justify-center classes */}
        <Link href="/about-us">
            <button className="btn btn-error mt-10 font-bold">
                About Us <IoIosFastforward />
            </button>
        </Link>
    </div>
</div>
            
        </div>
    );
};

export default HomeAbout;