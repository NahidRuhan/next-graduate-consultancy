"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
// import canada from "@/public/assets/canada Flag-01.png"
import canada from '../../public/assets/canadaFlag.png'

import uk from "../../public/assets/ukFlag.png"
import usa from "../../public/assets/usaFlag.png"
import canada2 from '../../public/assets/home/canada.jpg'
import uk2 from "../../public/assets/home/uk.jpg"
import usa2 from "../../public/assets/home/usa.jpg"

const Country = () => {
    
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl hover:cursor-pointer gap-5 my-10 mx-auto">


<div onClick={() => router.push("/study-abroad/canada")}  className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><Image src={canada2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">Canada</h2>
       <Image className="w-10 flex items-center justify-center" src={canada} alt=""/>
    </div>
</div>

            
<div onClick={()=>router.push("/study-abroad/usa")} className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><Image className="h-44" src={usa2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">USA</h2>
       <Image className="w-10 flex items-center justify-center" src={usa} alt=""/>
    </div>
</div>

            
<div onClick={()=>{router.push("/study-abroad/uk")}} className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><Image className="h-44" src={uk2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">UK</h2>
       <Image className="w-10 flex items-center justify-center" src={uk} alt=""/>
    </div>
</div>

            
        </div>
    );
};

export default Country;
