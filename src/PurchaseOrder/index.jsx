import React from 'react'
import GeneralInfo from './GeneralInfo'
import PODetails from '../PoDetails/Index'
import OtherDetails from '../OtherDetails/OtherDetails'

const Purchase = () => {
  return (
    <div className="purchase container mt-5">
      <div className="row">
        <div className="col-md-6 w-75">
          <GeneralInfo/>
          <PODetails/>
        </div>
        <div className="col-md-6 w-25">
          
         <OtherDetails/>
        </div>
      </div>
    </div>
  )
}

export default Purchase