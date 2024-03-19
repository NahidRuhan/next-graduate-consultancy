import banner from "@/public/assets/service/Pre-departure Guidance/banner.jpg";
import guidance1 from "@/public/assets/service/Pre-departure Guidance/1.jpg";
import guidance2 from "@/public/assets/service/Pre-departure Guidance/2.jpg";
import Image from "next/image";

const PreDeparture = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl text-center lg:text-left py-10">
          Pre-Departure Guidance
        </h1>
        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-5">
            <p>
              As soon as the student receives his or her visa, the candidate
              prepares to fly abroad to the country of choice to further his or
              her education credentials. Our pre-departure event (Zindagi naa
              milegi dobara) is a very useful session for students as it
              provides them all the necessary information to make their living
              in a foreign country a relatively easy affair.{" "}
            </p>
            <p>
              A pre-departure event is offered to students who have their
              student visa approved by the embassy and their passports attested
              with the same. Our event gives the students a fair idea of where
              to start their planning process for the long-awaited journey.{" "}
            </p>
            <p>
              The pre-departure event gives an insight into what to expect in
              the country of study. These are things that could make moving and
              settling into a new country comfortable & enjoyable.{" "}
            </p>
          </div>
          <Image className="lg:w-1/2" src={guidance1} alt="" />
        </div>
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={guidance2} alt="" />
          <div className="flex flex-col gap-5">
            <p>
              The orientation will certainly cover aspects regarding what to
              purchase from the resident country before looking to travel to
              your country of choice. Our expert orientation team will clear all
              your doubts and concerns giving you confidence throughout the
              pre-departure period.
            </p>
            <h2 className="font-bold">Pre-departure Guide for Students</h2>
            <p>
              Before each intake, Graduate Consultancy will arrange a
              pre-departure orientation for students who are looking to travel
              to their respective countries. This is a great opportunity for
              students to network with other students who have chosen the same
              country, university, and course. We are here to provide our
              students with A-Z guidance about the country (the country that
              they will be traveling to), its culture, dos and don’ts that need
              to be strictly followed by the students, and so on.{" "}
            </p>{" "}
            <p>
              This information will help students to prepare mentally and
              physically for the new opportunities that await them in their
              respective universities and the countries that they are traveling
              to.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold py-5 text-xl lg:text-3xl">
            The Pre-Departure guidelines include the following
          </h1>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Shopping
            List
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Travel
            Documents Required for Student Visa
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i>{" "}
            Navigating Through the Airport at Your Arrival Destination
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i>{" "}
            Accommodation
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i>{" "}
            Transportation and Driving License
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Mobile
            Phone and Internet
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Opening a
            Bank Account
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Health
            Insurance
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Legal
            Assistance for Work Permit and Permanent Residence Permit
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Contacts
            of our students in the country they are travelling.
          </p>
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i> Also, we
            give their contacts to our representative in that country.
          </p>{" "}
          <p>
            <i className="fa-solid fa-chevron-right text-red-500"></i>{" "}
            Accommodation
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreDeparture;
