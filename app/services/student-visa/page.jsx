import banner from "@/public/assets/service/Student Visa/banner.jpg";
import pic1 from "@/public/assets/service/Student Visa/1.jpg";
import pic2 from "@/public/assets/service/Student Visa/2.jpg";
import student3 from "@/public/assets/service/Student Visa/3.jpg";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const StudentVisa = () => {
  return (
    <div>
      <div>
        <div>
          <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
          <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
            Student Visa
          </h1>
          <p className="mb-5">
            Anyone in pursuit of international education is well aware of the
            extremely crucial event — Student Visa processing. A foreign
            national wishing to pursue higher education must acquire that
            particular country&apos;s Study Permit/Student Visa in order to gain
            a higher education in that nation.
          </p>

          <div className="flex gap-8 items-center mb-5 flex-col">
            <Image className="lg:w-1/2" src={pic1} alt="" />
            <div className="flex flex-col gap-8">
              <p>
                Student Visa, an official document, is issued by the Visa
                Officer from the High Commission Embassy. Student Visa is an
                interim document, meaning it permits the foreign national to
                study in that country only for the duration of their education.
                Attainment of their graduation marks the end of their stay,
                after which they must return to their home country.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col-reverse lg:flex-row">
            <div className="flex flex-col gap-5">
              <p>
                The candidates can apply for the Student Permit Visa after
                procuring a Letter of Acceptance provided by the
                university/college they have been admitted to.
              </p>
              <p>
                In this scenario, the university or college Acceptance Letter
                will serve as the student&apos;s official documentation when
                applying for the Study Permit through the country&apos;s
                citizenship and immigration commission.
              </p>
              <p>
                Team Graduate Consultancy will not only take care of all the ins
                & outs of the process, but students can also always contact our
                representatives in foreign countries.
              </p>
            </div>
            <Image className="lg:w-1/2" src={pic2} alt="" />
          </div>

          <h1 className="font-bold text-2xl text-center py-10">
            The following criteria must be fulfilled in order to procure a
            Student Visa.
          </h1>

          <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
            <Image className="lg:w-1/2" src={student3} alt="" />
            <div className="flex flex-col gap-5">
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Letter of
                Acceptance from the destination countrys university or college
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Statement of
                purpose
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Proof of
                proficiency in the English language (Scorecard must be provided)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Proof of
                adequate funds to finance tuition fees and living expenses.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Proof of a
                clean background and a complete lack of a criminal record.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500"><TiTick /></span> Must provide
                a medical certificate declaring good health
              </p>
            </div>
          </div>
          <p>
            Read further details on the{" "}
            <Link href='/services/visa-document'><span
              className="font-bold text-red-500 hover:cursor-pointer"
            >
              Visa Documentation
            </span></Link>{" "}
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentVisa;
