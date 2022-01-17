import "./App.css";
import { Header } from "./components/header/header";
import { ProductDetails } from "./components/productDetails/productDetails";
import { StudioMap } from "./components/studioMap/studioMap";

function App() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <StudioMap />
    </div>
  );
}

export default App;
