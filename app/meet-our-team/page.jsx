import Image from 'next/image';
import blank from '@/public/assets/about-us/blank.png'
import team from '@/public/assets/about-us/teamBanner.webp'

const MeetTeam = () => {
    return (
      <div className="bg-slate-200">
        <div>
          <Image
            width={500}
            height={500}
            className="w-full"
            src={team}
            alt=""
          />
        </div>
        <div className="my-10">
          <h1 className="text-center text-3xl md:text-7xl font-bold my-10">Meet our Team</h1>
          {/* <div className="flex flex-row flex-wrap justify-center">
             <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Founder
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Md. Hasanuzzaman
                </h5>
              </div>
            </div>
  
          </div> */}
          <div className="flex flex-wrap justify-center">
            {/* Founder */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Founder
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Md. Hasanuzzaman
                </h5>
              </div>
            </div>
  
            {/* Advisor - Rajesh Bhoumik */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Advisor
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Rajesh Bhoumik
                </h5>
              </div>
            </div>
  
            {/* Advisor - Namrata Datta */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Advisor
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Namrata Datta
                </h5>
              </div>
            </div>
  
            {/* CEO - Shad Arefin Sanchoy */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  CEO
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Shad Arefin Sanchoy
                </h5>
              </div>
            </div>
  
            {/* Executive Officer - Jannatul Fardous Luna */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Executive Officer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Jannatul Fardous Luna
                </h5>
              </div>
            </div>
  
            {/* Executive Officer - Stanly Swagata Halder */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Executive Officer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Stanly Swagata Halder
                </h5>
              </div>
            </div>
  
            {/* Executive Officer - Shailee Roseline Rozario */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Executive Officer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Shailee Roseline Rozario
                </h5>
              </div>
            </div>
  
            {/* Graphics Designer - Sharifa Akhter Lopa */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Graphics Designer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Sharifa Akhter Lopa
                </h5>
              </div>
            </div>
  
            {/* Web Developer - Abdullah Al Rajin */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Web Developer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Abdullah Al Rajin
                </h5>
              </div>
            </div>
  
            {/* Web Developer - Nahid Parvez Ruhan */}
            <div className="flex flex-col bg-white text-black w-[300px] p-3 aspect-w-1 aspect-h-1 m-3">
              <Image className="object-cover w-full h-full" src={blank} alt="image" />
              <div className="pt-2">
                <hr className="p-2"></hr>
                <h1 className="text-center text-xl font-bold px-5 text-black">
                  Web Developer
                </h1>
                <h5 className="text-center text-lg px-5 text-black">
                  Nahid Pervej Ruhan
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MeetTeam;