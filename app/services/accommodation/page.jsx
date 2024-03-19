import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import accommodation1 from "../../assets/service/Accommodation/1.jpg";
import banner from "@/public/assets/service/Accommodation/banner.jpg";
import pic1 from "@/public/assets/service/Accommodation/1.jpg";
import Image from "next/image";
// import pic2 from "../../assets/service/Accommodation/2.jpg";
const Accommodation = () => {
  // eslint-disable-next-line no-unused-vars
  const faq = [
    {
      question: "How does Graduate Consultancy provide accommodation aid?",
      ans: "Graduate Consultancy assists students with housing by giving advice, support, and guidance to students applying to prestigious colleges all over the world.",
    },
    {
      question:
        "What kinds of housing options are there for overseas students?",
      ans: "Dormitories, private apartments, homestays, and other types of lodging are all options.",
    },
    {
      question: "Is it possible to rent an apartment as a student?",
      ans: "You can rent an apartment as long as you can show proof of income.",
    },
    {
      question: "Is it possible for students to use this service on their own?",
      ans: "Yes, just our lodging service is available to you. You are under no obligation to use any of our other services.",
    },
    {
      question: "How much money will I need to hire an accommodation service?",
      ans: "Our organization will determine the pricing of this service based on a variety of factors.",
    },
  ];
  return (
    <div>
      <div>
        <Image className="w-full" src={banner} alt="" />
      </div>

      {/* <div className="max-w-7xl mx-auto py-10"> */}
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">
        <h1 className="font-bold text-3xl py-5 text-center lg:text-left">
          Accommodation
        </h1>

        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-5">
            <p>
              Graduate Consultancy offers hassle-free loan approvals so you
              don&apos;t have to go to numerous banks for financing.{" "}
            </p>{" "}
            <h2 className="font-bold">Comfortable Housing:</h2>
            <p>
              All of our rooms are up to date in terms of safety and hygiene,
              and they provide an outstanding living experience.
            </p>
            <h2 className="font-bold">Affordable Prices:</h2>
            <p>We provide the best lodging deals at incomparable pricing. </p>
            <h2 className="font-bold">24/7 Service:</h2>
            <p>
              Count on our world-class customer support 24 hours a day, 7 days a
              week. Our client service is second to none.
            </p>
          </div>
          <Image className="lg:w-1/2" src={pic1} alt="" />
        </div>

        <div>
          <h1 className="font-bold text-2xl py-5">FAQ</h1>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                How does Graduate Consultancy provide accommodation aid?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Graduate Consultancy assists students with housing by giving
                advice, support, and guidance to students applying to
                prestigious colleges all over the world.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                What kinds of housing options are there for overseas students?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dormitories, private apartments, homestays, and other types of
                lodging are all options.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Is it possible to rent an apartment as a student?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can rent an apartment as long as you can show proof of
                income.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Is it possible for students to use this service on their own?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, just our lodging service is available to you. You are under
                no obligation to use any of our other services.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                How much money will I need to hire an accommodation service?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our organization will determine the pricing of this service
                based on a variety of factors.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
