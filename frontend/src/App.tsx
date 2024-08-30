import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ inputSearch, setInputSearch] = useState("")
  

  useEffect(() => {
     axios.get('http://localhost:8000/api/user/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      
  }, []);


  if (loading) return <div className="text-center py-4">Loading...</div>;


  const handlesearch = (e : any) => {
    setInputSearch(e.target.value);
  };

  const filterData = data.filter((data : any) => 
    data.carrier.toLowerCase().includes(inputSearch.toLowerCase())
  );


  
  

  return (
    
   <div>
    <h1 className=" flex justify-center text-2xl bg-zinc-400 font-bold mb-4 ">Asean Info. Data</h1>
    <form className="max-w-md mx-auto pt-2">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search....." onChange={handlesearch} />
    </div>
</form>
    
    <div className="container mx-auto pt-4 ">
      <table className=" w-full md:w-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600">
            <th className="py-2 px-4 border-b">Sr.</th>
            <th className="py-2 px-4 border-b">Carrier</th>
            <th className="py-2 px-4 border-b">Active</th>
            <th className="py-2 px-4 border-b">Last Run</th>
            <th className="py-2 px-4 border-b">Success</th>
            <th className="py-2 px-4 border-b">RNF(404)</th>
            <th className="py-2 px-4 border-b">Fail</th>
            <th className="py-2 px-4 border-b">CrawlFrequency</th>
            <th className="py-2 px-4 border-b">Duration To Launch</th>
            <th className="py-2 px-4 border-b">Start Time</th>
            <th className="py-2 px-4 border-b">End Time</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map(data => (
            //@ts-ignore
            <tr key={data.id}>
              <td className="py-2 px-4 border-b">{data.id}</td>
              <td className="py-2 px-4 border-b font-bold">{data.carrier}</td>
              <td className="py-2 px-4 border-b">{data.active}</td>
              <td className="py-2 px-4 border-b">{data.lastRun}</td>
              <td className="py-2 px-4 border-b">{data.success}</td>
              <td className="py-2 px-4 border-b">{data.rnf}</td>
              <td className="py-2 px-4 border-b">{data.fail}</td>
              <td className="py-2 px-4 border-b">{data.crawlFrequny}</td>
              <td className="py-2 px-4 border-b">{data.durationTolaunch}</td>
              <td className="py-2 px-4 border-b">{data.startTime}</td>
              <td className="py-2 px-4 border-b">{data.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default App;
