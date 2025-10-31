import Link from "next/link";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "../tailwindui/description-list";
import { Button } from "../tailwindui/button";

type CardProps = {
  id: string;
  name: string;
  capacity: string;
  numOfBedRooms: string;
  numOfLevels: string;
  floorArea: string;
  floorLevel: string;
};

export default function UnitCard({
  id,
  name,
  capacity,
  numOfBedRooms,
  numOfLevels,
  floorArea,
  floorLevel,
}: CardProps) {
  return (
    <div className="max-w-3xl w-full border border-gray-200 rounded-xl shadow-sm p-8">
      <Link href={`/leasing/property/${id}`}>
        <DescriptionList>
          <DescriptionTerm>Unit Name</DescriptionTerm>
          <DescriptionDetails>{name}</DescriptionDetails>

          <DescriptionTerm>Capacity</DescriptionTerm>
          <DescriptionDetails>{capacity}</DescriptionDetails>

          <DescriptionTerm>Number of Bedrooms</DescriptionTerm>
          <DescriptionDetails>{numOfBedRooms}</DescriptionDetails>

          <DescriptionTerm>Number of Levels</DescriptionTerm>
          <DescriptionDetails>{numOfLevels}</DescriptionDetails>

          <DescriptionTerm>Floor area</DescriptionTerm>
          <DescriptionDetails>{floorArea}</DescriptionDetails>

          <DescriptionTerm>Floor level</DescriptionTerm>
          <DescriptionDetails>{floorLevel}</DescriptionDetails>
        </DescriptionList>
      </Link>
      <Button className="mt-8 w-full">Advertise now</Button>
    </div>
  );
}
