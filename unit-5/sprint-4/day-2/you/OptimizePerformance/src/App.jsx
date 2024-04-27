import { useState } from 'react'
import { ExpensiveOperationComponent } from "./components/ExpensiveOperationComponent";
import { ProductFilterComponent } from './components/ProductFilterComponent';
import { Parent } from "./components/Parent";
function App() {
 

  return (
    <>
      <h3>Performance Optimization</h3>
      {/* <ExpensiveOperationComponent/> */}
      {/* <ProductFilterComponent/> */}
      <Parent/>
    </>
  )
}

export default App
