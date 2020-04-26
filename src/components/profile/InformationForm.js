import React from "react"

function InformationForm() {
  return (
    <div className="profile-section">
      <h2>Information</h2>
      <button>Save</button>
      <div className="profile-form">
        <div>
          <p>Name</p>
          <input name="name" type="text" placeholder="Yang Li" />
        </div>
        <div>
          <p>Phone Number</p>
          <input name="phone" type="text" placeholder="604-781-0561" />
        </div>

        <div>
          <p>Email</p>
          <input
            name="email"
            type="email"
            placeholder="liyang0525@hotmail.com"
          />
        </div>
        <div>
          <p>Address</p>
          <input
            name="address"
            type="text"
            placeholder="5109 Irmin St, Burnaby BC, Canada"
          />
        </div>
        <div>
          <p>SIN</p>
          <input name="sin" type="text" placeholder="123 456 789" />
        </div>
        <div>
          <p>Birth Date</p>
          <input name="birthday" type="date" placeholder="123 456 789" />
        </div>
      </div>
    </div>
  )
}

export default InformationForm
