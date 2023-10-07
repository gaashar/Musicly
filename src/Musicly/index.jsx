import React from "react";
import { Header } from "../components/header";
import { ProductDetails } from "../components/productDetails/productDetails";
import { Collections } from "../components/collections/collections";
import { StudioMap } from "../components/studioMap/studioMap";
import { CustomerFeedback } from "../components/customerFeedback/customerFeedback";
import { Faq } from "../components/faq/faq";
import { ContactUs } from "../components/contactUs/contactUs";

export const Musicly = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Collections />
      <StudioMap />
      <CustomerFeedback />
      <Faq />
      <ContactUs />
    </>
  );
};
