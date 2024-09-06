import React from 'react'
import "./CardInfo.scss"
import InputTextField from '../InputTextField'
const CardInfo = (props) => {
  const { label, type, name, handleOnChange, selectName ,option,cardName} = props
  return (
    <div className='card'>
      <h3>{cardName}</h3>
      <InputTextField label="Purchase order number" type="text" name="purchaseOrderNo" handleOnChange={handleOnChange} />
      <div className="selectmain">
        <span className='selectName'>{selectName}</span>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select></div>
    </div>
  )
}

export default CardInfo