import React from 'react'

const InputTextField = (props) => {
  const { type, name, handleOnChange ,label} = props
 
  return (
    <>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">{label}</label>
        <input onChange={(e) => handleOnChange(e)} type={type} name={name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
    </>
  )
}

export default InputTextField