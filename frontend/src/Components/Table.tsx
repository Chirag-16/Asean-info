import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

export function Table() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;

  const handleSearch = (e : any) => {
    setInputSearch(e.target.value);
    setCurrentPage(1);
  };

  const filterData = data.filter((item: any) => 
    item.carrier.toLowerCase().includes(inputSearch.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='flex justify-between pt-10'>
      <form className="max-w-md w-96 mx-auto pt-2">   
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search....." onChange={handleSearch} />
        </div>
      </form>
      <div className='pr-9'>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
      </div>
      
      
      <div className="flex justify-center container mx-auto pt-4">
        <table className="w-full md:w-auto bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600">
              <th className="py-2 px-4 border-b">Sr.</th>
              <th className="py-2 px-4 border-b">Carrier</th>
              <th className="py-2 px-4 border-b">Queue</th>
              <th className="py-2 px-4 border-b">Active</th>
              <th className="py-2 px-4 border-b">Avg Age</th>
              <th className="py-2 px-4 border-b">Duration</th>
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
            {currentItems.map((item: any) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b font-bold">{item.carrier}</td>
                <td className="py-2 px-4 border-b font-bold">{item.queue}</td>
                <td className="py-2 px-4 border-b">{item.active}</td>
                <td className="py-2 px-4 border-b">{item.avgage}</td>
                <td className="py-2 px-4 border-b">{item.duration}</td>
                <td className="py-2 px-4 border-b">{item.lastRun}</td>
                <td className="py-2 px-4 border-b">{item.success}</td>
                <td className="py-2 px-4 border-b">{item.rnf}</td>
                <td className="py-2 px-4 border-b">{item.fail}</td>
                <td className="py-2 px-4 border-b">{item.crawlFrequny}</td>
                <td className="py-2 px-4 border-b">{item.durationTolaunch}</td>
                <td className="py-2 px-4 border-b">{item.startTime}</td>
                <td className="py-2 px-4 border-b">{item.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}