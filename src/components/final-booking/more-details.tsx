import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function MoreDetails() {
  return (
    <div className="">
      <div className="font-sans flex flex-col gap-8">
        <div className="shadow-md rounded-[16px] px-4">
          <div className="max-w-3xl mx-auto border-t-4 border-blue-600 divide-y-2">
            <h2 className="text-xl font-bold pt-4">Transfer</h2>
            <div className="py-4 flex flex-col gap-2">
              <h3 className="font-light">Do you like to transfer service?</h3>
              <select
                name="yes or no"
                id="1"
                className="border border-gray-300 w-[220px] px-2 py-1 rounded"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-[16px] px-4">
          <div className="max-w-3xl mx-auto border-t-4 border-blue-600 divide divide-y-2">
            <h2 className="text-xl font-bold py-4">Payment Options</h2>
            <div className="py-4 flex flex-col gap-2">
              <RadioGroup className="flex items-center gap-4 pt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="Paypal"
                    id="paypal"
                    className="text-blue-600"
                  />
                  <Label htmlFor="yes">Paypal</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-[16px]  px-4">
          <div className="max-w-3xl mx-auto border-t-4 border-blue-600 divide divide-y-2 ">
            <h2 className="text-xl font-bold py-4">Cancellation Policy</h2>
            <div className="py-4">
                <div className="">

              <input type="checkbox" name="policy" id="policy" />
              <label htmlFor="" className="pl-2">
                {" "}
                I agree with the following cancellation policy Cancellation 
                <br />
                is allowed up to 24 hours prior to cruise.
              </label>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h2 className="text-xl">Validation Number*</h2>
                    <p className="font-serif ">32249</p>
                    <input type="text"  className="border h-10 w-40 px-2" />
                    <Button className="bg-[#0A71B8] px-6 py-4 hover:bg-[#0A71a8] cursor-pointer w-50 h-10">
                        Book It
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
