import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import GridContext from './ContextApi/GridContext';

export default function Nav() {
  const {pageName,textColor}=useContext(GridContext)
  const location=useLocation()
  
  return (
   <>
   <div className='nav--header'>
    <span><i className={`bi bi-puzzle-fill ${textColor}`} ></i></span>
    <span className={textColor}>{pageName}</span>
   </div>
    <div className="btn-group d-flex" style={{width:"90%",margin:"auto"}} role="group" aria-label="Basic mixed styles example">
  <Link to="/" type="button" className={location.pathname==="/"?"btn btn-sm btn-primary":"btn btn-sm btn-outline-primary"}>home</Link>
  <Link to="/groupgrid" type="button" className={location.pathname==="/groupgrid"?"btn btn-sm btn-dark":"btn btn-sm btn-outline-dark"}>group grid 1</Link>
  <Link  to="/groupgrid2" type="button" className={location.pathname==="/groupgrid2"?"btn btn-sm btn-success":"btn btn-sm btn-outline-success"}>group grid 2</Link>
  <Link  to="/groupgrid3" type="button" className={location.pathname==="/groupgrid3"?"btn btn-sm btn-warning text-light":"btn btn-sm btn-outline-warning"}>chart-grid</Link>
  <Link  to="/groupgrid4" type="button" className={location.pathname==="/groupgrid4"?"btn btn-sm btn-danger":"btn btn-sm btn-outline-danger"}>chart-grid2</Link>
  <Link  to="/groupgrid5" type="button" className={location.pathname==="/groupgrid5"?"btn btn-sm btn-info text-light":"btn btn-sm btn-outline-info"}>Project Grid</Link>
</div></>
  )
}
