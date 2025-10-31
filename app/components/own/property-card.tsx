import Link from "next/link";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "../tailwindui/description-list";

type CardProps = {
  name: string;
  address: string;
  numOfUnits: string;
  id: string;
};

export default function PropertyCard({
  id,
  name,
  address,
  numOfUnits,
}: CardProps) {
  return (
    <div className="max-w-3xl w-full border border-gray-200 rounded-xl shadow-sm p-8">
      <Link href={`/leasing/property/${id}`}>
        <DescriptionList>
          <DescriptionTerm>Name</DescriptionTerm>
          <DescriptionDetails>{name}</DescriptionDetails>

          <DescriptionTerm>Address</DescriptionTerm>
          <DescriptionDetails>{address}</DescriptionDetails>

          <DescriptionTerm>Number of units</DescriptionTerm>
          <DescriptionDetails>{numOfUnits}</DescriptionDetails>
        </DescriptionList>
      </Link>
    </div>
  );
}
