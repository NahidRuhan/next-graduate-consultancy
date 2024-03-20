import { promises as fs } from 'fs';
import sas from "@/public/assets/study-abroad/canada/saskatchewan/1.jpg"
import sas2 from "@/public/assets/study-abroad/canada/saskatchewan/1.jpg"
import banner from "@/public/assets/study-abroad/canada//saskatchewan/banner.jpg"
import UniCard from '@/components/shared/UniCard';
import Image from 'next/image';
import Link from 'next/link';

const Saskatchewan = async  () => {
    const file = await fs.readFile(process.cwd() + '/public/saskatchewan.json', 'utf8');
    const uni = JSON.parse(file);    return (
        <div>

        <div>
        <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Saskatchewan</h1>
            <p className="pb-5">Deep rooted with history and garnished with tall standing mountains, national parks etc. Saskatchewan is well known for its cultural reserves and diversified landscapes. Agriculture industry, Manufacturing and Natural resources are the most booming sectors of the province.</p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <Image className="lg:w-1/2" src={sas} alt="" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                    <h2 className="font-bold">Major cities of the province</h2>
                    <ul className="list-disc p-5">
                        <li>Regina</li>
                        <li>Saskatoon</li>
                        <li>Prince Albert</li>
                    </ul>
                    </div>

                    <div className="flex flex-col">
                    <h2 className="font-bold">Top educational institutions are University of Saskatchewan</h2>
                    <ul className="list-disc p-5">
                        <li>University of Regina</li>
                        <li>University of Saskatchewan</li>
                        <li>Saskatchewan Polytechnic</li>
                    </ul>

                    </div>




                </div>
            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">SASKATCHEWAN IMMIGRANT NOMINEE PROGRAM (SINP)</h1>
            <div className="flex items-center flex-col lg:flex-row">
                            <div className="flex flex-col gap-10">
                <p>-Saskatchewan Immigrant Nominee Program (SINP) is the economic immigration program run by the province of Saskatchewan along with the Government of Canada </p>
                <p>-Through SINP, Saskatchewan invites residency applications from non-Canadians and nominates successful applicants to the federal government for Permanent Residence</p>
                <p>-Under SINP, the applicants can apply through International Skilled Worker, Saskatchewan Experience and Entrepreneur & Farm programs</p>
                <p><Link target="_blank" rel="noopener noreferrer" href="https://www.saskatchewan.ca/residents/moving-to-saskatchewan/ live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>
            </div>
            <Image className="lg:w-1/2" src={sas2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Saskatchewan College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default Saskatchewan;