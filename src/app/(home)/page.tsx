import React from "react";
import CarouselSection from "./CarouselSection";
import CategorySection from "./CategorySection";
import PopularItemsSection from "./PopularItemsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Meets Your Cravings",
};

const HomePage = () => {
  return (
    <div>
      {/* <CarouselSection /> */}
      <CategorySection />
      <PopularItemsSection />
    </div>
  );
};

export default HomePage;
