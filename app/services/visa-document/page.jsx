import banner from "@/public/assets/service/Visa Document/banner.jpg";
import visa1 from  "@/public/assets/service/Visa Document/1.jpg";
import visa2 from  "@/public/assets/service/Visa Document/2.jpg";
import Image from "next/image";
const VisaDocument = () => {
  return (
    <div>
      <div>
        <div>
          <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">  
          <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
            Visa Document
          </h1>
          <p className="mb-5">
            Visa documentation can be one of the most tedious and time-consuming
            parts of a candidates journey abroad. Regardless of the purpose of
            your visit, it is one of the most crucial processes involved in this
            voyage. With over 18 years of experience, Graduate
            Consultancy provides a one-stop solution for all your travels across
            international waters.
          </p>

          <div className="flex gap-8 items-center mb-5 flex-col-reverse lg:flex-row">
            <Image className="lg:w-1/2" src={visa1} alt="" />
            <div className="flex flex-col gap-8">
              <p>
                Be it for education purposes or employment opportunities,
                procuring a visa is a hurdle that every person going abroad
                cannot get away from fast enough. Not only will Team Graduate Consultancy works
                judiciously, but we will also ensure that your move across the
                pond will be a smooth sailing one.
              </p>
              <p>
                Our team of Visa Counsellors, with their expertise, will ensure
                your visa is sanctioned efficiently, in a time restrained
                manner.
              </p>
              <p>
                Besides making the process less arduous, having a list of the
                most important mandatory documents at hand will go a long way in
                turning it into a hassle-free one instead. Hence, make sure you
                have them all, ready to go.
              </p>
              <p>
                Keeping scanned as well as multiple photocopies of the
                above mentioned documents at hand will further aid in making the
                process effortless.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col lg:flex-row">
            <div className="flex flex-col gap-3 lg:gap-0">
              <h1 className="pb-5 font-bold text-center lg:text-left">
                VISA Document List
              </h1>

              <p>
                <i className="fa-solid fa-check text-red-500"></i> Passport
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Matriculation
                mark sheet
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> 12th mark
                sheet
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Birth
                certificate (if under 18; must be in English)
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Diploma /
                Bachelors / Masters— all semesters’ mark sheets
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Diploma /
                Bachelors / Masters— all semesters transcripts
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Diploma /
                Bachelors / Masters— mark sheets for all backlogs (if
                applicable)
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Internship
                letter
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Three letters
                of recommendations (2 from professors & 1 from Dean or HOD)
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> MOI— Medium
                of Instruction (from English)
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Curriculum
                Vitae/Resume
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Digitalized
                photo (35mm x 45 mm) [80% face; white background]
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Joining
                letter
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Work
                experience letter
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Resignation
                letter
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Salary slip
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Statement of
                Purpose [for university]
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Marriage
                certificate
              </p>
            </div>
            <Image className="lg:w-1/2" src={visa2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDocument;
