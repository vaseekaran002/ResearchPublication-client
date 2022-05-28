import React, { useState } from 'react'
import '../ViewPublications/ViewPublications.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import PopUp from '../PopUp/PopUp';
import FilterForm from '../FilterForm/FilterForm';

const ViewPublications = () => {

  const [openPopup,setOpenPopup] = useState(false);

  return (
    <div className="ViewPub">
        <h1 className='header'>
            View Publications
        </h1>
        <div className='search'>
          <label><FontAwesomeIcon icon={faMagnifyingGlass}/></label>
          <input className='searchbar' type='text'>
          
          </input>
          <button onClick={()=>setOpenPopup(true)}>Filter By</button>
          <PopUp 
          title='Filter Search'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}>
            <FilterForm/>
          </PopUp>
        </div>
        
    </div>
  )
}

export default ViewPublications