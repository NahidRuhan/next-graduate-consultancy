"use client"

import { useRouter } from "next/navigation";
import { FaBuildingColumns, FaCcVisa, FaCreditCard, FaFile, FaGraduationCap, FaPlane, FaRing, FaUserGroup } from "react-icons/fa6";

const HomeServices = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className="hero min-h-screen py-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pzcbSpW/Home-Service.jpg)",
        }}>
        <div className="hero-content text-center text-neutral-content flex flex-col gap-32">
          <div>
            <h1 className="text-4xl p-5 text-red-700 font-bold">Services</h1>
            <p className="text-6xl font-bold">Our Value Added Services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20">
          <div

  onClick={() => {
    router.push("/services/career-counseling");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaGraduationCap /></h2>
                <p className="font-bold text-blue-950">Career Counseling</p>
                <p className="font-small font-light">
                  Developing a long lasting relationship and identifying the
                  interests and the goals of students, our career counseling
                  assists...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/university-selection");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaBuildingColumns /></h2>

                <p className="font-bold text-blue-950">University Selection</p>
                <p className="font-small font-light">
                  Selecting the right University is a daunting task given the
                  vast choices that are available. Not to worry we make...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/visa-document");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaFile /></h2>

                <p className="font-bold text-blue-950">Visa Document</p>
                <p className="font-small font-light">
                  Visa documentation, the most tedious and demanding aspect of
                  their oversease education proccess. Bearing this in mind...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/student-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaCcVisa /></h2>

                <p className="font-bold text-blue-950">Student Visa</p>
                <p className="font-small font-light">
                  Student visa, as the name suggests are visas issued to
                  applicants whose primary purpose of visit...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/sop-resume-prep");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaFile /></h2>

                <p className="font-bold text-blue-950">
                  SOP|Resume Preparation
                </p>
                <p className="font-small font-light">
                  Effective profile writing, goal projection, Academic.
                  Relevantion and strong connection to Bangladesh...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/spouse-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaRing /></h2>

                <p className="font-bold text-blue-950">Spouse Visa</p>
                <p className="font-small font-light">
                  If you are a US citizen you have 2 ways to bring your foreign
                  spouse to the us to live
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/visitor-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaUserGroup /></h2>

                <p className="font-bold text-blue-950">Visitor visa</p>
                <p className="font-small font-light">
                  Visitors visa are non immigrant visas for person who want to
                  enter the Canada temporarily for business
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/pr-immigration");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaUserGroup /></h2>

                <p className="font-bold text-blue-950">PR</p>
                <p className="font-small font-light">
                  Permanent resident (PR) is the set of techniques and
                  strategies related to managing how information about an...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/accommodation");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaCreditCard /></h2>

                <p className="font-bold text-blue-950">Accommodation</p>
                <p className="font-small font-light">
                  Homely PG and Hostel around campus with monthly food. Stay
                  connected with your family from your landing...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/bank-solvency");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaPlane /></h2>

                <p className="font-bold text-blue-950">Bank Solvency</p>
                <p className="font-small font-light">Bank solvency ensures a bank&apos;s financial stability, allowing it to honor obligations, protect deposits, and absorb losses, ensuring confidence for customers.</p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/air-ticket");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaUserGroup /></h2>

                <p className="font-bold text-blue-950">Air Ticket</p>
                <p className="font-small font-light">
                An air ticket is a purchased document granting permission for an individual to board a specific flight at a designated time and date.
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    router.push("/services/pre-departure-guidance");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
              <h2 className="text-3xl sm:text-5xl text-red-700 flex justify-center"><FaCreditCard /></h2>

                <p className="font-bold text-blue-950">
                  Pre-Departure Guidance
                </p>
                <p className="font-small font-light">
                Pre-departure guidance provides essential advice and support before travel for a prepared journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
