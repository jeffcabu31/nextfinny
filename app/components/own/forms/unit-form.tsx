import { Button } from "../../tailwindui/button";
import {
  Description,
  Field,
  Fieldset,
  Label,
  Legend,
} from "../../tailwindui/fieldset";
import { Input } from "../../tailwindui/input";
import { Select } from "../../tailwindui/select";
import { Text } from "../../tailwindui/text";

export default function UnitForm() {
  const capacity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bathrooms = [1, 2, 3, 4, 5];
  const numOfLevels = [1, 2, 3, 4, 5, 6, 7];

  return (
    <form className="max-w-3xl">
      <Fieldset className="mb-8">
        <div className="mb-4">
          <Legend>Add a unit</Legend>
        </div>

        <div className="flex flex-col gap-4">
          <Field>
            <Label>Unit Name</Label>
            <Description>How do you want to call the unit</Description>
            <Input name="unit_name" />
          </Field>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field>
              <Label>Capacity</Label>
              <Description>How many are allowed to live</Description>
              <Select name="capacity">
                {capacity.map((cap) => (
                  <option key={cap} value={cap}>
                    {cap}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>Number of Bedrooms</Label>
              <Description>How many sleeping areas</Description>
              <Select name="bedrooms">
                {bedrooms.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>Number of Bathrooms</Label>
              <Description>How many shower and bath areas</Description>
              <Select name="bathrooms">
                {bathrooms.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>Floor Area</Label>
              <Description>Measure of indoor living space (in sqm)</Description>
              <Input name="floor_area" />
            </Field>
            <Field>
              <Label>Number of Levels</Label>
              <Description>How many floors</Description>
              <Select name="num_of_levels">
                {numOfLevels.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>Level (optional)</Label>
              <Description>The floor the unit is located</Description>
              <Input name="floor_level" />
            </Field>
          </div>
        </div>
      </Fieldset>
      <Button className="w-full">Next: Add Units</Button>
    </form>
  );
}
