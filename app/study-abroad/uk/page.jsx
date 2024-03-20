import { FaDonate, FaTableTennis } from "react-icons/fa";
import { BsBank, BsFillTelephoneFill } from "react-icons/bs";
import { FaAppStoreIos, FaBriefcaseMedical, FaCheck, FaHotel, FaPills, FaTruck } from "react-icons/fa6";
import { MdMediation } from "react-icons/md";
import Marquee from "react-fast-marquee";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ukl from "@/public/assets/study-abroad/uk/1.png"
import uk2 from "@/public/assets/study-abroad/uk/2.png"
import uk3 from "@/public/assets/study-abroad/uk/3.jpg"
import banner from "@/public/assets/study-abroad/uk/banner.jpg"
import Image from "next/image";



const Uk = () => {
    const accordionContent = [
        {
          question: "Can IELTS be waived to get admission to the University?",
          answer: "Though IELTS can be waived sometimes by the university if the year 12 English language score is more than 70%, it is better to do language proficiency test like IELTS or PTE as the top end universities would want these scores. In some cases the university may have their own test. Eg: ARU and DMU"
        },
        {
          question: "Do I need GMAT for a Master's programme in the UK?",
          answer: "Generally, Master’s Courses in the UK do not require a GMAT with an exception of a Master’s in Finance in a few universities like Lancaster, LSE etc."
        },
        {
          question: "Can my Visa be extended?",
          answer: "By completion of the course if a student is able to find a job with an annual package of 21,000 pounds per annum from a company listed in the UKVI website then the Visa can be extended. Students doing a PhD get 1 year extension or starting a business can also extend their visas Tier 1."
        },
        {
          question: "Should I choose a university based on ranking alone or are there other ways to choose?",
          answer: "Choice of a university should ideally be based on the course modules that suit one's interest. Rankings can be a guideline as the parameters in different ranking lists vary."
        },
        {
          question: "Can I work part time while studying? How much will I be paid?",
          answer: "Full-time international students are allowed to work 20 hours part-time during the term period and 40 hours or full-time during vacations. On average, a student is paid a minimum of 7-10 pounds per hour."
        },
        {
          question: "Is a sandwich course better than a three years UG course?",
          answer: "The Industrial Experience year enables you to gain relevant industrial experience as part of your studies by usually spending your third year working for a company. Besides the money that you earn during this year, you also gain practical experience that can be invaluable both in your final year project and when applying for jobs after graduating."
        },
        {
          question: "Is an Interview mandatory while filing my Visa?",
          answer: "Yes, all the students are required to attend a credibility Interview via Skype from UKVI. The interview is designed to check whether you are a genuine student who knows details about the course going to be studied."
        },
        {
          question: "Can I change the Course once I reach the university?",
          answer: "You can change the Course if it is in the same department at the same university. It has to be approved by the Admissions tutor."
        },
        {
          question: "Do all design courses require a portfolio?",
          answer: "Yes, design courses require a portfolio. A basic portfolio needs at least 20 pieces of work showing artistic and creative ability as well as sketching skills. This can be sent as a web link, CD or as scanned copies."
        },
        {
          question: "Will I have to pay for medical treatment in the UK?",
          answer: "The National Health Service (NHS) in the UK provides free and subsidized health care to international students if their Course is over 6 months."
        },
        {
            question: "I don’t have the grades I need to get into the course I want. What can I do?",
            answer: "Many colleges have Pathway programmes validated by a university that allow you to prepare for a degree course. They last from six months to a year and teach you a variety of subjects, including the one you plan to study – English, study skills, research and more. They are sometimes called foundation, diploma or pre-masters courses as well. They can be studied in the UK or in India as well."
          },
          {
            question: "How many hours do I need to go to class?",
            answer: "Usually 15–18 hours per week are allocated for classroom teaching. Apart from that, library research, tutorials and assignments too have to be scheduled into your timetable."
          },
          {
            question: "Are entrance exams required for UK Universities?",
            answer: "Most of the courses don’t require any test as British universities accept the Indian academic marks, but a few professional courses like LLB and Medicine require tests like LNAT and UKCAT respectively. GMAT too is only required for MBA or Masters in certain universities."
          },
          {
            question: "Are universities that require LNAT better than those that don't?",
            answer: "The universities that require LNAT are more competitive and get a lot more applications than the others. The test is more of a filter rather than a sign of being better."
          },
          {
            question: "How important are sports and extracurricular activities for admission to a UK university?",
            answer: "The academic grades are the most important criteria of admission to a British university. Sports and extracurricular activities better your profile in comparison to others, especially for scholarships, Job Interviews etc. There are a few scholarships which you will be eligible for based on the sport played. Eg: Cardiff"
          },
          {
            question: "How long does it take to get a student visa?",
            answer: "As long as the paperwork is in order it should take about 15 working days. Students in Bangalore can file a priority visa which normally takes 5 working days. It costs Rs 10,000 extra. This facility is only available in Bangalore."
          },
          {
            question: "How are scholarships awarded?",
            answer: "Scholarships are usually merit-based. So the first criterion is academic marks. You have to have an offer from the university which you need to accept. Most scholarships require you to write an essay on a given topic, and some may have an interview as well. Your CV should stand out as scholarships are very competitive."
          }

      ];
      
    return (
        <div>

        <div>
        <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About United Kingdom</h1>
                <div className="flex items-center gap-5 flex-col-reverse lg:flex-row">
                    <Image src={ukl} alt="" />
                    <div className="flex flex-col gap-3">

                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> The UK is one of the top destinations to study worldwide. It is rich in history and has high class institutions in every corner of the country.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> The United Kingdom has much to offer international students on par with other English-speaking countries.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Compatibility in the education system enables you to study in a way that fulfills your career aspirations.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> The study destination where international students have continued their presence as the number of students has increased over the years.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> The UK welcomes students from India, China, Hong Kong, France, the US, Germany, Malaysia, the Republic of Ireland, Greece and more.</p>

                    </div>
                </div>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Why Study In UK?</h1>
                <div className="flex items-center gap-5 flex-col lg:flex-row">

                    <div className="flex flex-col gap-3">

                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span>International Recognition: is home to four of the world’s top ten universities and has the second highest number of Nobel Prize winners in the world.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span>Affordable Education: Undergraduate degrees in UK are of three to four years and a master’s program is typically between one and two years, saving your education & living costs.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span>Education Recognition: Canada has one of the world’s best and superior quality of education system having international recognition and outstanding programs in diverse subject areas.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span>Scholarships: Institutions in UK offers variety of scholarships, financial aid, grants and bursaries to international students.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> UK offers well-researched and diverse range of courses in globally ranked institutions preparing students for the corporate world.</p>

                    </div>
                    <Image src={uk2} alt="" />
                </div>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Visa Process:</h1>
                <p>The visa application will be evaluated under the new points-based standards. You should get your application under Tier 4 – General Student. To gain a General Student Visa, you need to acquire 40 points: CAS Number 30 points are granted for the CAS Number and the original academic documents issued to grant you admission at the Academy. Bank statement gives 10 points by providing your personal bank statement showing that you have sufficient money to meet the maintenance costs set by the UK Border Agency. Check if you qualify for the category of visa Tier 4.</p>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10">A Step By Step Guidance To Applicants And Visa Requirements:</h1>
                <p>The visa application will be evaluated under the new points-based standards. You should get your application under Tier 4 – General Student. To gain a General Student Visa, you need to acquire 40 points: CAS Number 30 points are granted for the CAS Number and the original academic documents issued to grant you admission at the Academy. Bank statement gives 10 points by providing your personal bank statement showing that you have sufficient money to meet the maintenance costs set by the UK Border Agency. Check if you qualify for the category of visa Tier 4.</p>
                <div className="flex items-center flex-col lg:flex-row">
                    <Image src={uk3} alt="" />
                    <div className="flex flex-col gap-3 py-5">
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> The UK is one of the top destinations to study worldwide. It is rich in history and has high class institutions in every corner of the country.</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Register with DEC and talk with an experienced Education Counsellor</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Choose a course according to your areas of interest</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Shortlist a university that suits your preferences, entry requirements and budget</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Apply for the UK university with our assistance</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Get counselling on visa from our experts</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Pay financial deposits</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Get help for the credibility interview from our experts</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Apply for your visa with our help</p>
                        <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Attend our pre-departure session and get ready to depart for UK</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Processing Time For UK Student Visa</h1>
                <p className="pb-10">UK student visa processing time is usually 3 weeks. The time you make the decision depends on the country you are applying for, the student visa processing time may vary depending on the embassy you are applying for.</p>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Job After Study in the UK</h1>
                <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-20 max-w-4xl mx-auto">
                    <div className="flex flex-col gap-3">
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Software Developers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> IT Consultants</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Aerospace Engineers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> IT Manager</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Chief Accountants</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Financial Controllers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> CEO and Managing Directors</p>
                    </div>
                    <div className="flex flex-col gap-3">
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Devops Engineers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Project Managers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Data Scientists</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Strategists</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Portfolio Managers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Fiscal Managers</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> HR Managers</p>
                    </div>
                    
                </div>
            </section>

            <section>
                
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Popular Job Sectors in the UK</h1>

<div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 max-w-4xl mx-auto">
        <div className="flex flex-col gap-5">
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaDonate /></span> Financial Services</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><BsBank /></span> Law Practice</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaAppStoreIos /></span> Apps, Web & E-Commerce</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><MdMediation /></span> Media and Communications</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaTruck /></span> Transportation & Logistics</p>

        </div>
        <div className="flex flex-col gap-5">
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaBriefcaseMedical /></span> Insurance</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><BsFillTelephoneFill /></span> Technology & Telecommunications</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaPills /></span> Pharmaceuticals and Biotechnology</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaTableTennis /></span> Sports, Culture & Recreation</p>
        <p className="inline-flex text-3xl items-center gap-5"><span className="text-5xl text-logoRed"><FaHotel /></span> Service, Tourism & Restaurants</p>
        </div>
        
    </div>
            </section>


                <section>
            <h1 className="text-3xl font-bold py-10 text-center">UK College / University</h1>

            <div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>

    <tr>
    <td>UNIVERSITY OF LONDON</td>
    <td>LONDON METROPOLITAN UNIVERSITY</td>
    <td>UNIVERSITY OF WEST LONDON</td>
  </tr>
  <tr>
    <td>MIDDLESEX UNIVERSITY</td>
    <td>UNIVERSITY OF ROEHAMPTON</td>
    <td>ROYAL ACADEMY OF DRAMATIC ART</td>
  </tr>
  <tr>
    <td>ROYAL COLLEGE OF ART</td>
    <td>ROYAL COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS</td>
    <td>REGENT’S UNIVERSITY LONDON</td>
  </tr>
  <tr>
    <td>CITY OF WESTMINSTER COLLEGE</td>
    <td>ROYAL COLLEGE OF PHYSICIANS</td>
    <td>ROYAL COLLEGE OF MUSIC</td>
  </tr>
  <tr>
    <td>RAVENSBOURNE UNIVERSITY LONDON</td>
    <td>TRINITY LABAN CONSERVATOIRE OF MUSIC AND DANCE</td>
    <td>CROYDON COLLEGE</td>
  </tr>
  <tr>
    <td>LAMBETH COLLEGE</td>
    <td>STANMORE COLLEGE</td>
    <td>COLLEGE OF NORTH WEST LONDON</td>
  </tr>
  <tr>
    <td>IMPERIAL COLLEGE LONDON</td>
    <td>CITY, UNIVERSITY OF LONDON</td>
    <td>UNIVERSITY OF EAST LONDON</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF GREENWICH</td>
    <td>LONDON SOUTH BANK UNIVERSITY</td>
    <td>CENTRAL SAINT MARTINS</td>
  </tr>
  <tr>
    <td>LONDON COLLEGE OF FASHION</td>
    <td>GUILDHALL SCHOOL OF MUSIC AND DRAMA</td>
    <td>CITY LITERARY INSTITUTE</td>
  </tr>
  <tr>
    <td>HARROW COLLEGE</td>
    <td>NEWHAM COLLEGE OF FURTHER EDUCATION</td>
    <td>THE COLLEGE OF HARINGEY, ENFIELD AND NORTH EAST LONDON</td>
  </tr>
  <tr>
    <td>BARNET AND SOUTHGATE COLLEGE</td>
    <td>NORTHUMBRIA UNIVERSITY LONDON</td>
    <td>NEW CITY COLLEGE</td>
  </tr>
  <tr>
    <td>LONDON SCHOOL OF BUSINESS AND FINANCE</td>
    <td>SOUTH THAMES COLLEGE</td>
    <td>UNIVERSITY OF WESTMINSTER</td>
  </tr>
  <tr>
    <td>QUEEN’S UNIVERSITY BELFAST</td>
    <td>STRANMILLIS UNIVERSITY COLLEGE</td>
    <td>ULSTER UNIVERSITY MAGEE CAMPUS</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF ULSTER, JORDANSTOWN</td>
    <td>UNION THEOLOGICAL COLLEGE</td>
    <td>IRISH BAPTIST COLLEGE</td>
  </tr>
  <tr>
    <td>NORTHERN REGIONAL COLLEGE</td>
    <td>NEWMAN COLLEGE IRELAND</td>
    <td>SOUTH WEST COLLEGE, OMAGH</td>
  </tr>
  <tr>
    <td>NORTHERN REGIONAL COLLEGE, BALLYMENA</td>
    <td>NORTHERN REGIONAL COLLEGE – BALLYMONEY</td>
    <td>WHITEFIELD COLLEGE OF THE BIBLE</td>
  </tr>
  <tr>
    <td>SOUTHERN REGIONAL COLLEGE, BANBRIDGE CAMPUS</td>
    <td>SOUTHERN REGIONAL COLLEGE, ARMAGH CAMPUS</td>
    <td>KILKEEL COLLEGE OF FURTHER EDUCATION</td>
  </tr>
  <tr>
    <td>IRISH SCHOOL OF ECUMENICS</td>
    <td>BELFAST METROPOLITAN COLLEGE</td>
    <td>ST MARY’S UNIVERSITY COLLEGE BELFAST</td>
  </tr>
  <tr>
    <td>SOUTH WEST COLLEGE – COOKSTOWN CAMPUS</td>
    <td>COLLEGE OF AGRICULTURE FOOD AND RURAL ENTERPRISE</td>
    <td>BELFAST BIBLE COLLEGE</td>
  </tr>
  <tr>
    <td>NORTH WEST REGIONAL COLLEGE</td>
    <td>SOUTHERN REGIONAL COLLEGE-ARMAGH CAMPUS</td>
    <td>SOUTH WEST COLLEGE, DUNGANNON</td>
  </tr>

    </tbody>
  </table>
</div>


            </div>

            <p className="py-10 font-bold">*Along with many other universities of your choice</p>

        </section>

        <section>

            <h1 className="font-bold text-3xl pb-10 text-center lg:text-left">Top Universities</h1>

            <Marquee pauseOnClick={true} speed={100}>
            <img className="h-32 w-44 m-10" src="https://i.ibb.co/HTLK61W/Leeds.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/Rvy8VyR/London-Metropolitan-University.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/TMnSLr0/Queens-Mary-University.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/P4ztLPR/University-of-East-London-logo-1.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/WDMkkjf/University-of-leicester.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/jWV9zhf/University-of-Surrey-logo.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/rcJ19X4/UWL.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/rdCht2x/BCU.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/6BpKsC0/Brunel-University-London.jpg" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/F5D84CG/download.jpg" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/PZmZ5cN/King.png" alt="" />

    </Marquee>

        </section>

        <section>

            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">FAQ</h1>

            <div>
      {accordionContent.map((content, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 31}a-content`}
            id={`panel${index + 31}a-header`}
          >
            <Typography variant="h6" fontWeight="bold">
              {content.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{content.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>

        </section>

        </div>


        </div>    
            
    );
};

export default Uk;