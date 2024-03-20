import { promises as fs } from 'fs';
import newfound from "@/public/assets/study-abroad/canada/newfoundland/1.jpg"
import banner from "@/public/assets/study-abroad/canada//newfoundland/banner.jpg"
import Image from 'next/image';
import UniCard from '@/components/shared/UniCard';

const Newfoundland = async () => {

    const file = await fs.readFile(process.cwd() + '/public/newfoundland.json', 'utf8');
    const uni = JSON.parse(file);
    return (
        <div>

                  <div>
                  <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
    <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Newfoundland and Labrador</h1>
    <p className="py-5">A province adorned with breathtaking coastlines, serene fjords, and picturesque fishing villages, Newfoundland and Labrador is steeped in rich history and cultural heritage. Its scenic landscapes serve as a testament to its captivating natural beauty, attracting visitors from far and wide. The province&apos;s deep-rooted traditions and vibrant community spirit contribute to its unique charm.</p>
    <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
        <Image className="lg:w-1/2" src={newfound} alt="Newfoundland and Labrador" />
        <div className="flex flex-col gap-5">
            <p>A welcoming destination that beckons students from across the globe.</p>
            <div className="flex flex-col">
                <h2 className="font-bold">Key cities in Newfoundland and Labrador</h2>
                <ul className="list-disc p-5">
                    <li>St. John&apos;s</li>
                    <li>Corner Brook</li>
                    <li>Mount Pearl</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h2 className="font-bold">Prominent educational institutions</h2>
                <ul className="list-disc p-5">
                    <li>Memorial University of Newfoundland</li>
                    <li>College of the North Atlantic</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div>
<div>
            <h1 className="font-bold text-3xl py-10 text-center">Newfoundland College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
</div>

            
        </div>
    );
};

export default Newfoundland;