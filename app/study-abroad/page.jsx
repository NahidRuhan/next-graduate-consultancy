import { FaPlane } from "react-icons/fa6";
import canada from "../../public/assets/canadaFlag.png";
import usa from "../../public/assets/usaFlag.png";
import uk from "../../public/assets/ukFlag.png";
import australia from "../../public/assets/australiaFlag.png";
import canadaScene from "../../public/assets/study-abroad/canada.jpg";
import ukScene from "../../public/assets/study-abroad/uk.jpg";
import usaScene from "../../public/assets/study-abroad/usa.jpg";
import australiaScene from "../../public/assets/study-abroad/australia.jpg";
import banner from "../../public/assets/study-abroad/banner.jpg";
import Image from "next/image";
import Link from "next/link";

const StudyAbroad = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="text-center font-bold text-3xl py-10">
          Countries We Serve
        </h1>
        <div>
          <div id="canada" className="flex flex-col justify-between pb-10">
            <Image className="w-1/2 mx-auto" src={canadaScene} alt="" />

            <div className="text-center flex flex-col">
              <Image
                className="hidden lg:flex mx-auto relative lg:bottom-10 lg:left-44 w-32"
                src={canada}
                alt=""
              />
              <h2 className="font-bold text-2xl pb-5">Canada</h2>
              <Link href="/study-abroad/canada"><button
                className="btn max-w-max mx-auto bg-logoRed text-white"
              >
                <FaPlane />
                Read more
              </button></Link>
              
            </div>
          </div>

          <div id="usa" className="flex flex-col justify-between pb-10">
            <Image className="w-1/2 mx-auto" src={usaScene} alt="" />

            <div className="text-center flex flex-col">
              <Image
                className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32"
                src={usa}
                alt=""
              />
              <h2 className="font-bold text-2xl pb-5">USA</h2>
              <Link href="/study-abroad/usa"><button
                className="btn max-w-max mx-auto bg-logoRed text-white"
              >
                <FaPlane />
                Read more
              </button></Link>
            </div>
          </div>

          <div id="uk" className="flex flex-col justify-between pb-10">
            <Image className="w-1/2 mx-auto" src={ukScene} alt="" />

            <div className="text-center flex flex-col">
              <Image
                className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32"
                src={uk}
                alt=""
              />
              <h2 className="font-bold text-2xl pb-5">UK</h2>
              <Link href="/study-abroad/uk"><button
                className="btn max-w-max mx-auto bg-logoRed text-white"
              >
                <FaPlane />
                Read more
              </button></Link>
            </div>
          </div>

          <div id="australia" className="flex flex-col justify-between pb-10">
            <Image className="w-1/2 mx-auto" src={australiaScene} alt="" />

            <div className="text-center flex flex-col">
              <Image
                className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32"
                src={australia}
                alt=""
              />
              <h2 className="font-bold text-2xl pb-5">Australia</h2>
              <Link href="/study-abroad/australia"><button
                className="btn max-w-max mx-auto bg-logoRed text-white"
              >
                <FaPlane />
                Read more
              </button></Link>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default StudyAbroad;
