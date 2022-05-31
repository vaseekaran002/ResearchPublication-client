import React, { useState } from 'react'
import '../ViewPublications/ViewPublications.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faRightFromBracket,
//   faMagnifyingGlass
// } from "@fortawesome/free-solid-svg-icons";
import PopUp from '../PopUp/PopUp';
import FilterForm from '../FilterForm/FilterForm';

const ViewPublications = () => {

  const [openPopup,setOpenPopup] = useState(false);

  return (
    <div
      style={{marginLeft:'200%',marginTop:'-120%'}}
      className="justify-content-center"
    >
      <div
        
        className="ViewPub"
      >

        <h1 className='header'>
            View Publications
        </h1>
        <div className='search'>
          <input className='searchbar' type='text' placeholder='Enter publication name..' style={{width:'70%'}}>
          
          </input>
          <button style={{marginLeft:'5%',backgroundColor:'#0166b2',color:'white',border:'none'}} onClick={()=>setOpenPopup(true)}>Filter By</button>
          <PopUp 
          title='Filter Search'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}>
            <FilterForm/>
          </PopUp>
        </div>
        </div>
        </div>

  )
}

export default ViewPublications