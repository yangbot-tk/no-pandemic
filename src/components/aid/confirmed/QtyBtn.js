import React, { useState } from "react"

function QtyBtn() {
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
        <button onClick={decrement}>-</button>
        <span>{qty}</span>
        <button onClick={increment}>+</button>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  )
}

export default QtyBtn
