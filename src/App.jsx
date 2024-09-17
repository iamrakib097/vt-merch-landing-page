import BestSelling from "./sections/BestSelling";
import Collection from "./sections/Collection";
import Header from "./sections/Header";
import Quotes from "./sections/Quotes";
import ShopCollection from "./sections/ShopCollection";
export default function App() {
  return (
    <>
      <Header />
      <BestSelling />
      <Collection />
      <Quotes />
      <ShopCollection />
    </>
  );
}
