import logo from "@/public/assets/Logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import Image from "next/image";


const Footer = () => {
    return (
        <div className="pt-10">
            <footer className="footer p-10 bg-logoRed text-white">
  <nav className="flex flex-col text-center items-center">
    <div>
      <Image className="" src={logo} alt="" />
    </div>
    <p className="md:w-80 text-justify text-sm py-5">Graduate Consultancy is your education advisor, dedicated to supporting enthusiastic students every step of the way. We provide essential guidance for education counseling, application, admissions, and visa processing for studying abroad in Canada.</p>
  </nav>
  <nav>
    <header className="text-2xl text-[#fff] font-bold">Bangladesh Office</header> 
    <p className="flex gap-2"><IoLocationSharp className="mt-2" /> Mustafa Arcade (3rd Floor) <br></br> Apartment A3, House 18, <br></br> Road 1/A, Block J, <br></br>Baridhara, Dhaka 1212</p>
    <p className="flex items-center gap-2"><FaPhoneAlt /> <code>(+880)1330993330</code></p>
    <p className="flex items-center gap-2"><FaPhoneAlt /> <code>(+880)1330993332</code></p>
    <p className="flex items-center gap-2"><MdEmail /> info@graduateconsultancy.com</p>
  </nav> 
  <nav>
    <header className="text-2xl text-[#fff] font-bold">Canada Office</header> 
    <p className="flex gap-2"><IoLocationSharp className="mt-2" /> 702-80 The Blvd, St. John&apos;s,<br></br> NL. A1A 3K6 Canada</p>
    <p className="flex items-center gap-2"><FaPhoneAlt /> <code>+1(709)7250870</code></p>
    {/* <p className="flex items-center gap-2"><FaPhoneAlt /> <code>(+880)1330993332</code></p> */}
    <p className="flex items-center gap-2"><MdEmail /> canada@graduateconsultancy.com</p>
    {/* <p className="flex items-center gap-2"><MdEmail /> hasanuzzaman@gmail.com</p> */}
  </nav> 
  <nav>
    <header className="text-2xl text-[#fff] font-bold">Follow us On</header> 
    <div className="grid grid-flow-row gap-4">

      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/graduateconsultancy"><p className="flex items-center gap-2"><FaFacebookF />Facebook</p></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/graduate_consultancy/"><p className="flex items-center gap-2"><FaInstagram />Instagram</p></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/graduateconsultancy"><p className="flex items-center gap-2"><FaLinkedinIn />Linkedin</p></a>
      <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/graduateconsultancy/"><p className="flex items-center gap-2"><FaPinterestP />Pinterest</p></a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/GraduateCBD"><p className="flex items-center gap-2"><FaXTwitter />Twitter</p></a>

    </div>
  </nav>
</footer>
<footer className="footer footer-center p-4 px-10 bg-logoRed text-white">
  <aside>
    <p>Copyright © 2023 Graduate Consultancy. All Rights Reserved</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;