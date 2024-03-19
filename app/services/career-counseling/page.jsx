import pic1 from "@/public/assets/service/Career Counseling/banner.jpg";
import pic2 from "@/public/assets/service/Career Counseling/1.jpg";
import pic3 from "@/public/assets/service/Career Counseling/2.jpg";
import Image from "next/image";

const CareerCounseling = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={pic1} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="mt-10 font-bold text-3xl py-10 text-center lg:text-left">
          Career Counseling
        </h1>

        <div className="flex items-center gap-10 flex-col lg:flex-row">
          <div className="flex flex-col gap-10">
            <p className="cen">
              At Graduate Consultancy, we believe that education is not only
              about acquiring knowledge but also about preparing for a
              successful career. Our dedicated team of career counselors is
              committed to providing comprehensive career guidance and
              counseling services to aspiring graduates.
            </p>
            <p className="cen">
              Our career counseling services are tailored to meet the unique
              needs and aspirations of each individual. We assist students in
              identifying their strengths, interests, and career goals, helping
              them make informed decisions about their academic pursuits.
              Whether it&apos;s choosing the right course, specializing in a
              particular field, or exploring diverse career paths, our
              counselors offer personalized advice and guidance.
            </p>
          </div>
          <Image className="lg:w-1/2" src={pic2} alt="" />
        </div>

        <div className="flex items-center flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={pic3} alt="" />
          <div className="flex flex-col gap-6">
            <p className="cen">
              An amalgamation of the aforementioned aspects of life makes up the
              suggestions given by our career counsellors.{" "}
            </p>
            <p className="cen">
              We provide access to valuable resources, information about various
              industries, emerging job trends, and insights into the skills
              required to succeed in today&apos;s competitive job market.
              Additionally, we offer assistance in crafting resumes, preparing
              for interviews, and developing essential soft skills necessary for
              professional success.
            </p>
            <p className="cen">
              At Graduate Consultancy, our goal is to empower students to make
              well-informed decisions about their academic and career paths. We
              are committed to helping individuals navigate the complexities of
              career choices, ensuring they are well-prepared and confident as
              they embark on their professional journey. Through our
              comprehensive career counseling services, we aim to support our
              clients in achieving their long-term career aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounseling;
