import React from "react"

function FormContact(props) {
  return (
    <div className="formcontact-item">
      <img src={props.imgUrl} alt="phone call" width="50px" height="50px" />
      <p>{props.title}</p>
    </div>
  )
}

export default FormContact
