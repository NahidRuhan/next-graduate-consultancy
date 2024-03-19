import pic1 from "@/public/assets/service/University Selection/banner.jpg";
import pic2 from "@/public/assets/service/University Selection/1.jpg";
import pic3 from "@/public/assets/service/University Selection/3.jpg";

import Image from "next/image";
const UniversitySelection = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={pic1} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          University Selection
        </h1>
        <p className="mb-5">
          There is no denying how an institute can end up being the make or
          break of one’s career aspiration since the best faculty moulds the
          best students. With the plethora of stellar universities to choose
          from, selecting the perfect one for you can be quite a daunting
          process. Not to worry, Graduate Consultancy makes the process easier,
          simpler and more efficient for you by educating you on parameters.
        </p>

        <div className="flex gap-8 items-center mb-5 flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={pic2} alt="" />
          <div className="flex flex-col gap-8">
            <p>
              Team Graduate Consultancy is extremely diligent in working towards
              ensuring the true satisfaction of our students and their families.{" "}
            </p>
            <p>
              With the expert guidance of our counsellors, we will enable you to
              reach your dream university or college. Our counsellors follow a
              proven and tested scientific approach to finding the perfect
              university for you.
            </p>
            <p>
              Among various renowned universities in the world, public-funded
              universities and colleges are given utmost priority.{" "}
            </p>
            <p>
              Not only are they esteemed academic establishments but they also
              have affordable tuition fees.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-8">
            <p>
              Your profile will undergo a complete assessment, including all
              aspects of your professional, academic and work life.{" "}
            </p>
            <p>
              Based on your educational background, personality, proficiency in
              the English language and financial capabilities, Team Graduate
              Consultancy will guide you to the best set of choices in
              universities as well as programs/courses.
            </p>
            <p>
              Moreover, since Team Graduation Consultancy believes in going
              above & beyond for our students, we not only counsel them for
              university selection but our counsellors also help them reach
              their dream country and desired program.
            </p>
            <p>
              With the help of an immensely hardworking team, Graduate
              Consultancy has acquired the desired skills and tools to turn your
              dream career into a reality.
            </p>
          </div>
          <Image className="lg:w-1/2" src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UniversitySelection;
