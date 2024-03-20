import { promises as fs } from 'fs';
import banner from "@/public/assets/study-abroad/canada//quebec/banner.jpg"
import quebec from "@/public/assets/study-abroad/canada/quebec/1.jpg"
import Image from 'next/image';
import UniCard from '@/components/shared/UniCard';

const Quebec =async() => {
    const file = await fs.readFile(process.cwd() + '/public/quebec.json', 'utf8');
    const uni = JSON.parse(file);    return (
        <div>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Quebec</h1>
            <p className="pb-10">Have you ever dreamt of a world where heritage meets globalization that is exactly how you feel moving around the streets of Quebec? It is the largest province of Canada by land and second largest by population.</p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <Image className="lg:w-1/2" src={quebec} alt="" />
                <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> It is the only province where French is as common as English, also you can witness an essence of European cuisine in restaurants. Some top cities of the province are Montréal, Québec, Sherbrooke, Trois-Rivières etc.</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Concordia University</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> McGill University  </p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Universite De Montreal</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Universite Laval </p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> Universite De Quebec</p>
                    <p className="flex items-center gap-2"><span className="text-black"><FaAngleRight /></span> All around, Quebec is a province with diversified culture and plush natural resources.</p>
                </div>
            </div>
        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Quebec College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default Quebec;