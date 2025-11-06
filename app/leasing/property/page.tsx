import PropertyCard from "@/app/components/own/property-card";
import { Button } from "@/app/components/tailwindui/button";

export default function Page() {
  return (
    <div className="container max-w-3xl mx-auto">
      <p className="text-2xl mb-16">Properties List</p>
      <div className="flex justify-end mb-8">
        <Button className="w-48" href="/leasing/property/add">
          Add Property
        </Button>
      </div>

      <div className="flex flex-col mb-8">
        <div className="flex items-center flex-col gap-y-8">
          <PropertyCard
            id="1"
            name="My First Rental"
            address="88 Lancome Avenue, Chelsea, London SW1 123"
            numOfUnits="6"
          />
          <PropertyCard
            id="2"
            name="My Second Rental"
            address="88 Lancome Avenue, Chelsea, London SW1 123"
            numOfUnits="3"
          />
        </div>
      </div>
    </div>
  );
}
