import React from "react"

function Symptom() {
  return (
    <div className="main-container">
      <h1>COVID-19 Accessment</h1>
      <div className="content-container">
        <p className="symptom-header">Do you experience any symptoms below?</p>
        <form className="symptom-form">
          <label>
            <input name="isGoing" type="checkbox" />
            Difficulty breathing
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Chest pain
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Feeling confused
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Losing consciousness
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Hard time waking up
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Fever
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Chills
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Cough
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Sore throat
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Stuffy or runny nose
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Loss of sense of smell
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Headache
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Muscle aches
          </label>

          <label>
            <input name="isGoing" type="checkbox" />
            Fatigue
          </label>
          <label>
            <input name="isGoing" type="checkbox" />
            Loss of appetite
          </label>
        </form>
      </div>
    </div>
  )
}
export default Symptom
