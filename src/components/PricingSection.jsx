import { Tag } from "lucide-react";
import { pricingPlans } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="flex text-center p-10 items-center justify-center flex-col"
    >
      <TagLine>Pricing</TagLine>
      <h2 className="text-3xl font-extrabold mb-8 pt-3">
        Flexible Pricing to Fit Your Growth
      </h2>
      <div className="grid mt-10 items-center grid-cols-1 gap-8 md:gap-3 md:grid-cols-3 max-w-screen-xl">
        {pricingPlans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
