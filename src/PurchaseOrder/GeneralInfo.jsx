import React, { useState } from 'react'
import InputTextField from '../Component/InputTextField'
import "./GeneralInfo.scss"
const GeneralInfo = () => {
  const [genralInfo, setGeneralInfo] = useState({
    purchaseOrderNo: "",
    purchaseOrderDate: "",
    deliveryDate: "",
    status: ""
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setGeneralInfo((prev) => ({ ...prev, [name]: value }))
  }
  console.log("genralInfo",genralInfo)
  return (
    <div>
      <h4>General Information</h4>
      <div className='generalInfo'>
        <div className='form'>
          <InputTextField label="Purchase order number" type="text" name="purchaseOrderNo" handleOnChange={handleOnChange} />
          <InputTextField label="Purchase order date" type="text" name="purchaseOrderDate" handleOnChange={handleOnChange} />
        </div>
        <div className='form'>
          <InputTextField label="Delivery Date" type="text" name="deliveryDate" handleOnChange={handleOnChange} />
          <InputTextField label="Status" type="text" name="status" handleOnChange={handleOnChange} />
        </div>
      </div>


    </div>
  )
}

export default GeneralInfo