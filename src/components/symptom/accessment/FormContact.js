import React from "react"

function FormContact(props) {
  const darkText = {
    color: "white",
  }

  const darkSurface = {
    backgroundColor: "#333",
  }

  return (
    <div
      style={props.theme === true ? darkSurface : null}
      className="formcontact-item"
    >
      <img src={props.imgUrl} alt="phone call" width="50px" height="50px" />
      <p style={props.theme === true ? darkText : null}>{props.title}</p>
    </div>
  )
}

export default FormContact
