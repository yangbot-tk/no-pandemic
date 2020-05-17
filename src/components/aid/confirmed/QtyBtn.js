import React, { useState } from "react"

function QtyBtn(props) {
  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
    color: "white",
  }

  const darkText = {
    color: "white",
    backgroundColor: "#424242",
  }

  const [qty, setQty] = useState(0)
  const limitedQty = 5
  function increment() {
    if (qty < limitedQty) {
      setQty((prevQty) => prevQty + 1)
    }
  }

  function decrement() {
    if (qty > 0) {
      setQty((prevQty) => prevQty - 1)
    }
  }

  return (
    <div className="qtybtn-cart-container">
      <div className="qtybtn-container">
        <button
          style={props.theme === true ? darkInput : null}
          onClick={decrement}
        >
          -
        </button>
        <span style={props.theme === true ? darkText : null}>{qty}</span>
        <button
          style={props.theme === true ? darkInput : null}
          onClick={increment}
        >
          +
        </button>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  )
}

export default QtyBtn
