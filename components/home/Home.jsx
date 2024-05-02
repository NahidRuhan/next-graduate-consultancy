import AnimatedCount from "@/components/home/AnimatedCount";
import Banner from "@/components/home/Banner";
import Country from "@/components/home/Country";
import HomeAbout from "@/components/home/HomeAbout";
import HomePartner from "@/components/home/HomePartner";
import HomeServices from "@/components/home/HomeServices";
import Socials from "@/components/home/Socials";
import Modal from "./Modal";
import Promotional from "./Promotional";
import Banner2 from "./Banner2";

const Home = () => {

    return (
        <div>
            <Modal></Modal>
            <Banner></Banner>
            <Country></Country>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
            <HomePartner></HomePartner>
            <AnimatedCount></AnimatedCount>
            <Socials></Socials>
            <Promotional></Promotional>
        </div>
    );
};

export default Home;