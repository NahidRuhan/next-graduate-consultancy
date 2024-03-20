import Marquee from "react-fast-marquee";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import usa1 from "@/public/assets/study-abroad/usa/1.png"
import usa2 from "@/public/assets/study-abroad/usa/2.jpg"
import usa3 from "@/public/assets/study-abroad/usa/3.jpg"
import usa4 from "@/public/assets/study-abroad/usa/4.jpg"
import usa5 from "@/public/assets/study-abroad/usa/5.jpg"
import banner from "@/public/assets/study-abroad/usa/banner.jpg"
import Image from "next/image";


const Usa = () => {



    const accordionContent = [
        {
          question: "When do you declare a major?",
          answer: "You do not declare a major until the end of your second year of school."
        },
        {
          question: "Do students have to study a fixed set of subjects or can they individually form their major?",
          answer: "It depends: Some degree programs are highly structured. Bachelors’ degrees are very flexible and sometimes allow you to create your own program."
        },
        {
          question: "How can an international student find out what academic subjects from their country are acceptable for a U.S. university?",
          answer: "Each U.S. university will want to review an international student’s subjects and may ask the student to contact a credential evaluation agency."
        },
        {
          question: "How can I apply for vocational training in the United States?",
          answer: "U.S. institutions cannot issue I-20 forms for non-degree study, including vocational training. Community colleges offer technical/vocational study for an associate’s degree."
        },
        {
          question: "What’s the best general advice for an incoming student?",
          answer: "Attend the closest Education USA advising center’s predeparture orientation. Then, when you arrive on campus, attend all orientation meetings scheduled at your college or university."
        },
        {
          question: "What is distance education?",
          answer: "Distance education occurs when a student and an instructor are in different places. Learning occurs by mail, telephone, internet, or by other means."
        },
        {
          question: "What are English language proficiency requirements?",
          answer: "U.S. universities require an English language proficiency test before admission to ensure you can read, write, and speak fluently."
        },
        {
          question: "What is a GPA?",
          answer: "Grade Point Average (GPA) is a numeric indicator for a student’s academic performance, calculated on a scale of 4.0."
        },
        {
          question: "What is the credit system in U.S. universities?",
          answer: "A credit is a value assigned to each course which reflects the number of hours the class will meet with the professor each week."
        },
        {
          question: "What is the difference between online studies and distance studies?",
          answer: "Essentially there is no difference."
        },
        {
            question: "Is it possible to take a professional degree program without first earning a bachelor's degree?",
            answer: "Yes, but they are highly selective and require a heavy courseload across a total of six years of study."
          },
          {
            question: "What are the different types of graduate degrees?",
            answer: "Masters: two-year degree providing additional specialization. Doctorate: five to eight-year program certifying the student as a trained research scholar and/or professor."
          },
          {
            question: "What is the academic calendar for universities in the United States?",
            answer: "The academic year usually runs from August through May with breaks for holidays. Most universities use either the semester system (two terms), the quarter system (students attend three out of four total terms), or the trimester system (three terms)."
          },
          {
            question: "Can I transfer to a U.S. university from a university outside of the United States?",
            answer: "Yes, although you may lose some credits and require extra time to complete your degree."
          },
          {
            question: "What’s the difference between a college and a university?",
            answer: "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably."
          },
          {
            question: "Are there age limitations to attend U.S. universities?",
            answer: "In general, you must have completed high school and you must be at least 17 years of age."
          },
          {
            question: "What is the difference between 'Undergraduate' and 'Graduate' degrees?",
            answer: "Undergraduate programs follow high school and lead to an associate (two-year) degree or a bachelor (four-year) degree. Graduate programs follow a bachelor’s degree and lead to a master’s or doctoral degree."
          },
          {
            question: "Is distance learning available at the graduate level?",
            answer: "Yes. To find accredited online distance learning programs, please search the Distance Education Accrediting Commission website."
          },
          {
            question: "What is a community college?",
            answer: "Community colleges are typically state-supported and provide the first two years of a four-year undergraduate degree."
          },
          {
            question: "What is the transfer application process?",
            answer: "You must fulfill the requirements of a freshman applicant, as well as any supplemental information required by the transfer institution."
          },
          {
            question: "Why should I attend community college?",
            answer: "Community colleges offer lower costs, easier admission policies, close ties to state schools, and many of the required courses connected to a degree."
          },
          {
            question: "How do you transfer from a community college to a four-year university?",
            answer: "The transfer process varies for each school. It is best to target the four-year institution early and determine what is needed to transfer."
          },
          {
            question: "How can I find out which universities are rated best for a specific academic major?",
            answer: "Refer to college and university guides to find which institutions are known for excellence in different fields of study."
          },
          {
            question: "What is the difference between state and private universities?",
            answer: "State universities are funded by the state and are generally larger and less expensive than private universities."
          },
          {
            question: "How are grades determined in U.S. universities?",
            answer: "Grades are typically determined by quizzes, midterms, final exams, papers, projects, class attendance, and class participation."
          },
          {
            question: "Are there opportunities for university exchange programs?",
            answer: "Contact the office responsible for international programs at your institution to ask if your school has exchange agreements with U.S. universities."
          },
          {
            question: "What is the U.S. grading system?",
            answer: "Letter grades indicate a student’s academic performance. Each letter grade has a numeric value which is used to calculate a GPA, on a scale of 4.0."
          },
          {
            question: "How can I find out if an institution is accredited?",
            answer: "Search the U.S. Department of Education’s Office of Post-secondary Education website to see if an institution is accredited."
          },
          {
            question: "How can I find out if a specialized program of study is accredited?",
            answer: "For specialized program accreditation, see “Accredited Institutions of Postsecondary Education,” available from American Council on Education."
          },
          {
            question: "Can I transfer to a U.S. university from a university outside of the United States?",
            answer: "Yes, although you may lose some credits and require extra time to complete your degree."
          },
          {
            question: "What is the difference between state and private universities?",
            answer: "State universities are funded by the state and are generally larger and less expensive than private universities."
          },
          {
            question: "How are grades determined in U.S. universities?",
            answer: "Grades are typically determined by quizzes, midterms, final exams, papers, projects, class attendance, and class participation."
          },
          {
            question: "Are there opportunities for university exchange programs?",
            answer: "Contact the office responsible for international programs at your institution to ask if your school has exchange agreements with U.S. universities."
          },
          {
            question: "What is the U.S. grading system?",
            answer: "Letter grades indicate a student’s academic performance. Each letter grade has a numeric value which is used to calculate a GPA, on a scale of 4.0."
          },

      ];

      


    return (

        <>

         <div>
         <Image className="w-full" src={banner} alt="" />
        </div>
       
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  


        <div>

            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">About United States of America</h1>
            <div className="flex items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-3">
                <p>The United States is a land of opportunities, with a diverse ethnic population, the highest number of top-ranked universities, and picturesque landscapes. </p>
                <p>Choosing to study in the United States provides you with an excellent opportunity to develop academically, culturally, and socially.</p>
                <p>With over 1,000,000 international students choosing to broaden their education and life experience in the United States. The United States has the world’s largest international student population.</p>
                <p>International students make up nearly 5% of all students enrolled in higher education in the United States, and the number is growing.</p>
                <p>International education in the United States has come a long way since the mid-1950s when international student enrollment was only 35,000.</p>
            </div>
            <Image src={usa1} alt="" />                            
            </div>
  

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Why to choose USA?</h1>
            <p className="py-3">The majority of students all over the world consider the United States to be their top priority. The reasons for this are obvious, such as top-tier universities, a growing economy, world-class infrastructure, and so on.</p>
            <p>Some of the top reasons are as under:</p>
            <div className="flex items-center gap-5 flex-col lg:flex-row">
                <Image src={usa2} alt="" />
                <div className="flex flex-col gap-5">
                    <p><span className="font-bold">Quality of Education:</span> Numerous publications have listed American educational institutions including Harvard, Stanford, MIT, and others among the top 100 universities. In addition, universities in the United States of America provide students with a variety of specialized and general scholarships based on their academic performance or extracurricular activities to motivate them to excel in all areas.</p>
                    <p><span className="font-bold">Wide Range of Courses:</span> Universities in the United States have a distinct approach to students. They work hard to provide students with all of the tools they will need in their future jobs/business roles. As a result, universities strive to make their curricula flexible and well-informed about the most recent research in the field. Universities provide specialized as well as general courses in all core fields. Aside from that, students gain industry experience through internships and co-op periods.</p>
                </div>

            </div>
            <div className="flex items-center gap-3  flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-3">
                    <p><span className="font-bold">Career Opportunities:</span> An international degree opens up a plethora of career opportunities and a degree from a reputable university expands the scope even further. Because of the diverse insight into different fields of study offered by universities in the United States, it broadens the scope of the career path that the student chooses, and it is well known that international companies look for candidates who offer a different take or perspective on their products.</p>
                    <p><span className="font-bold">Opportunities for research and training:</span> International graduate students have access to research and training opportunities at American universities. By serving as a teaching assistant for a professor, a student can help them out while simultaneously paying for their education and expanding their knowledge base and skill set. Students get the option to collaborate with experts in their chosen subject of study while assisting academics with research for various projects.</p>                    
                </div>
                <Image src={usa3} alt="" />

            </div>
            <div className="flex items-center flex-col lg:flex-row">
                <Image className="lg:w-1/2" src={usa4} alt="" />
                <div className="flex flex-col gap-2">
                    <p><span className="font-bold">Use of Technology:</span>The United States takes pride in its technological development and has ensured that all facets of the educational sector are well-equipped with the most recent technologies. Quick access to information and other technologies greatly simplifies life for the student. Technology is claimed to play a crucial part in research and development, and American universities have taken steps to ensure that they do not lag in the growth of their campuses and their students by incorporating innovative teaching techniques and abilities into the curriculum. Studying in the USA must be a sensible decision if you wish to explore the technological sector!  </p>
                    <p><span className="font-bold">Student Life and Future Prospects:</span>The United States has some of the world’s most vibrant and developed cities. As a result, students in the United States can enjoy their time as students. University campuses have accommodation facilities, and nearby areas of the college have adequate houses that students who want to stay outside of university can rent. In terms of wealth and educated minds, the United States is regarded as the world’s richest economy. </p>
                    <p>As a result, students working in the United States or any other country have a higher income and social standing.</p>
                </div>
                
            </div>

            <p><span className="font-bold">Support and assistance for international students:</span> For international students, adjusting to the new student life at an international university might be difficult. However, the majority of US colleges offer excellent advice and assistance to all students, whether it be about housing, visa status, employment options, career opportunities, etc.</p>
        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">Admission Procedure</h1>
            <p className="pb-5">Before going any further with the procedure of applying students need to be aware of the major two intakes of USA (Fall & Spring). To apply for any of these intakes, you need to start following all the steps 1 year before the intake.</p>
            <div className="flex items-center flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-5">
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Shortlist a few colleges/universities</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Look for courses that fit your requirements</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Prepare and give the entrance exams such as GMAT, IELTS, TOEFL, GRE, etc.</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Contact your current college/university/school for a letter of recommendation (LOR)</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Make a personalized Statement of Purpose (SOP)</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Apply to the shortlisted colleges/universities.</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> Attend an online video interview which would be conducted by the university you have applied to. (If applicable)</p>
                    <p className='flex items-center gap-2'><span className="text-red-500"><FaCheck /></span> You will receive an offer letter from the respective college/university. After receiving the offer letter, you can apply for a student visa.</p>
                </div>
                <Image className="w-1/2" src={usa5} alt="" />
            </div>
        </div>

        <div>
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">Visa Requirements for the US</h1>
            <p>The US Government offers three different student visa types:</p>
            <div className="py-10">

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Sl No.</th>
        <th>Types of student visa</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>F-1 Student Visa</td>
        <td>to study at an accredited US college or university or to study English at an English language institute</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>M Student Visa</td>
        <td>for non-academic or vocational study or training in the US</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>J Exchange Visa</td>
        <td>for participation in an exchange program, including high school and university study</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
        </div>

        <div>
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">USA College / University</h1>

            <div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>

    <tr>
    <td>PRINCETON UNIVERSITY</td>
    <td>NEW JERSEY CITY UNIVERSITY</td>
    <td>THE COLLEGE OF NEW JERSEY</td>
  </tr>
  <tr>
    <td>SETON HALL UNIVERSITY</td>
    <td>ROWAN UNIVERSITY</td>
    <td>MONMOUTH UNIVERSITY</td>
  </tr>
  <tr>
    <td>BROOKDALE COMMUNITY COLLEGE</td>
    <td>STOCKTON UNIVERSITY</td>
    <td>THOMAS JEFFERSON UNIVERSITY</td>
  </tr>
  <tr>
    <td>BERGEN COMMUNITY COLLEGE</td>
    <td>PASSAIC COUNTY COMMUNITY COLLEGE</td>
    <td>RAMAPO COLLEGE</td>
  </tr>
  <tr>
    <td>LINCOLN TECH</td>
    <td>SAINT PETER’S UNIVERSITY</td>
    <td>RARITAN VALLEY COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>FELICIAN UNIVERSITY</td>
    <td>UNION COUNTY COLLEGE</td>
    <td>CALDWELL UNIVERSITY</td>
  </tr>
  <tr>
    <td>GEORGIAN COURT UNIVERSITY</td>
    <td>SAINT ELIZABETH UNIVERSITY</td>
    <td>CENTENARY UNIVERSITY</td>
  </tr>
  <tr>
    <td>COUNTY COLLEGE OF MORRIS</td>
    <td>NEW JERSEY INSTITUTE OF TECHNOLOGY</td>
    <td>RUTGERS UNIVERSITY</td>
  </tr>
  <tr>
    <td>STEVENS INSTITUTE OF TECHNOLOGY</td>
    <td>MONTCLAIR STATE UNIVERSITY</td>
    <td>KEAN UNIVERSITY</td>
  </tr>
  <tr>
    <td>FAIRLEIGH DICKINSON UNIVERSITY</td>
    <td>ESSEX COUNTY COLLEGE</td>
    <td>WILLIAM PATERSON UNIVERSITY</td>
  </tr>
  <tr>
    <td>RIDER UNIVERSITY</td>
    <td>MIDDLESEX COUNTY COLLEGE</td>
    <td>ROWAN COLLEGE OF SOUTH JERSEY</td>
  </tr>
  <tr>
    <td>THOMAS EDISON STATE UNIVERSITY</td>
    <td>DREW UNIVERSITY</td>
    <td>HUDSON COUNTY COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>OCEAN COUNTY COLLEGE</td>
    <td>ATLANTIC CAPE COMMUNITY COLLEGE</td>
    <td>MERCER COUNTY COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>BLOOMFIELD COLLEGE</td>
    <td>RUTGERS UNIVERSITY, NEWARK</td>
    <td>JERSEY COLLEGE</td>
  </tr>
  <tr>
    <td>SUSSEX COUNTY COMMUNITY COLLEGE</td>
    <td>SALEM COMMUNITY COLLEGE</td>
    <td>VIRGINIA TECH</td>
  </tr>
  <tr>
    <td>VIRGINIA STATE UNIVERSITY</td>
    <td>VIRGINIA UNION UNIVERSITY</td>
    <td>BRIDGEWATER COLLEGE</td>
  </tr>
  <tr>
    <td>LIBERTY UNIVERSITY</td>
    <td>VIRGINIA MILITARY INSTITUTE</td>
    <td>HAMPTON UNIVERSITY</td>
  </tr>
  <tr>
    <td>COLLEGE OF WILLIAM AND MARY</td>
    <td>VCU MEDICAL CENTER</td>
    <td>NORTHERN VIRGINIA COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>RADFORD UNIVERSITY</td>
    <td>REGENT UNIVERSITY</td>
    <td>NORFOLK STATE UNIVERSITY</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF MARY WASHINGTON</td>
    <td>THOMAS NELSON COMMUNITY COLLEGE</td>
    <td>ROANOKE COLLEGE</td>
  </tr>
  <tr>
    <td>RANDOLPH-MACON COLLEGE</td>
    <td>J. SARGEANT REYNOLDS COMMUNITY COLLEGE</td>
    <td>UNIVERSITY OF LYNCHBURG</td>
  </tr>
  <tr>
    <td>MARY BALDWIN UNIVERSITY</td>
    <td>PIEDMONT VIRGINIA COMMUNITY COLLEGE</td>
    <td>ECPI UNIVERSITY</td>
  </tr>
  <tr>
    <td>SWEET BRIAR COLLEGE</td>
    <td>PATRICK HENRY COLLEGE</td>
    <td>UNIVERSITY OF VIRGINIA</td>
  </tr>
  <tr>
    <td>VIRGINIA COMMONWEALTH UNIVERSITY</td>
    <td>JAMES MADISON UNIVERSITY</td>
    <td>VIRGINIA WESTERN COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>OLD DOMINION UNIVERSITY</td>
    <td>VIRGINIA WESLEYAN UNIVERSITY</td>
    <td>GEORGE MASON UNIVERSITY</td>
  </tr>
  <tr>
    <td>UNIVERSITY OF RICHMOND</td>
    <td>EASTERN VIRGINIA MEDICAL SCHOOL</td>
    <td>DEFENSE ACQUISITION UNIVERSITY</td>
  </tr>
  <tr>
    <td>WASHINGTON AND LEE UNIVERSITY</td>
    <td>LONGWOOD UNIVERSITY</td>
    <td>CHRISTOPHER NEWPORT UNIVERSITY</td>
  </tr>
  <tr>
    <td>MARYMOUNT UNIVERSITY</td>
    <td>SHENANDOAH UNIVERSITY</td>
    <td>JOHN TYLER COMMUNITY COLLEGE</td>
  </tr>
  <tr>
    <td>HAMPDEN-SYDNEY COLLEGE</td>
    <td>HOLLINS UNIVERSITY</td>
    <td>EMORY AND HENRY COLLEGE</td>
  </tr>
  <tr>
    <td>AVERETT UNIVERSITY</td>
    <td>CENTRAL VIRGINIA COMMUNITY COLLEGE</td>
    <td>FERRUM COLLEGE</td>
  </tr>
  <tr>
    <td>STRATFORD UNIVERSITY</td>
    <td>BLUEFIELD UNIVERSITY</td>
    <td>NEW YORK UNIVERSITY</td>
  </tr>
  <tr>
    <td>HUNTER COLLEGE</td>
    <td>JUILLIARD SCHOOL</td>
    <td>ST. JOHN’S UNIVERSITY</td>
  </tr>
  <tr>
    <td>BARUCH COLLEGE</td>
    <td>PARSONS SCHOOL OF DESIGN</td>
    <td>BOROUGH OF MANHATTAN COMMUNITY COLLEGE</td>
  </tr>

    </tbody>
  </table>
</div>


            </div>

            <p className="py-10 font-bold">*Along with many other universities of your choice</p>

        </div>

        <div>

            <h1 className="font-bold text-3xl pb-10 text-center lg:text-left">Top Universities</h1>

            <Marquee pauseOnClick={true} speed={100}>
            <img className="h-32 w-44 m-10" src="https://i.ibb.co/zhpWjfx/3.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/Q846hKj/5.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/4T85MST/9.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/brJY36Q/10.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/YfL158c/11.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/2SCKyn2/12.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/FnvbM0L/13.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/WfCHc81/16.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/2Zs255f/150px-MIT-logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/YZLFLgt/200px-Carleton-College-logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/gJPWQJT/200px-Williams-College-wordmark-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/PjXYxYQ/Columbia-University-logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/n1tb8jZ/download-1.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/3szgVLL/Formal-Logo-of-Swarthmore-College-Swarthmore-PA-USA-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/WyfqR5C/Harvard-University-logo-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/2S6r0yN/Seal-of-the-California-Institute-of-Technology-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/rMvJVWs/standard.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/wJQsw3p/The-university-of-Chicago-logo.jpg" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/0hLJqbL/University-of-Pennsylvania-wordmark-svg.png" alt="" />
<img className="h-24 w-28 m-5" src="https://i.ibb.co/82JHZ30/1-1.png" alt="" />

    </Marquee>

        </div>

        <div>
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

        </div>
            
        </div>
        </>
    );
};

export default Usa;