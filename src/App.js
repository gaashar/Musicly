import "./App.css";
import { Header } from "./components/header/header";
import { ProductDetails } from "./components/productDetails/productDetails";
import { StudioMap } from "./components/studioMap/studioMap";
import { CustomerFeedback } from "./components/customerFeedback/customerFeedback";
import { Faq } from "./components/faq/faq";
import { ContactUs } from "./components/contactUs/contactUs";

function App() {
  return (
    <>
      <Header />
      <ProductDetails />
      <StudioMap />
      <CustomerFeedback />
      <Faq />
      <ContactUs />
    </>
  );
}

export default App;
