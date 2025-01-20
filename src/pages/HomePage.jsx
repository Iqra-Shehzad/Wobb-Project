import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CampaignGrid from "../components/CompaignGrid";
import Footer from "../components/Footer";

const campaigns = [
  {
    id: 1,
    brand: "Nike",
    payout: "Barter",
    slots: "3/10",
    progress: 30,
    image: "Nike.jpg",
    description:"Nike's campaigns are known for their emotional storytelling, use of social media, and collaborations with athletes. "
  },
  {
    id: 2,
    brand: "Adidas",
    payout: "Refund",
    slots: "5/10",
    progress: 50,
    image: "Adidas.jpg",
    description:"Promote Adidas' latest sneaker collection and earn refunds or additional perks."
    
  },
  {
    id: 3,
    brand: "Coca Cola",
    payout: "Fixed Pay",
    slots: "7/10",
    progress: 70,
    image: "CocaCola.jpg",
    description:"Show your creative side by promoting Coca Cola's newest campaigns with a fixed payout."
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CampaignGrid campaigns={campaigns} />
      <Footer />
    </>
  );
};

export default HomePage;
