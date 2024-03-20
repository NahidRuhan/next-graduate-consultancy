import { promises as fs } from 'fs';
import banner from "@/public/assets/study-abroad/canada//manitoba/banner.jpg"
import alberta from "@/public/assets/study-abroad/canada/alberta/1.jpg"
import alberta2 from "@/public/assets/study-abroad/canada/alberta/2.jpg"
import Link from 'next/link';
import Image from 'next/image';
import UniCard from '@/components/shared/UniCard';

const Alberta = async () => {

    const file = await fs.readFile(process.cwd() + '/public/alberta.json', 'utf8');
    const uni = JSON.parse(file);

    return (
        <div>

        <div>
        <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Alberta</h1>
            <p className="pb-10">Alberta province was named after the daughter of queen Victoria. Landscapes of Alberta consist of mountain ranges, coniferous forest, prairies and over 600 lakes. The most fast-growing cities of Alberta are Edmonton, Calgary, Red Deer among these three Edmonton is the capital. </p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <Image src={alberta} alt="" />
                <div className="flex flex-col gap-2">
                    <p> Apart from these green signals, Alberta is also considered to be the most affordable and reasonable place to live in for students as well as  residents. Alberta has the fastest growing demand for medical professionals.</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University of Alberta</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University of Calgary </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Macewan University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Athabasca University </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> University of Lethbridge</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Southern Alberta Institute of Technology</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Bow Valley College</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Norquest College</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Olds College</p>

                </div>
            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-2xl md:text-3xl font-bold py-10 text-center lg:text-left">ALBERTA ADVANTAGE IMMIGRATION PROGRAM (AAIP formerly known as AINP):</h1>
            <div className="flex items-center flex-col lg:flex-row">
                            <div className="flex flex-col gap-5">
                <p>-Qualified individuals living and working in Alberta with a job offer from Alberta employer can apply for AAIP</p>
                <p>-Run by Government of Alberta along with Government of Canada’s CIC to attract and retain work-ready immigrants to the province</p>
                <p>-Individuals nominated by Government of Alberta together with their spouse and dependent children can apply for Permanent Residence</p>
                <p><Link target="_blank" rel="noopener noreferrer" href="https://www.alberta.ca/alberta-advantage-immigration-program.aspx">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>

            </div>
            <Image className="lg:w-1/2 py-5" src={alberta2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Alberta College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default Alberta;