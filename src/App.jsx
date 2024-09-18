import BestSelling from "./sections/BestSelling";
import Collection from "./sections/Collection";
import Footer from "./sections/Footer";
import FutureLooksBright from "./sections/FutureLooksBright";
import Header from "./sections/Header";
import InfoSection from "./sections/InfoSection";
import NewArrival from "./sections/NewArrival";
import ProductOfMonth from "./sections/ProductOfMonth";
import Quotes from "./sections/Quotes";
import ShopCollection from "./sections/ShopCollection";
import WhatWeBelieve from "./sections/WhatWeBelieve";
export default function App() {
  return (
    <>
      <Header />
      <BestSelling />
      <Collection />
      <Quotes />
      <ShopCollection />
      <NewArrival />
      <FutureLooksBright />
      <WhatWeBelieve />
      <ProductOfMonth />
      <InfoSection />
      <Footer />
    </>
  );
}
