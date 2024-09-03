
import SearchComponent  from "./Components/SearchComponent"
import {Table } from "./Components/Table"


const App = () => {

  return (
 <div>
  <div>
  <h1 className=" flex justify-center text-2xl bg-zinc-400 font-bold mb-4 ">Asean Info. Data</h1>
  </div>
    <SearchComponent />
    <Table />
   </div>
  );
};

export default App;
