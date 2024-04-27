import FileExplorer from "./components/FileExplorer";

import data from "../db.json";


function App() {


  return (
    <>
    <FileExplorer data = {data} />
    </>
  )
}

export default App
