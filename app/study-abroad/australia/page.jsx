import Marquee from "react-fast-marquee";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import aus1 from "@/public/assets/study-abroad/australia/1.png"
import aus2 from "@/public/assets/study-abroad/australia/2.jpg"
import aus3 from "@/public/assets/study-abroad/australia/3.jpg"
import aus4 from "@/public/assets/study-abroad/australia/4.jpg"
import aus5 from "@/public/assets/study-abroad/australia/5.jpg"
import aus6 from "@/public/assets/study-abroad/australia/6.jpg"
import banner from "@/public/assets/study-abroad/australia/banner.jpg"
import Image from "next/image";
import { TiTick } from "react-icons/ti";

const Australia = () => {

const accordionContent = [
  {
    "question": "Will Drake help me apply for the visa?",
    "answer": "Your counsellor will help you prepare for the visa application in advance, in an administrative role. This includes getting all the documentation together, and answering any questions you can prepare in advance."
  },
  {
    "question": "How much will my visa cost?",
    "answer": "This depends on your situation. If this is the first visa you are lodging IN Australia (onshore), your student visa (500 subclass) will be $550. However, if you have already lodged a visa onshore (i.e. your second Working Holiday), your visa will cost $1,250. Immigration adds a $700 surcharge to all subsequent visa applications. Note: should you leave the country to lodge, the fee goes back to the original $550."
  },
  {
    "question": "Adding other people to your visa incurs an additional charge?",
    "answer": "Yes, adding other people to your visa, such as a partner or children under 18 years old, incurs an additional charge – $410 for a partner, and $135 for children under 18 years old."
  },
  {
    "question": "When can I start working?",
    "answer": "If you are on a bridging visa, you will continue the work rights of the visa you originally held. If you were on a Working Holiday or Work & Holiday, you can keep working full time until you are granted the student visa. If you have been granted the student visa, but class has not started, you lose your work rights until class starts. If you were on a visitor visa, you will not have work rights until the visa is granted AND class has started."
  },
  {
    "question": "If I have a partner on my visa, what are his/her work rights?",
    "answer": "If you are studying a Masters or higher, your partner has unlimited work rights at all times. If you are studying a bachelor or lower, your partner can only work 40 hours every 2 weeks (i.e. 30 hours one week, 10 hours the next week)."
  },
  {
    "question": "How many hours can I work on a student visa?",
    "answer": "While class is IN session, including the exam period, you can work 40 hours every 2 weeks (i.e. 30 hours one week, 10 hours the next week). When your course is NOT in session, you can work unlimited hours."
  },
  {
    "question": "Once I have my student visa, can I stay in the country even if class has not started?",
    "answer": "You can be onshore (in Australia) for 93 days from the day you apply to your student visa, to the first day of class. However, you can only remain onshore (in Australia) for a maximum of 8 weeks BETWEEN CoEs."
  },
  {
    "question": "What if my course is starting and I still don’t have my student visa?",
    "answer": "If you are on a bridging visa, you must attend class once it starts."
  },
  {
    "question": "Can I study on another type of visa?",
    "answer": "You can study on a visitor visa for 3 months or a Working Holiday/Work & Holiday visa for 4 months."
  },
  {
    "question": "For how long will I have a student visa?",
    "answer": "Your visa will be issued for the same length as your courses. Immigration will add an extra 1, 2 or 3 months to the visa, depending on the length of the course(s) and the time of year the classes end."
  },
  {
    "question": "Immigration will add an extra 1, 2 or 3 months to the visa?",
    "answer": "Your visa will be issued for the same length as your courses. Immigration will add an extra 1, 2 or 3 months to the visa, depending on the length of the course(s) and the time of year the classes end."
  },
  {
    "question": "Can I travel on my student visa?",
    "answer": "Yes, you can exit and enter Australia as many times as you need to while your visa is valid."
  },
  {
    "question": "Will my OSHC be refunded if I stop studying?",
    "answer": "Yes. You will be fully refunded for the period of cover you did not use."
  },
  {
    "question": "Do I need OSHC if I have travel insurance?",
    "answer": "OSHC is a requirement for the student visa. It ensures all students have the same level of medical cover."
  },
  {
    "question": "How much does OSHC cost?",
    "answer": "The average cost is $450-480 for a single, and $2,100-$2,500 for a couple, per year."
  },
  {
    "question": "What can I study on a student visa?",
    "answer": "International students can only study CRICOS-approved courses. Therefore, not all institutions or courses are available to you. However, there is a huge selection of programs, at all levels of education, available across the country."
  },
  {
    "question": "How much does it cost to study in Australia?",
    "answer": "Tuition ranges in price from: $200-$350 a week for an English course (ELICOS), $3,000-$10,000 for a certificate or diploma, $15,000-$35,000 a year for a Bachelor or Masters."
  },
  {
    "question": "How long does it take to enrol in a course?",
    "answer": "We can generally have you enrolled within 1-4 weeks, depending on the institution."
  },
  {
    "question": "Can I take an online course?",
    "answer": "No, you cannot take ‘online-only’ courses. To qualify for a student visa, you must attend face-to-face classes. You will attend an average of 2-3 days a week. However, by visa rules, 25% of your course content can be online."
  },
  {
    "question": "How often will I have to go to class?",
    "answer": "This depends on your program, but 2-3 days is the average for college and university, while 4 days is normal for English courses."
  },
  {
    "question": "Do I have to pay all the tuition fees at once?",
    "answer": "No, you can pay your tuition in installments – usually every 3 to 6 months depending on the institution. The exception is for English courses, where you must pay the first 3 months upfront."
  },
  {
    "question": "Who can translate my documents?",
    "answer": "Generally speaking, this must be done by an accredited translation service."
  },
  {
    "question": "What is Overseas Student Health Cover (OSHC)?",
    "answer": "OSHC is a mandatory requirement of your student visa. You must be covered for the entire time you are studying in Australia. It must be paid in full for the entire time you will have the visa. You will purchase your OSHC just before you apply for your student visa. You have to pay for it all upfront (no partial payments)."
  },
  {
    "question": "How fast can I get everything organized?",
    "answer": "In an emergency time frame, we can get you enrolled and prepared for your visa application in just a few days!"
  },
  {
    "question": "Do I need an IELTS exam to enroll and get my visa?",
    "answer": "For non-native English speakers, this will depend on what you study, and your passport nationality."
  },
  {
    "question": "How long will it take for the visa to be granted?",
    "answer": "An average of 28 days. We have seen a visa granted offshore in 24 hours, and as long as 8 weeks onshore. Providing a thorough application helps move the process along more quickly."
  },
  {
    "question": "If I take two courses, do I need two visas?",
    "answer": "No, you can bundle courses under the same visa."
  },
  {
    "question": "Can I leave Australia when I am on a bridging visa?",
    "answer": "No. While on a bridging visa, you cannot travel outside Australia until you have been granted your student visa."
  },
  {
    "question": "Will I need a medical check?",
    "answer": "In order to receive a student visa, the visa office must be confident that you are a Genuine Temporary Entrant, meaning you truly plan to be in Australia TEMPORARILY to study and then RETURN HOME. It is very important that you read the GTE document on this page."
  },
  {
    "question": "I have a criminal record. Will my visa be refused?",
    "answer": "You will have to disclose this in your student visa application. This will depend on the severity of the crime. We have had students with charges including drinking & driving and common assault get student visas granted."
  },
  {
    "question": "Will I have to show money in my bank account for the visa?",
    "answer": "Your passport nationality dictates whether or not you have to show Evidence of Funds. Generally speaking, UK, Irish, Canadian, USA, and European passport holders will NOT have to show funds for the visa application. However, you can still be asked at the discretion of your case officer!"
  },
  {
    "question": "What is Evidence of Funds?",
    "answer": "Immigration expects that you will have sufficient funds to live and study in Australia. This amounts to $19,830 for your first year’s living expenses + fees for your first year of tuition + return airfare."
  },
  {
    "question": "Do not have proof of my highest level of education with me. Is that a problem?",
    "answer": "Yes, you need to show at least a high school certificate (or transcripts), for both the enrollment and the visa application. A scanned copy should suffice."
  },
  {
    "question": "Will I get a refund if my visa is refused?",
    "answer": "The institution will refund your tuition, minus the enrollment fee. You will NOT get your visa application fees refunded."
  },
  {
    "question": "Do I have to pay Drake Student Recruitment for your services?",
    "answer": "No, our services are 100% free."
  },
  {
    "question": "What do I need to do to be sponsored, or get permanent residency?",
    "answer": "Please note that we are unable to provide any advice on migration issues such as permanent residency or sponsorship. We can only assist you with student visa-related information."
  },
  {
    "question": "Can I get a scholarship, a student loan, or funding from Australia?",
    "answer": "International students cannot take out student loans in Australia, nor does the government provide funding. Should you wish to apply for a scholarship, you must contact institutions directly."
  },
  {
    "question": "Can I enroll directly at the college? Why do I need an agent?",
    "answer": "Yes, you can, but we take the headache out of the process – all free of charge. In addition, we provide counseling on your studies and may help you come up with some ideas you have not considered. Be careful of agents who offer discounts. This is not allowed by the institutions; thus you are putting your life in the hands of unethical people in the industry."
  }

];


    return (
        <div>

            
        <div>
        <Image className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  

        <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Australia</h1>
                <div className="flex items-center gap-5 flex-col-reverse lg:flex-row">
                    <Image src={aus1} alt="" />
                    <div className="flex flex-col gap-3">

                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Australia ranks third in overseas education.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> To study in Australia, you must choose a world-class education policy.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Cultural diversity, immigration-friendly rules and the opportunity to gain experience.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Australia is the fourth happiest and twelfth largest economy in the world.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> It has consistently maintained its educational standards.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> For international students, a CRICOS Registered Institute guarantees</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> The institute and curriculum meet the highest standards.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Australian universities are globally recognized.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> 7 of the world’s top 100 universities in Australia.</p>
                        <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Right-to-work student visa.</p>

                    </div>
                </div>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Why Choose Australia ?</h1>
                <div className="flex items-center gap-5 flex-col lg:flex-row">

                    <div className="flex flex-col gap-3">

                    <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Most Livable Cities: Australia has 7 of the 75 best student cities in the world. (According to QS Best Student Cities)</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Top Universities: The quality of education is high with over 40 accredited universities in Australia.</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Eligibility: International employers are increasingly seeking graduates from Australian universities.</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Work Opportunities: International students who want to earn money for living expenses while working can work 40 hours a week in Australia.</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Scholarship: The Australian Government invests generously in international education.</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Multicultural Society: Australians value cultural diversity and social sophistication by integrating international students into campuses and communities.</p>

                    </div>
                    <Image src={aus2} alt="" />
                </div>
            </section>

            <section>
              
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Visa Process</h1>
                <p>Australia has a stringent visa system, but we can help guide you through the process and give you the best chance of success.</p>
                <div>
                <div className="flex items-center gap-5 flex-col lg:flex-row">
                <Image src={aus3} alt="" />


                    <div className="flex flex-col gap-3">

                    <p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Register with DEC and talk with an Education Counsellor</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Choose a course according to your areas of interest</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Shortlist a university that suits your preferences, entry requirements and budget</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Apply for the Australian university with our assistance</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Get counselling on visa from our experts</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Pay financial deposits</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Receive COE (Confirmation of Enrolment) from the university</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Apply for your visa with our help</p>
<p className="flex items-center gap-2"><span className="text-red-500"><TiTick /></span> Attend our pre-departure session and get ready to depart for Australia</p>


                    </div>
                </div>
                </div>
            </section>

            <section>
                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Visa Processing Time</h1>
                <p>Application processing time can vary from 3 days to a few weeks depending on the volume. Most visa applications take four weeks to process. If you have been studying in Australia for more than 10 months and the Australian academic year ends (usually mid-December), your visa is usually valid by March 15 of the following year.</p>
            </section>

            <section>

                <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Top reasons to study in Australia</h1>

                <div className="flex items-center gap-5  flex-col-reverse lg:flex-row">
                <Image src={aus4} alt="" />
                <div className="flex flex-col gap-5">
                    <p><span className="font-bold">Prestigious universities:</span> There are many options available to international students who want to study in Australia. In total, there are 43 universities in Australia, including 40 domestic, 2 foreign, and 1 private institution. Six Australian universities are ranked in the top 100 globally recognized universities, demonstrating both the importance of quality and quantity.</p>
                    <p><span className="font-bold">Diversity of cultures:</span> Australia is a diverse melting pot of cultures. Due to the abundance of different cultures, there is a chance to experience something new and venture outside of your comfort zone while also feeling a part of the multicultural community. </p>
                    <p>Living in a multicultural environment has many advantages, like wonderful culinary options, open-air international events, and the opportunity to study another language.</p>
                </div>

            </div>
            <div className="flex items-center gap-3  flex-col lg:flex-row">
                <div className="flex flex-col gap-3">
                    <p><span className="font-bold">The Natural World:</span> Australia is well known for its varied landscape. Known for its wide expanses and exotic wildlife, the Outback is renowned. With thousands of kilometers of magnificent coastline to select from, beach lovers are inundated with options. </p>
                    <p>You may snorkel or dive on the stunning Great Barrier Reef while on vacation. Kayaking or bushwalking can frequently be accomplished in a single-day trip.</p>
                    <p><span className="font-bold">Easily Obtained Student Visas:</span> Australia has a quick application process for Student visas if you’re interested in applying (subclass 500). </p>
                    <p>You must fulfil several requirements before your application will be granted, such as being accepted into a school and having enough financial capacity to support yourself. A suitable level of health insurance for the period of your stay will also be required of you.</p>
                    <p><span className="font-bold">Internship Opportunities:</span>  Internships and job opportunities may be available to students at some Australian universities. If this is a choice that appeals to you, be sure to inquire about any prerequisites from your preferred educational institution. </p>                    
                </div>
                <Image src={aus5} alt="" />

            </div>
            <div className="flex items-center flex-col-reverse lg:flex-row">
                <Image className="lg:w-1/2" src={aus6}alt="" />
                <div className="flex flex-col gap-2">
                    <p><span className="font-bold">Worldwide Recognition:</span> Due to the remarkable international reputation of the Australian educational system, graduates from Australian universities are in high demand. To uphold the nation’s reputation for high-quality education, the government closely regulates this system.</p>
                    <p><span className="font-bold">Simple Communication:</span> The majority of overseas students find it simple to understand and be understood because English is the official language of Australia.</p>
                    <p><span className="font-bold">Incredible Employment Opportunities:</span> If you are having a great time while studying in Australia, you might be tempted to extend your stay. Additionally, Australia provides temporary graduate visas (subclass 485) that enable some foreign students to remain and work there after graduating. Australia welcomes international students and provides a wealth of enriching opportunities, including the chance to receive a top-notch education.</p>
                </div> 
            </div>
            </section>

            <section>
            <h1 className="text-3xl font-bold py-10 text-center">Australia College / University</h1>

            <div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>
  <tr>
    <td>UNSW SYDNEY</td>
    <td>UNIVERSITY OF SYDNEY</td>
    <td>UNIVERSITY OF WOLLONGONG</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF TECHNOLOGY SYDNEY</td>
    <td>UNIVERSITY OF NEW ENGLAND, AUSTRALIA</td>
    <td>MACLEAY COLLEGE</td>
  </tr>
  <tr>
    <td>CHARLES STURT UNIVERSITY STUDY CENTRES</td>
    <td>INTERNATIONAL COLLEGE OF MANAGEMENT, SYDNEY</td>
    <td>AUSTRALIAN FILM TELEVISION AND RADIO SCHOOL</td>
  </tr>
  <tr>
    <td>HILLSONG COLLEGE</td>
    <td>GREEN VALLEY ISLAMIC COLLEGE</td>
    <td>MOORE THEOLOGICAL COLLEGE</td>
  </tr>
  <tr>
    <td>NEW SOUTH WALES POLICE ACADEMY</td>
    <td>CAMPION COLLEGE</td>
    <td>NAISDA</td>
  </tr>
  <tr>
    <td>SYDNEY MISSIONARY AND BIBLE COLLEGE</td>
    <td>AUSTLII</td>
    <td>UNIVERSITY OF NEWCASTLE</td>
  </tr>
  <tr>
    <td>SOUTHERN CROSS UNIVERSITY</td>
    <td>MACQUARIE UNIVERSITY</td>
    <td>AVONDALE UNIVERSITY</td>
  </tr>
  <tr>
    <td>OURIMBAH CAMPUS</td>
    <td>CHARLES STURT UNIVERSITY FACULTY OF BUSINESS</td>
    <td>JMC ACADEMY</td>
  </tr>
  <tr>
    <td>EXCELSIA COLLEGE</td>
    <td>ROYAL AUSTRALIAN AND NEW ZEALAND COLLEGE OF OPHTHALMOLOGISTS</td>
    <td>AUSTRALIAN COLLEGE OF PHYSICAL EDUCATION</td>
  </tr>
  <tr>
    <td>MORLING COLLEGE</td>
    <td>UNIVERSITY OF SYDNEY CENTRE FOR CONTINUING EDUCATION</td>
    <td>AUSTRALIAN COLLEGE OF THEOLOGY</td>
  </tr>
  <tr>
    <td>BEDFORD COLLEGE NORWEST</td>
    <td>CATHOLIC INSTITUTE OF SYDNEY</td>
    <td>THE UNIVERSITY OF QUEENSLAND</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF SOUTHERN QUEENSLAND</td>
    <td>CENTRAL QUEENSLAND UNIVERSITY</td>
    <td>BOND UNIVERSITY</td>
  </tr>
  <tr>
    <td>SHAFSTON INTERNATIONAL COLLEGE</td>
    <td>AUSTRALIAN AND NEW ZEALAND COLLEGE OF ANAESTHETISTS</td>
    <td>AUSTRALIAN COLLEGE OF RURAL AND REMOTE MEDICINE</td>
  </tr>
  <tr>
    <td>GROVES CHRISTIAN COLLEGE</td>
    <td>TAFE QUEENSLAND SKILLSTECH</td>
    <td>BRISBANE SCHOOL OF THEOLOGY</td>
  </tr>
  <tr>
    <td>SOUTHBANK INSTITUTE OF TECHNOLOGY</td>
    <td>MARIST BROTHERS COLLEGE ROSALIE</td>
    <td>AUSTRALIAN COLLEGE OF MINISTRIES</td>
  </tr>
  <tr>
    <td>SOUTHERN QUEENSLAND INSTITUTE OF TAFE</td>
    <td>COOLAMON COLLEGE</td>
    <td>QUEENSLAND UNIVERSITY OF TECHNOLOGY</td>
  </tr>
  <tr>
    <td>JAMES COOK UNIVERSITY</td>
    <td>UNIVERSITY OF THE SUNSHINE COAST</td>
    <td>AUSTRALIAN CATHOLIC UNIVERSITY, BRISBANE CAMPUS</td>
  </tr>
  <tr>
    <td>GRIFFITH LAW SCHOOL</td>
    <td>QIMR BERGHOFER MEDICAL RESEARCH INSTITUTE</td>
    <td>AVIATION AUSTRALIA</td>
  </tr>
  <tr>
    <td>SAN SISTO COLLEGE</td>
    <td>GRIFFITH FILM SCHOOL</td>
    <td>ENDEAVOUR COLLEGE OF NATURAL HEALTH FORTITUDE VALLEY</td>
  </tr>
  <tr>
    <td>HOLY SPIRIT SEMINARY, BRISBANE</td>
    <td>NAZARENE THEOLOGICAL COLLEGE</td>
    <td>AUSTRALIAN INDIGENOUS COLLEGE</td>
  </tr>
  <tr>
    <td>CENTRAL QUEENSLAND UNIVERSITY (BRISBANE CAMPUS)</td>
    <td>CATC DESIGN SCHOOL</td>
    <td>VICTORIA UNIVERSITY, MELBOURNE</td>
  </tr>
  <tr>
    <td>MONASH UNIVERSITY</td>
    <td>RMIT UNIVERSITY</td>
    <td>SWINBURNE UNIVERSITY OF TECHNOLOGY</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF DIVINITY</td>
    <td>MONASH COLLEGE</td>
    <td>DEAKIN UNIVERSITY, WARRNAMBOOL</td>
  </tr>
  <tr>
    <td>RIDLEY COLLEGE, MELBOURNE</td>
    <td>MELBOURNE POLYTECHNIC</td>
    <td>CHARLES STURT UNIVERSITY STUDY CENTRES, MELBOURNE</td>
  </tr>
  <tr>
    <td>MARCUS OLDHAM COLLEGE</td>
    <td>MCCLELLAND COLLEGE</td>
    <td>ST MARY’S COPTIC ORTHODOX COLLEGE</td>
  </tr>
  <tr>
    <td>DEAKIN UNIVERSITY, MELBOURNE</td>
    <td>LCI MELBOURNE</td>
    <td>LONGERENONG COLLEGE</td>
  </tr>
  <tr>
    <td>DISCOVER ENGLISH</td>
    <td>BAYSWATER SECONDARY COLLEGE</td>
    <td>BEECHWORTH SECONDARY COLLEGE</td>
  </tr>
  <tr>
    <td>STIRLING THEOLOGICAL COLLEGE</td>
    <td>UNIVERSITY OF MELBOURNE</td>
    <td>LA TROBE UNIVERSITY</td>
  </tr>
  <tr>
    <td>FEDERATION UNIVERSITY AUSTRALIA</td>
    <td>CHISHOLM INSTITUTE</td>
    <td>KANGAN INSTITUTE</td>
  </tr>
  <tr>
    <td>MELBOURNE INSTITUTE OF TECHNOLOGY</td>
    <td>HAYS INTERNATIONAL COLLEGE</td>
    <td>AUSTRALIAN COLLEGE OF OPTOMETRY</td>
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
<img className="h-24 w-28 m-5" src="https://i.ibb.co/DKdcxQV/Monash-University-logo-en-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/j6YvhzN/Queensland-University-of-Technology-logo.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/FYSnNpd/The-University-of-Western-Australia-logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/vZQyXfP/The-University-of-Queensland.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/1bjS4Bh/The-University-of-Sydney.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/1ssHDH1/University-of-Adelaide-Logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/dpb4DGg/University-of-Melborn-e1645001162802.jpg" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/XDJMdX3/University-of-New-South-Wales-e1645000911769.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/fQzhXmC/Logo-of-the-University-of-Technology-Sydney-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/pn7ZQgY/Logotype-of-Macquarie-University-svg.png" alt="" />

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

export default Australia;