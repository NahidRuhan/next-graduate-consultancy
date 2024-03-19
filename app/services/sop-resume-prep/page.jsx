import banner from "@/public/assets/service/Statement of Purpose/banner.jpg";
import pic1 from "@/public/assets/service/Statement of Purpose/1.jpg";
import pic2 from "@/public/assets/service/Statement of Purpose/2.jpg";
import Image from "next/image";

const Sop = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          Statement Of Purpose
        </h1>

        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-5">
            <p>
              Highlighting your accolades in the best light might not be your
              penchant, but it is ours. At Graduate Consultancy, we take immense
              pride in providing the best SOP writing services in Bangladesh.
            </p>
            <p>
              Our cadre of experts is professionally trained to aid you in
              writing and editing your Statement of Purpose drafts to
              drastically escalate the likelihood of your selection abroad.
            </p>
            <h2 className="font-bold">What is a Statement of Purpose? </h2>
            <p>
              It is a crucial document often required as part of the application
              process for admission to universities or colleges, especially for
              graduate programs or higher education abroad. The Statement of
              Purpose is a written essay or statement that outlines a
              candidate&apos;s academic background, career goals, reasons for
              pursuing a particular course or program, and personal motivations
              for applying to a specific institution.
            </p>
            <p>
              This document allows applicants to showcase their strengths,
              achievements, aspirations, and relevant experiences that make them
              suitable candidates for the program. It provides an opportunity
              for candidates to articulate their interests, explain their
              passion for the field of study, and demonstrate how the program
              aligns with their career objectives.
            </p>
            <p>
              Admissions committees use the SOP to assess a candidate&apos;s
              clarity of purpose, motivation, and suitability for the program. A
              well-written SOP can significantly impact the admission decision,
              as it gives insight into the applicant&apos;s personality, goals,
              and commitment to the chosen field of study.
            </p>
            <p>
              Statement of Purpose can either make or break your dream, hence
              hiring the experts provides you with a leeway to explore the
              broadening of your academic horizons.
            </p>
            <h2 className="font-bold">
              How will Graduate Consultancy elevate your SOP?
            </h2>
            <p>
              If you are a student who is resolute about moving across the globe
              to secure a seat in an esteemed college or university, then
              chances are you are well aware of the pivotal role SOP plays in
              turning your dream into reality.
            </p>
          </div>
          <Image className="lg:w-1/2" src={pic1} alt="" />
        </div>

        <div className="flex items-center flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={pic2} alt="" />
          <div className="flex flex-col gap-5">
            <p>
              What makes Graduate Consultancy impeccable is our clienteles
              immense satisfaction with our work. Each SOP is appraised and
              treated uniquely.
            </p>
            <p>
              We possess the ability to deliver individualized and original
              essays in a time-restrained manner.
            </p>
            <p>Our professional writers are the very best in the industry. </p>
            <p>
              Our team of writers is extremely experienced in composing Academic
              Documents.
            </p>
            <p>
              like Justification Letter, Letter of Recommendation, Letter of
              Intent, Curriculum Vitae, Statement of Purpose and Admission
              Essays.
            </p>
            <p>
              Team Graduate Consultancy has procured immeasurable success with
              profiles of all kinds, irrespective of gap years or prior
              rejections.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold">How to proceed further?</h2>
          <p>
            Once the introductions are out of the way, we believe in targeting
            the heart of the matter right away. Hence, our team will send you an
            SOP questionnaire that holds relevance to your profile with
            immediate effect. The questions will revolve around your basic
            details, your academic and financial profiles, extracurricular
            activities & achievements and/or hobbies, your future aspirations
            and goals (short-term & long-term) as well as the course, college
            and country you have taken admission in. If the need arises, further
            on-call or in-person meetings can be scheduled as well.
          </p>
          <p>
            Based on your input, our team of professional SOP writers then
            drafts as per the guidelines issued by the aforementioned university
            or employer. The draft will be sent to you for inspection and
            rectification. The corrections will be made for free with no
            additional hidden costs. Upon further communication and amendments,
            the finalized document will be sent to you.
          </p>
          <p>
            For more details, contact us at
            <code>(+880) 992-477-6600 | (+880) 972-491-3620</code> or drop a
            line at info@graduationconsultancy.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sop;
