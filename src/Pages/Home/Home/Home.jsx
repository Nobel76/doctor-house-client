import Banner from "../Banner/Banner";
import ContractUs from "../ContractUs/ContractUs";
import OurDoctors from "../OurDoctors/OurDoctors";
import OurService from "../OurService/OurService";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <Section></Section>
            <SectionTitle></SectionTitle>
            <OurDoctors></OurDoctors>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;