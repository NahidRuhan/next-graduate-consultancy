import banner from "@/public/assets/service/Air Ticket/banner.jpg" 
import pic1 from "@/public/assets/service/Air Ticket/1.jpg";
import Image from "next/image";

const AirTicket = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          Air Ticket
        </h1>

        <div className="flex items-center flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={pic1} alt="" />
          <div className="flex flex-col gap-5">
            <h2 className="font-bold">Air ticket / Travel insurance</h2>
            <p>
              Choosing the right airline and flight may be both complex and
              challenging. We, at Disha Education Consultancy, understand the
              student’s and their parents’ concerns.{" "}
            </p>
            <p>
              We not only provide kids with end-to-end comfort by arranging
              flights from their home country to a foreign land or desired
              country, but we also alleviate parents’ concerns by providing
              travel insurance for unforeseen circumstances.
            </p>
            <h2 className="font-bold">Assistance with flight bookings:</h2>
            <p>
              We help students choose airlines and purchase tickets that meet
              their needs and budget.
            </p>
            <h2 className="font-bold">Guidelines for Travel:</h2>
            <p>
              We inform and prepare students for their journey based on the most
              recent travel warning issued by their home country and the country
              they wish to visit.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Pick-up from the airport:</h2>
          <p>
            Our students are picked up from the airport and taken to their
            chosen lodging in the foreign destination.
          </p>
          <h2 className="font-bold">Insurance for Travel:</h2>
          <p>
            We provide travel insurance to safeguard the well-being and safety
            of our students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirTicket;
