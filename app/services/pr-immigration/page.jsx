import Image from "next/image";
import pr1 from "@/public/assets/service/Immigration  PR/1.jpg"
import pr2 from "@/public/assets/service/Immigration  PR/2.jpg"
import banner from "@/public/assets/service/Immigration  PR/banner.jpg"

const Pr = () => {
    return (
        <div>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">  

            <h1 className="font-bold text-3xl py-5 text-center lg:text-left">Immigration / PR</h1>

            <div className="flex gap-8 items-center mb-5 flex-col-reverse lg:flex-row">
                <Image className="lg:w-1/2" src={pr1} alt="" />
                <div className="flex flex-col gap-8">
                <p>Launching into the realm of immigration solutions, Graduate Consultancy aims to redefine industry standards with innovative approaches and a fresh perspective. </p>
                    <p>Our cadre of visa counsellors is extremely talented, dedicated and possesses an eye for details, which goes a long way in meandering through the intricate maze of the gruesome visa filing process. </p>
                    <p>While there are several different types of visas, each one has its own purpose, rules & regulations and documentation processes.</p>

                    <p>Comprehending the prerequisite documents and accumulating them all meticulously may seem like another Herculean task. That&apos;s where Team Graduate Consultancy sweeps in to save the day. </p>

                    <p>Our immigration consultants guide you through the entirety of your Permanent Residence & Immigration journey by ensuring that your files are up-to-date and align with the mandate of the country you are applying to.</p>
                    <p>Transforming the arduous legal procedures into a hassle-free one is what we strive for.</p>
                </div>
            </div>

            <div className="flex items-center flex-col lg:flex-row">
                <div className="flex flex-col gap-8">
                <p>Over the years, with our keen diligence and stellar work ethic, we have assisted more than hundreds of clients and families to immigrate and gain permanent residence in countries of their preference.</p>
                    <p>Our team will facilitate your understanding of your chances of immigration to the country of your choice</p>

                    <p>Besides aiding you in preparation for interviews with immigration officials, we also assist you with the imperative pre- and post-departure support.</p>

                    <p>With Team Graduate Consultancy by your side, you will get the complete experience—from submitting your visa application and acquiring your visa-stamped passport to the timely submission of your paperwork. </p>

                    <p>Furthermore, Team Graduate Consultancy also ensures end-to-end care of your immigration process and hence provides Travel Assistance as well, which includes everything from pre-departure support (booking your air tickets) to post-departure support (Forex services).</p>

                    <p>With the help of an immensely hardworking team, Graduate Consultancy has acquired the desired skills and tools to turn your dream into a reality.</p>

                </div>
                <Image className="lg:w-1/2" src={pr2} alt="" />
            </div>

        </div>
            
        </div>
    );
};

export default Pr;