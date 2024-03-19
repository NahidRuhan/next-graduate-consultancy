import banner from "@/public/assets/service/Bank solvency/banner.jpg"
import bank1 from "@/public/assets/service/Bank solvency/1.jpg"
import Image from "next/image";
const BankSolvency = () => {
    return (
        <div>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">  

<h1 className="font-bold text-3xl py-5 text-center lg:text-left">Bank Solvency</h1>

<div className="flex gap-8 items-center mb-5 flex-col-reverse lg:flex-row">
    <Image className="lg:w-1/2" src={bank1} alt="" />
    <div className="flex flex-col gap-8">
        <p>With a wealth of experience spanning over 15 years, Disha Education Consultancy prides itself on being a proficient service provider in the realm of bank solvency procedures.</p>
        <p>Our adept team of financial advisors is meticulously skilled and possesses a comprehensive understanding of the intricate banking protocols and documentation requisites.</p>
        <p>Bank solvency processes often demand an in-depth comprehension of various financial statements, verifications, and assurances. Our experts navigate through these requisites adeptly, ensuring a smooth and hassle-free process for our clients.</p>
        <p>At Team DEC, we guide you through the entirety of the bank solvency process, ensuring accuracy and compliance with the stipulations laid out by the financial institutions.</p>
        <p>We streamline the daunting financial procedures, making the journey toward fulfilling bank solvency requirements as seamless as possible.</p>
    </div>
</div>

<div className="flex items-center flex-col lg:flex-row">
    <div className="flex flex-col gap-8">
        <p>Over the years, our dedication and unwavering commitment have facilitated numerous clients and businesses in fulfilling their bank solvency prerequisites.</p>
        <p>Our proficient team will assist you in comprehending the specific requirements of the bank solvency process concerning your circumstances and objectives.</p>
        <p>Beyond offering guidance, we extend our support in preparing necessary documentation, facilitating meetings with banking officials, and providing essential pre and post-approval assistance.</p>
        <p>With Team DEC, your journey toward meeting bank solvency criteria is comprehensive, beginning with meticulous document preparation and culminating in timely submissions.</p>
        <p>Moreover, DEC ensures end-to-end assistance, providing comprehensive support ranging from initial submission to post-approval procedures.</p>
        <p>Our commitment lies in ensuring a seamless and successful bank solvency process for our clients.</p>
    </div>
    <Image className="lg:w-1/2" src={bank1} alt="" />
</div>

</div>

            
        </div>
    );
};

export default BankSolvency;