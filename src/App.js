import "./App.css";
import { Header } from "./components/header/header";
import { ProductDetails } from "./components/productDetails/productDetails";
import { StudioMap } from "./components/studioMap/studioMap";
import { CustomerFeedback } from "./components/customerFeedback/customerFeedback";

function App() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <StudioMap />
      <CustomerFeedback />
    </div>
  );
}

export default App;
