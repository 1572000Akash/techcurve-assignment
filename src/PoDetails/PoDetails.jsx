import React, { useState } from 'react'
import "./PoDetails.scss"
import CardInfo from '../Component/Card/CardInfo'
import TabInfo from '../TabInfo/TabInfo'
const PoDetails = () => {

  const [cardDetails, setCardDetails] = useState({

  })
  const [isBtnActive, setIsBtnActive] = useState(true)
  const handleOnChange = (e) => {
    const { name, value } = e.target

  }

  return (
    <div className='poMain mt-3'>
      <div className="poheader">
        <h4>PO Details</h4>
        <div className="poBtn d-flex">
          <button onClick={() => setIsBtnActive(true)} className='generatePo'>
            Generate PO
          </button>
          <button onClick={() => setIsBtnActive(false)} className='uploadPo'>
            Upload PO
          </button>
        </div>
      </div>
      {
        isBtnActive ? <>
          <div className="cardsInfoDetails mt-4">
            <CardInfo cardName={"Vender"} label="Company Name" selectName="Address" name="vender" handleOnChange={handleOnChange} type="text" />
            <CardInfo cardName={"Ship to"} label="Company Name" selectName="Address" name="shipTo" handleOnChange={handleOnChange} type="text" />

          </div>
          <TabInfo />
        </> : "Upload PO"
      }
    </div>
  )
}

export default PoDetails