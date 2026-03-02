import React from "react";
import ChargeHeader from "./ChargeHeader";
import ChargeSection from "./ChargeSection";
import PricingTable from "./PricingTable";
import ChargeOpenaccount from "./ChargeOpenaccount";
import DematAnnualCharge from "./DematAnnualCharge";
import ChargesExplained from "./ChargesExplained";
import ChargesOption from "./ChargesOption";
import Disclaimer from "./Disclaimer";
function PricingPage() {
  return (
    <>
    <ChargeHeader/>
    <ChargeSection/>
    <PricingTable/>
    <ChargeOpenaccount/>
    <DematAnnualCharge/>
    <ChargesOption/>
    <ChargesExplained/>
    <Disclaimer/>
    </>
  );
}

export default PricingPage;
