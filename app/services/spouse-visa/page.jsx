import banner from "@/public/assets/service/Spouse Visa/banner.jpg";
import spouse1 from "@/public/assets/service/Spouse Visa/1.jpg";
import Image from "next/image";
import Link from "next/link";

const SpouseVisa = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          Spouse Visa
        </h1>
        <p>
          A spouse visa can be acquired if your spouse (husband, wife or civil
          partner) or fiance is already studying, working or living in a foreign
          country and you intend to join them there. With a Spouse Visa, you
          will be able to live and/or work with them.
        </p>

        <div className="flex items-center flex-col lg:flex-row">
          <Image className="lg:w-1/2" src={spouse1} alt="" />
          <div className="flex flex-col gap-5">
            <p>
              Graduation Consultancy is a veteran in the field of Visa Advisory
              firms. With 18 years of experience under our belt, we diligently
              work towards ensuring the true satisfaction of our students and
              their families.
            </p>
            <p>
              At Graduation Consultancy, we provide A-Z care, meaning we will
              assist you throughout the entire process of acquiring a Spouse
              Visa.
            </p>
            <p>
              Our cadre of expert visa counsellors helps you procure your visa
              efficiently. Our services also include guidance in lining up the
              mandatory documents like the Statement of Purpose and
              Accommodation Assistance.
            </p>
            <p>
              An open work permit can open up a multitude of professional
              opportunities for you. The validity of your Spouse Visa will be
              the same as your partner’s study or work permit.{" "}
            </p>
            <p>
              Spouse Visa offers the candidate an Open Work Permit, thus
              allowing them to work and pursue a professional career.
            </p>
            <p>
              You can either apply for your visa after your partner has already
              arrived in the foreign country or it is also possible for you to
              apply simultaneously with your partner’s initial study or work
              visa.
            </p>
          </div>
        </div>

        <div className="flex flex-col pb-5">
          <h1 className="font-bold text-xl lg:text-3xl py-5">
            You may apply for a Spouse Visa (Open Work Permit) if your partner
            a:
          </h1>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> is a
            full-time student
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> has a
            valid study permit
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> has a
            valid work visa
          </p>
        </div>

        <div>
          <h1 className="font-bold text-xl lg:text-3xl pb-5">
            Mandatory Documents
          </h1>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Copy of
            your partners study or work permit{" "}
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Marriage
            Certificate
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Proof of
            financial stability
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Medical
            Examination
          </p>
          <Link href='/services/sop-resume-prep'><p
            className="hover:cursor-pointer text-red-500"
          >
            <i className="fa-solid fa-chevron-right text-red-500"></i> Statement
            of Purpose
          </p></Link>
        </div>
      </div>
    </div>
  );
};

export default SpouseVisa;
