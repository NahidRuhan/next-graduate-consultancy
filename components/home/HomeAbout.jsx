import Image from "next/image";
import Link from "next/link";
import image from "@/public/assets/home/1.jpg"


const HomeAbout = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-10 my-20 items-center mx-3 lg:mx-0">

            <div>
                <Image src={image} alt="" />
            </div>

            <div className="flex flex-col gap-2">
    <h1 className="text-3xl pb-2 font-bold">About Graduate Consultancy</h1>
    <p><i className="fa-solid fa-check text-red-500"></i> Tailored mentorship for graduate&apos;s academic journey and visa processes. </p>
                <p><i className="fa-solid fa-check text-red-500"></i> Customized consultancy covering global educational programs and institutions comprehensively. </p>
                <p><i className="fa-solid fa-check text-red-500"></i> Proficient guidance simplifies intricate visa applications for smooth transitions. </p>
                <p><i className="fa-solid fa-check text-red-500"></i> Accessible international education through worldwide connections and local adeptness. </p>
                <p><i className="fa-solid fa-check text-red-500"></i> Dedicated support ensures the achievement of academic and career aspirations. </p>
    <div className="flex justify-center lg:justify-start"> {/* Added flex and justify-center classes */}
        <Link href="/about-us">
            <button className="btn btn-error mt-10 font-bold">
                About Us <i className="fa-solid fa-forward"></i>
            </button>
        </Link>
    </div>
</div>
            
        </div>
    );
};

export default HomeAbout;