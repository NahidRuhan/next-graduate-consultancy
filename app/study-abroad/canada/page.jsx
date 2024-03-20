"use client"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Marquee from "react-fast-marquee";
import banner from "../../../public/assets/study-abroad/canada/banner.jpg"
import canada1 from "../../../public/assets/study-abroad/canada/1.png"
import canada2 from "../../../public/assets/study-abroad/canada/2.png"
import canada3 from "../../../public/assets/study-abroad/canada/3.jpg"
import { BsBank } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';



const Canada = () => {

    const router = useRouter();
    
    return (
        <div className='cen'>

        <div>
            <Image className="w-full" src={banner} alt="" />
        </div>

        

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <div>
                <h1 className='font-bold text-xl lg:text-3xl py-10 text-center lg:text-left'>Top Universities in Canada</h1>

                <Marquee pauseOnClick={true} speed={100}>

<img className="h-24 w-36 m-5" src="https://i.ibb.co/BrYDTqV/Cambrian-College-01.jpg" alt="Cambrian College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/qD9VRgm/Canadore-College-01.jpg" alt="Canadore College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Y39mhk6/Cape-Breton-University-01.jpg" alt="Cape Breton University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/wSvmG75/Capilano-University-01.jpg" alt="Capilano University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/vsHM0hj/Carleton-01.jpg" alt="Carleton University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/X2BrXjx/Centennial-College-01.jpg" alt="Centennial College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/3W5GDcN/COLLEGE-OF-NORTH-ATLANTIC-01.jpg" alt="College of North Atlantic" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/0MCZvp7/CONCORDIA-UNIVERSITY-OF-EDMONTON-01.jpg" alt="Concordia University of Edmonton" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/CwX0bgQ/Conestoga-College-01.jpg" alt="Conestoga College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Sw3D2d7/Confedaration-College-01.jpg" alt="Confederation College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/ZSk6BhW/DALHOUSIE-UNIVERSITY-01.jpg" alt="Dalhousie University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/R4QhjB6/Durham-01.jpg" alt="Durham College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/4T3F1Jg/Fairleigh-Dickinson-University-01.jpg" alt="Fairleigh Dickinson University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/w0Y2zLP/fanshawe-college-01.jpg" alt="Fanshawe College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/1RYBLb5/Fleming-College-01.jpg" alt="Fleming College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/zPMTh7k/Fraser-International-College-01.jpg" alt="Fraser International College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/sKN2Y1r/George-Brown-01.jpg" alt="George Brown College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/VLpWfcQ/Georgian.jpg" alt="Georgian College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/4RRf847/Guelph-01.jpg" alt="University of Guelph" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/7RHxVS0/Humber-01.jpg" alt="Humber College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Xk2bNFT/International-College-of-Manitoba-01.jpg" alt="International College of Manitoba" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/8scLGfg/Lakehead-01.jpg" alt="Lakehead University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/nPPBVGm/Lakeland-College-01.jpg" alt="Lakeland College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/xG3W4DZ/Lambton-College.webp" alt="Lambton College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/F6tY2js/Laurier-01.jpg" alt="Wilfrid Laurier University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/mXz9HKv/Loyalist-College-01.jpg" alt="Loyalist College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/FH5tyjQ/Mc-Gill-01.jpg" alt="McGill University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/h8NZVfF/Mc-Master-01.jpg" alt="McMaster University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/yVXm1Bn/MEMORIAL-UNIVERSITY-OF-NEWFOUNDLAND-01.jpg" alt="Memorial University of Newfoundland" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/tKLLFW1/Mount-Allison-University-01.jpg" alt="Mount Allison University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/kXtcbdc/Niagara-01.jpg" alt="Niagara College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/4SRVMMB/OCAD-University-01.jpg" alt="OCAD University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/BTRfc8V/Ontario-University-01-01.jpg" alt="Ontario Tech University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/r3sWDyD/Ottwa-University-01.jpg" alt="University of Ottawa" />
{/* <img className="h-24 w-36 m-5" src="https://i.ibb.co/Qrg0mkR/Providence-University-College-01.jpg" alt="Providence University College" /> */}
<img className="h-24 w-36 m-5" src="https://i.ibb.co/R3BcRYJ/Queens-University-01.jpg" alt="Queen's University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/MMKKD8T/Royal-Roads-University-01.jpg" alt="Royal Roads University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/GcmTDZd/Ryerson-University-01.jpg" alt="Ryerson University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/C8Rk5nB/Saskatchewan-Polytechnic-01.jpg" alt="Saskatchewan Polytechnic" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/vxF5cvk/Seneca-College-01.jpg" alt="Seneca College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/7NNNwN6/Sheridan-01.jpg" alt="Sheridan University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/3RCfkPr/Simon-Fraser-University-01.jpg" alt="Simon Fraser University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/r2MR6F6/St-Francis-Xavier-University-01.jpg" alt="St. Francis Xavier University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/C9FH2Kq/St-Thomas-University-01.jpg" alt="St. Thomas University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/k56djgF/The-University-of-British-Columbia-01.jpg" alt="The University of British Columbia" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/FnjpwFF/The-University-of-Winnipeg-01.jpg" alt="The University of Winnipeg" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/dfVHXVB/The-University-of-Queensland.png" alt="The University of Queensland" />
{/* <img className="h-24 w-36 m-5" src="https://i.ibb.co/wgm85fH/The-University-of-Sydney.png" alt="The University of Sydney" /> */}
<img className="h-24 w-36 m-5" src="https://i.ibb.co/6W4sK59/Thompson-Rivers-University-01.jpg" alt="Thompson Rivers University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/FqnbKBB/Trent-University-01-01.jpg" alt="Trent University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/QMKwmTx/Tronto-Metropaliton-University-01.jpg" alt="Tronto Metropaliton University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/gJHzGV7/Tronto-University-01.jpg" alt="Tronto University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/7rdK0hj/uni-of-souther-cal.png" alt="University of Southern California" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/2q9n1pw/Universite-de-Montreal-01.jpg" alt="Universite de Montreal" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/BGSnRJD/University-Canada-West-01.jpg" alt="University Canada West" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/2ycn9xX/University-College-of-the-North-01.jpg" alt="University College of the North" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Qp6nMXg/University-of-Alberta-01.jpg" alt="University of Alberta" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/9nvsKMS/University-of-Calgory-01.jpg" alt="University of Calgary" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/bJMvM3m/University-of-King-s-College-01.jpg" alt="University of King's College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/F5yN0Rj/University-of-Lethbride-01.jpg" alt="University of Lethbridge" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/F3QF1b8/University-Of-Manitoba-01.jpg" alt="University of Manitoba" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/LtWP7Y7/University-of-New-Brunswick-01.jpg" alt="University of New Brunswick" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/12vjxSk/University-of-Regina-01.jpg" alt="University of Regina" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/dtsjdVL/University-of-Saskatchewan-01.jpg" alt="University of Saskatchewan" />
{/* <img className="h-24 w-36 m-5" src="https://i.ibb.co/L9FZ7GY/University-of-leicester.png" alt="University of Leicester" /> */}
<img className="h-24 w-36 m-5" src="https://i.ibb.co/m0YQ8Tr/University-of-Melborn.jpg" alt="University of Melbourne" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/s1b8QW2/University-of-New-South-Wales.png" alt="University of New South Wales" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/T1BZqJz/Vancouver-Island-University-01.jpg" alt="Vancouver Island University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/GWZ7vM4/Waterloo-university-01.jpg" alt="Waterloo University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/jwr8N2N/Western-University-01.jpg" alt="Western University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Thwhhrp/Windsor-01.jpg" alt="Windsor University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/VwdykTd/York-01.jpg" alt="York University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/jVwGczj/yorkville-01.jpg" alt="Yorkville University" />
{/* <img className="h-24 w-36 m-5" src="https://i.ibb.co/DVkLLKf/coventry-university.png" alt="Coventry University" /> */}
<img className="h-24 w-36 m-5" src="https://i.ibb.co/FVvhkCW/Acadia-University-01.jpg" alt="Acadia University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/tZswP0M/Algoma-01.jpg" alt="Algoma University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/WpfppP7/Algonquin-01.jpg" alt="Algonquin College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/Gs7KrLs/Bishop-s-University-01.jpg" alt="Bishop's University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/dkr7JXh/Booth-University-Colleg-01.jpg" alt="Booth University College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/2gRGMYL/Bou-Valley-College-01.jpg" alt="Bow Valley College" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/BP8dPd9/Brandon-University-01.jpg" alt="Brandon University" />
<img className="h-24 w-36 m-5" src="https://i.ibb.co/LpmxFqj/Brock-Uni-01.jpg" alt="Brock University" />


                </Marquee>

                
            </div>

            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">About Canada</h1>

            <div className="flex items-center flex-col lg:flex-row">
                <div className="flex flex-col gap-5">
                <p>Canada is one of the most preferred educational destinations by students all around the world. But before deciding to choose Canada, you need to be aware about different aspects of Canada.</p>
                <p>Canada is one of the most preferred educational destinations by students all around the world. But before deciding to choose Canada, you need to be aware about different aspects of Canada.</p>
                <h2 className="font-extrabold">Geography</h2>
                <p>In the northern part of north America resides Canada, the second largest country of the world according to land area. </p>
                <p>Canada shares the longest land border of the world with U.S. nearly 9000 km. </p>
                <p>Also, Canada has absolutely colossal coastline as it connected to three oceans: Pacific, Atlantic and Artic. </p>
                <p>Apart from these geographical features Canada also has a diversified topography of land consisting of mountains, lakes, streams, water falls etc.</p>
            </div>
            <Image src={canada1} alt="" />
            </div>

            <div className="flex items-center flex-col-reverse lg:flex-row">
                <Image src={canada2} alt="" />
                <div className="flex flex-col gap-5">
                    <h2 className="font-bold text-2xl">Cultural diversity</h2>
                    <p>Taking about culture and languages of Canada. English and French are the two official languages of Canada followed by Chinese and Punjabi being the 3rd most common languages. Culture of Canada have been diverse and welcoming since its independence as it represents nearly 250 ethnic origins. Canadian citizens practice multiple religion as Canada has not affiliated itself with any religion.</p>
                    <h2 className="font-bold text-2xl">Economy</h2>
                    <p>Economy of Canada is considered to be one of the most developed and progressive. Canada holds immense treasure of natural resources in fact it produces more energy compared to U.S. Canada has enormous yet its population is only 38 million. Due to which, Canada is inviting immigrants from different countries by offering various perks to them in the form of permanent residency. </p>
                </div>
            </div>

            <div>
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">Why Study In Canada?</h1>

<div className="flex items-center flex-col lg:flex-row">
    <div className="flex flex-col gap-5">
    <p>Education plays a very important role in lives of every individual. So, you need to be careful while choosing a country for educational purposes. There are different aspects to be considered such as </p>
    <h2 className="font-bold">Educational structure</h2>
    <p>Canada follows a flexible and progressive structure of education which means majority of courses in Canada have a balance blend of theoretical knowledge and practical skills. </p>
    <p>Also, Canada is one of the countries which values industrial exposure as much as educational qualifications. </p>
    <p>Also, Canada has absolutely colossal coastline as it connected to three oceans: Pacific, Atlantic and Artic. </p>
    <p>Apart from this, Canada offers wide range of specialized and general courses which can be opted by international students according to their future goals.</p>
</div>
<Image src={canada3} alt="" />
</div>

            </div>

            <div className='py-10'>

            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quality of education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Canada has been known for its high quality of education and top-class universities (10 of the top 250 universities worldwide reside in Canada). Not only this, universities in Canada have highly qualified and experienced professional to nurture students to the path of success. Also, top universities have erudite students which gives every individual a chance to build a good network of friends who will guide them in near future.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Affordable cost of education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Canada has some of the prominent institution in the world but to your surprise, fees of Canadian universities are significantly low compared to countries like U.S, Australia which have similar structure of education. Although fees of universities and colleges depend on too many factors still on an average 13,000 CAD to 15,000 CAD per annum is a viable range for majority of courses and colleges/universities.          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Future prospects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Canada is among the fastest growing economy in the world with increasing demand of highly skilled professional from almost all the sectors varying from accounts & finance to technology & trades. Also, Canada provides easy access to PGWP (Post graduation work permit) to international students according to their course length respectively by which students can work in MNC’s without worrying about their permit status.          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Part time job opportunities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Most prominent reason of the huge surge in number of student visa application in Canada is due to the progressing market of Canada. Talking about part time job environment of Canada, students are allowed to work for 20 hours a week being a full-time student. Also, vacation gives students grant to work for 40 hours a week.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>

            <div>
                <h1 className='font-bold text-3xl py-10 text-center lg:text-left'>Type of Degree</h1>
                <p className='pb-10'>The model of Canadian education is structured to provide students with more choices in terms of courses as well as type degree according to their interest respectively.</p>


                {/* <div>

                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Undergraduate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><div className='flex flex-col gap-5'><p>An undergraduate degree serves as a stepping stone for the future of a student as it gives their future a specific area that they are going to discover. Usually, undergraduate courses have longer length compared to other degrees. Students who have passed 10+2 are eligible to apply for undergraduate degree in their respective horizon.</p>

<p>Diploma which is generally a 2-year course is considered to be an undergraduate course. Similarly, an advanced diploma is also an undergraduate program of 3-years but it can also be opted by students who have completed diploma in a relevant course. Bachelors is the longest program with a total length of 4-years and again students who have completed diploma in a relevant course can register themselves for a bachelors degree.</p>

<p>Cost range for undergraduate program is from 12,000 CAD to 30,000 CAD depending on university and course.</p></div></Typography>
        </AccordionDetails>
      </Accordion>


                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Graduate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='flex flex-col gap-5'>
            <h2 className='font-bold'>Masters:</h2>
            <p>Individuals who want to get in depth knowledge about a specific subject have an option to choose a master’s program in the same discipline or in an inter-disciplinary subject. There are two basic division in master’s programs, Masters based on thesis or research curriculum and Masters based on course curriculum. Length of masters is generally one to two years.</p>
            <p>Cost range for master’s program is from 17,000 CAD to 35,000 CAD depending on universities and course.</p>
            <h2 className='font-bold'>Post graduate certificates:</h2>
            <p>These are programs of shorter or same duration with reference to masters but are more skill oriented. They are designed for job specific nurturing of students so that they can get a job after completing the course. These programs follow a combined approach with a blend of theoretical and practical knowledge.</p>
            <p>Cost range for these courses is from 13,000 CAD to 22,000 CAD depending on the course.</p>
            <h2 className='font-bold'>Doctorate</h2>
            <p>A doctorate degree is considered to be the peak of academic achievements of an individual. Students who are interested in research work of a specific subject generally opt for doctorate courses. Also, working professional wishing to excel in their career look for these courses to polish their resume.</p>
            <p>Cost range of these courses is from 7,000 CAD to 18,000 CAD.</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

                </div> */}
            </div>

            <div>

                <h1 className='font-bold text-3xl py-10 text-center lg:text-left'>SDS & Non SDS</h1>
                <p>Student direct stream commonly known as SDS is considered the faster student study permit processing program. IRCC generally process SDS students visa file in 20 calendar days is the student fulfil all the pre requisite. Students who are unable to fill any of these requirements are not eligible for SDS and need to submit their application is non-SDS.</p>
                <h2 className='font-bold py-5'>Pre requisite for SDS</h2>
                <div className='flex flex-col gap-4'>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Student must have valid test result of IELTS with score of 6 or higher in each module: listening, reading, writing & speaking, completed within 2 years of the date of SDS application.</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Student need to submit a proof of guaranteed investment certificate (GIC) of 10,000 CAD in a bank insured by Canadian Deposit Insurance Corporation (CDIC).</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Full one year tuition fee should be paid to the university or college.</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Student should submit most recent and post-secondary transcripts.</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Student need to submit the proof of Upfront medical examination. </p>
                </div>


            </div>

            <div>
                <h1 className='font-bold text-3xl py-10 text-center lg:text-left'>Admission Procedure</h1>
                <p className='pb-10'>First milestone in the path of becoming an international student is getting admission in a DLI approved Canadian university/college. This process is majorly divided into four steps:</p>

                <div>

                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<Typography variant="h6" fontWeight="bold">
            Choosing a university/college & cours
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is the most crucial decision and needs to be made with absolute precision. You need to understand and ask yourself few questions: what area you would like to study? In which job role you would like to work after studies? After deciding these to answer you would be needed to search for some colleges which have courses related to your area of interest. You can visit DEC’s website or Bookuradmission page in order to get knowledge about colleges/universities and courses in different provinces. Be careful and do in depth research about the syllabus of your preferred program or else meet our counsellors to avail help in selection of a perfect fit for you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<Typography variant="h6" fontWeight="bold">
            Prepare all the Documents
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1" fontWeight="normal">
    Students need to make a checklist of few documents which needed to be collected from their current or last attended institution. Apart from this student must have a proof of result of an international English language exam such as IELTS, PTE, Duolingo etc.
  </Typography>
  <Typography variant="h6" className="font-bold">
    List of documents
  </Typography>
  <ul>
    <li>
      <i className="fa-solid fa-chevron-right text-red-500"></i>
      <Typography variant="body2">All the recent academic transcript</Typography>
    </li>
    <li>
      <i className="fa-solid fa-chevron-right text-red-500"></i>
      <Typography variant="body2">3 Letter of recommendation from faculties (2 Teachers, 1 Head of department)</Typography>
    </li>
    <li>
      <i className="fa-solid fa-chevron-right text-red-500"></i>
      <Typography variant="body2">Proof of English proficiency test</Typography>
    </li>
    <li>
      <i className="fa-solid fa-chevron-right text-red-500"></i>
      <Typography variant="body2">Statement of purpose</Typography>
    </li>
  </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<Typography variant="h6" fontWeight="bold">
            Submit Your Application
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Canada has for admission three intakes winter (January), spring (May) & fall (September). So, students need to apply nearly 3-6 months prior to the intake in order to get adequate time for rest of the process of applying for a visa. Students can submit their application through the website of respective university/college or visit us to help you submit and avail an offer letter from reputed institutions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
<Typography variant="h6" fontWeight="bold">
            Pay the fees and GIC
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once a student gets his/her offer letter from the college in order to accept the offer and confirm the seat he/she has to pay the deposit fee or 1st semester fee. After the payment of college/university fee next milestone is to deposit the guaranteed investment to avail guaranteed investment certificate (GIC) for visa application.
          </Typography>
        </AccordionDetails>
      </Accordion>

                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold py-10 text-center lg:text-left'>Why Graduate Consultancy?</h1>
                <div className='flex flex-col gap-5'>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Register with Graduate Consultancy and talk with an experienced Education Counsellor.</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Choose a course according to your areas of interest</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Apply for the Canadian university with our assistance</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Get counselling on visa from our experts</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Pay financial deposits</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Receive LOA (Letter of Acceptance) from the university</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Apply for your visa with our help</p>
                    <p><i className="fa-solid fa-chevron-right text-red-500"></i> Attend our pre-departure session and get ready to depart for Canada</p>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold py-20 text-center'>Provinces</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="province-card card-6">

<div className="flex justify-center flex-col">

  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
    <BsBank className="text-white text-4xl" />
  </div>

  <div>
    <p className="font-extrabold text-2xl py-5">BRITISH COLUMBIA</p>
    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/british-columbia')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
  </div>

</div>           

</div>

                <div className="province-card card-2">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">QUEBEC</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/quebec')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>                    

                <div className="province-card card-1">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">ONTARIO</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/ontario')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>


                <div className="province-card card-7">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">NEWFOUNDLAND AND LABRADOR</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/newfoundland')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>

                <div className="province-card card-5">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">ALBERTA</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/alberta')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>              


                <div className="province-card card-3">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">MANITOBA</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/manitoba')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>

                <div className="province-card card-9">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">NEW BRUNSWICK</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/new-brunswick')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>              

                <div className="province-card card-8">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">NOVA SCOTIA</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/nova-scotia')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>

                <div className="province-card card-4">

                <div className="flex justify-center flex-col">

                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-logoRed">
                    <BsBank className="text-white text-4xl" />
                  </div>

                  <div>
                    <p className="font-extrabold text-2xl py-5">SASKATCHEWAN</p>
                    <div className='flex justify-center gap-3'><span className='text-xl'>Click</span><button onClick={()=>{router.push('/study-abroad/canada/saskatchewan')}} className="bg-red-500 p-1 rounded-full text-xl"><FaArrowRight /></button></div>
                  </div>

              </div>           

              </div>

                </div>

            </div>

            <div>
                <h1 className='font-bold text-3xl py-10 text-center lg:text-left'>FAQ</h1>

                <div>

                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>What are minimum wages in Canada, do they differ across provinces?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          YES, minimum wages in different provinces varies on some factors. Provinces like Ontario, British Columbia, Yukon and Alberta offer a minimum wage of 15 CAD approx. While, Manitoba, New Brunswick, Nova Scotia etc. wage ranges between 11.5 to 13 CAD.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>Which is the easiest province to get PR?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Permanent residence of Canada could be attained through different entries still PR in some provinces is easier than other. Province like Saskatchewan, Alberta provides PR early compared to highly populated provinces like Ontario.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>How do people survive in temperatures below freezing point?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Canada is one of the countries which have snowy winters. But with all the accessories even temperature like -40 are manageable and Canada is well equipped in terms of heating indoor facilities.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>How long will Canada keep on providing permanent residence to immigrants?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the most recent update Canada has provided PR road map for the year 2022,2023& 2024 and on an average Canada is aiming to provide 1.32 million immigrants PR through different entries.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>How many hours can a student work being on a study permit?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Every student is given an allowance to work 20 hours while being on a study permit. However, students can work for 40 hours during their vacations.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>What is the cost of studying in Canada?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Fees of colleges & universities varies according to the level of program. For example, the fees for undergraduate programs ranges between 12,000 CAD to 30,000 CAD.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>Are students allowed to travel to another province while term breaks?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          YES, students are allowed to visit places in a different province during their vacations or long breaks.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>What is the monthly expense of living in major cities like Toronto, Vancouver etc.?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          On an average an international student needs to spend 800 CAD – 1200 CAD in a month including rent, bills, & groceries.          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" fontWeight="bold"><p>What is DLI?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Designated learning institutions (DLI) are educational bodies approved by the Canadian government to host international students from across the world. You can get a study permit to Canada only if you are accepted by a DLI college/university.          </Typography>
        </AccordionDetails>
      </Accordion>

                </div>

            </div>

        </div>
            
        </div>
    );
};

export default Canada;