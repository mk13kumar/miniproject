import React from "react";
import ContectHeader from "../contacrHeader/ContectHeader";
import ContactForm from "../contactForm/ContactForm";
import Img from "../../Img";
import FormButton from "../../FormButton";
const Home = () => {
  return (
    <div>
      <ContectHeader />
      <FormButton />
      <ContactForm />
      <Img />
    </div>
  );
};

export default Home;
