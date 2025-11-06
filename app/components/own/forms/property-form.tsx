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

export default function PropertyForm() {
  return (
    <form className="max-w-3xl">
      <Fieldset className="mb-8">
        <div className="mb-4">
          <Legend>Add a property</Legend>
          <Text>Add your property for now and add its units next</Text>
        </div>

        <div className="flex flex-col gap-4">
          <Field>
            <Label>Name of property</Label>
            <Description>How would you like to name your property</Description>
            <Input name="firstLine" />
          </Field>
          <Field>
            <Label>Street Address</Label>
            <Input name="firstLine" />
          </Field>
          <Field>
            <Label>Second Line</Label>
            <Input name="secondLine" />
          </Field>
          <Field>
            <Label>Third Line</Label>
            <Input name="thirdLine" />
          </Field>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>City</Label>
              <Select name="city">
                <option value="quezon_city">Quezon City</option>
                <option value="manila">Manila</option>
                <option value="taguig">Taguig</option>
                <option value="makati">Makati</option>
              </Select>
            </Field>
            <Field>
              <Label>Province</Label>
              <Select name="city">
                <option value="metro_manila">Metro Manila</option>
                <option value="cavite">Cavite</option>
                <option value="ilocos_sur">Ilocos Sur</option>
                <option value="laguna">Laguna</option>
              </Select>
            </Field>
          </div>
        </div>
      </Fieldset>
      <Button className="w-full">Next: Add Units</Button>
    </form>
  );
}
