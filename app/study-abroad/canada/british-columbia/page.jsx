import { promises as fs } from 'fs';

import col from "@/public/assets/study-abroad/canada/columbia/1.jpg"
import col2 from "@/public/assets/study-abroad/canada/columbia/2.jpg"
import banner from "@/public/assets/study-abroad/canada/columbia/banner.jpg"
import Image from "next/image";
import Link from "next/link";
import UniCard from '@/components/shared/UniCard';

const BritishColumbia = async () => {

    const file = await fs.readFile(process.cwd() + '/public/britishColumbia.json', 'utf8');
    const uni = JSON.parse(file);

    return (
        <div>

        <div>
        <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About British Columbia</h1>
            <p className="pb-5">Between the Pacific Ocean and the Rocky Mountains lies British Columbia on the west coast of Canada. A global model for progressive and flexible learning makes British Columbia a hot favorite of majority of students. Also, cities like Vancouver, Victoria etc.</p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <Image className="lg:w-1/2 py-5" src={col} alt="" />
                <div className="flex flex-col gap-2">
                    <p>provide a wide range of employment and immigration options for students. With nearly 100,000 international students, British Columbia has proven to have multicultural acceptance.</p>
                    <h2 className="font-bold">Major sectors of British Columbia are Manufacturing, IT and Services.
</h2>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University of British Columbia</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University of Victoria </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Douglas College Simon Fraser University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Langara College </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University Canada West</p>

                </div>
            </div>
            
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-2xl md:text-3xl font-bold py-10 text-center lg:text-left">BRITISH COLUMBIA PROVINCIAL NOMINEE PROGRAM (BC PNP)</h1>
            <div className="flex items-center flex-col lg:flex-row">
                            <div className="flex flex-col gap-5">
                <p>-Skilled workers, entry-level & semi-skilled workers, international post-graduates and healthcare professionals are eligible for BC PNP.</p>
                <p>-Economic immigration program administered by the Government of British Columbia’s Immigration Programs Branch</p>
                <p>-If nominated, applicant and applicant’s family can apply to become a Permanent Resident of Canada</p>
                <p><Link target="_blank" rel="noopener noreferrer" href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>
            </div>
            <Image className="lg:w-1/2 py-5" src={col2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">British Columbia College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default BritishColumbia;