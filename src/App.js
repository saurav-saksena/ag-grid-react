import './App.css';
import ChartGrid from './Chart-grid/ChartGrid';
import GridExample from './Nestedagriddata/GridExample';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import PlatformSoftwareLayout from './Chart-grid/PlatformSoftwareLayout';
import ChartProblem from './21/05/ChartProblem';
import NestedTreeGrouping from './Nestedagriddata/NestedTreeGrouping';
import Store from './ContextApi/Store';
import ProGrid from './component/ProGrid';
function App() {
  return (
  <Store>
<BrowserRouter>
<Nav />
<Routes>
  <Route path='/' element={<ChartGrid />} />
  <Route path='/groupgrid' element={<GridExample />} />
  <Route path='/groupgrid2' element={<NestedTreeGrouping />} />
  <Route path='/groupgrid2/:id' element={<NestedTreeGrouping />} />
  <Route  path='/groupgrid3' element={<PlatformSoftwareLayout />} />
  <Route path='/groupgrid4' element={<ChartProblem />} />
  <Route path='/groupgrid5' element={<ProGrid />} />
</Routes>
</BrowserRouter>
</Store>
  );
}

export default App;
