import { promises as fs } from 'fs';
import banner from "@/public/assets/study-abroad/canada//ontario/banner.jpg"
import ontario1 from "@/public/assets/study-abroad/canada/ontario/1.jpg"
import ontario2 from "@/public/assets/study-abroad/canada/ontario/2.jpg"
import Image from 'next/image';
import Link from 'next/link';
import UniCard from '@/components/shared/UniCard';
import { FaAngleRight } from 'react-icons/fa6';

const Ontario = async () => {
    const file = await fs.readFile(process.cwd() + '/public/ontario.json', 'utf8');
    const uni = JSON.parse(file);
    return (
        <div>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Ontario</h1>
            <p>If you are someone who likes urban life style and sky rise buildings Ontario is the place for you. Ontario&apos;s has nearly a population of 13,650,000 people and is the second largest province of Canada according to land mass. Toronto being the capital of Ontario accompanies 6 million people. Talking about Toronto, it is also the finance center of the country as it locates the stock exchange of Canada.</p>
            <div className="flex items-center flex-col lg:flex-row">
                <Image src={ontario1} alt="" />
                <div className="">
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Apart from Toronto, Ontario also has prominent cities of Canada in its premises such as Ottawa, London, Thunder Bay, Hamilton, Kingston, Windsor and Sudbury.</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Seneca College</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Centennial College </p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Humber College</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> George Brown College </p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Algoma University</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Cambrian College</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Colleges of the province are There is no doubt, why Ontario holds a special place in the heart of students as it has everything a student desires.</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Service sector contributes for the largest amount of employment nearly 79%</p>
                </div>
            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">ONTARIO IMMIGRANT NOMINEE PROGRAM (OINP)</h1>
            <div className="flex items-center flex-col lg:flex-row">
                            <div className="flex flex-col gap-10">
                <p>-Ontario Immigrant Nominee Program (OINP) is Ontario’s economic immigration program, working in partnership with the Government of Canada, through IRCC</p>
                <p>-Under OINP, foreign workers, international students and applicants with the right skill-set and qualification can apply for nomination</p>
                <h2 className="font-bold">-OINP is offered through various streams such as: </h2>
                <ol className="flex flex-col list-decimal font-medium gap-3 mx-3">
                    <li>Foreign Worker Stream</li>
                    <li>International Student Stream</li>
                    <li>In-demand Skills Stream</li>
                    <li>Masters Graduate Stream</li>
                    <li>PhD Graduate Stream</li>
                    <li>Human Capital Priorities Stream</li>
                    <li>Skilled Trades Stream & French-speaking Skilled Worker Stream</li>
                </ol>
                <p><Link target="_blank" rel="noopener noreferrer" href="http://https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>

            </div>
            <Image className="lg:w-1/2" src={ontario2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Ontario College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default Ontario;