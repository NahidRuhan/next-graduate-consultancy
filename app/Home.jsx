import Banner from "@/components/home/Banner";
import Country from "@/components/home/Country";
import HomeAbout from "@/components/home/HomeAbout";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Country></Country>
            <HomeAbout></HomeAbout>
            {/* <HomeServices></HomeServices> */}
            {/* <HomePartner></HomePartner> */}
            {/* <AnimatedCount></AnimatedCount> */}
            {/* <Socials></Socials> */}
        </div>
    );
};

export default Home;