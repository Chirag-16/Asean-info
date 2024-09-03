import { useState } from "react";

// interface SearchComponentProps {
//   handleSubmit: (carrier: string) => void;
// }

export default function SearchComponen ()  {
  const [carrier, setCarrier] = useState("");
  const [ queue, setQueue ] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

   const handleChange = (e : any) => {
    const { name, value } = (e).target;
    if (name === "carrier") {
      setCarrier(value);
      setQueue(value);
    } else if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  // const onSubmit()  {
  //   e.preventDefault();
  //   handleSubmit(carrier.trim().toLowerCase());
  // };

  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <form className="p-8" > 
          <div className="grid  grid-cols-1 gap-4">
            <div className="col-span-1">
              <label htmlFor="carrier" className="block text-lg font-semibold">
                Carrier:
              </label>
              <input
                type="text"
                id="carrier"
                name="carrier"
                placeholder="Enter Carrier Name..."
                value={carrier}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="carrier" className="block text-lg font-semibold">
                Queue
              </label>
              <input
                type="text"
                id="carrier"
                name="carrier"
                placeholder="Normal"
                value={carrier}
               onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="daterange" className="block text-lg font-semibold">
                Date Range:
              </label>
              <div className="flex">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder="Start Date"
                  value={startDate}
                 onChange={handleChange}
                  className="border border-gray-300 rounded-l-md px-3 py-2 w-full"
                />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  placeholder="End Date"
                  value={endDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-r-md px-3 py-2 w-full"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

