import Image from "next/image";
import UnitCard from "./unit-card";

export default function PropertyDetail() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl text-bold mb-2">My First Rental</h1>
      <p className="text-gray-500 mb-8">
        88 Lancome Avenue, Chelsea, London SW1 123
      </p>

      <div>
        <h2 className="text-2xl text-bold mb-8">Images</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
          <Image
            src="https://picsum.photos/300"
            width={175}
            height={175}
            alt="house 1"
          />
        </div>
        <h2 className="text-2xl text-bold mb-8">Units</h2>
        <UnitCard
          id="1"
          name="1554"
          capacity="5"
          numOfBedRooms="3"
          numOfLevels="2"
          floorArea="80"
          floorLevel="1"
        />
      </div>
    </div>
  );
}
