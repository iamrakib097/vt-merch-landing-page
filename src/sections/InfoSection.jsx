import React from "react";
import InfoCard from "../ui/InfoCard";
import shippingIcon from "../assets/Icon/delivery.svg";
import returnIcon from "../assets/Icon/return.svg";
import supportIcon from "../assets/Icon/customer_support1.svg";
import paymentIcon from "../assets/Icon/payment.svg";
const InfoSection = () => {
  const infoItems = [
    {
      icon: shippingIcon,
      title: "Shipping",
      description:
        "The attention to detail is evident in every aspect of this backpack.",
    },
    {
      icon: returnIcon,
      title: "Return",
      description:
        "The attention to detail is evident in every aspect of this backpack.",
    },
    {
      icon: supportIcon,
      title: "Support",
      description:
        "The attention to detail is evident in every aspect of this backpack.",
    },
    {
      icon: paymentIcon,
      title: "Payment",
      description:
        "The attention to detail is evident in every aspect of this backpack.",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto  py-10 md:py-10 px-20 bg-gradient-to-bl from-[#BB1117] to-[#EC3339] flex flex-col md:flex-row justify-center items-center">
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-10 "
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        {infoItems.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
