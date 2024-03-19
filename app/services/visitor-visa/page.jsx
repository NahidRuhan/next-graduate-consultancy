import pic1 from "@/public/assets/service/Visitor Visa/banner.jpg";
import pic2 from "@/public/assets/service/Visitor Visa/1.jpg";
import pic3 from "@/public/assets/service/Visitor Visa/2.jpg";
import Image from "next/image";


const VisitorVisa = () => {
  return (
    <div>
      <div>
        <Image className="w-full" src={pic1} alt="" />
      </div>

      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 cen">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          Visitor Visa
        </h1>

        <div className="flex items-center flex-col-reverse lg:flex-row">
          <Image className="lg:w-1/2" src={pic2} alt="" />
          <div className="flex flex-col gap-5">
            <p>
              A visitor visa, also known as Temporary Resident Visa, is
              necessitated for different purposes — ranging from a visit to
              friends and family to a business-related visit or even something
              as simple as a vacation. This particular kind of visa is stamped
              on your passport.
            </p>
            <p>
              Graduate Consultancy is a veteran in the field of Visa Advisory
              firms. With 18 years of experience under our belt, we diligently
              work towards ensuring the true satisfaction of our clientele. At
              Graduate Consultancy, we provide A-Z care, meaning we will assist
              you throughout the entire process. Our services also include
              guidance in Air Ticket & Travel Insurance. The validity of a
              Visitor Visa and the permitted stay of a foreign national depend
              upon the rules and regulations of the said country. There is also
              the option of an extension for this type of visa.
            </p>
            <p>
              Moreover, it must be noted that only some countries offer visas on
              arrival, while most of the countries mandate that the visa be
              obtained before traveling to them. Besides, visitors are strictly
              prohibited from undertaking any sort of profession. However, a
              visit visa grants you to freely explore the landscape of the
              country and tourist destinations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-center lg:text-left py-5">
            The following criterion must be fulfilled in order to procure a
            Visitor Visa:
          </h1>
          <div className="flex items-center gap-5 flex-col lg:flex-row">
            <div className="flex flex-col gap-10">
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Legitimate
                purpose of visit
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Valid travel
                documents, including passport
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Letter of
                invitation (if applicable)
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Proof of
                financial stability
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Intentions to
                return to your home country
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Proof of
                clean background and a complete lack of criminal record
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Must provide
                a medical certificate declaring good health
              </p>
              <p>
                <i className="fa-solid fa-check text-red-500"></i> Proof of not
                intending to study or work in the foreign country
              </p>
            </div>
            <Image className="lg:w-1/2" src={pic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorVisa;
