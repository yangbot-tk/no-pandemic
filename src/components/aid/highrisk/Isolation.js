import React from "react"
import IsolationItem from "./IsolationItem"

function Isolation() {
  return (
    <div>
      <div className="aid-module-header">
        <h3 className="module-title">Self-Isolation Instructions</h3>
        <p style={{ padding: "0 20px" }}>
          Isolation means staying at home when you have a symptom of COVID-19
          and it is possible that you have been exposed to the virus.{" "}
        </p>
      </div>
      <div className="isolation-container">
        <IsolationItem
          title="Limit contact with others"
          content="Do not leave home unless it’s to seek medical care"
          imgUrl="/images/isolation/stayhome.png"
          details={[
            "Do not leave home unless it’s to seek medical care.",
            "Do not use public transportation (e.g. buses, taxis).",
            "Arrange to have groceries and supplies dropped off at your door to minimize contact.",
            "Stay in a separate room and use a separate bathroom from others in your home, if possible.",
            "If you have to be in contact with others, practise physical distancing and keep at least 2 metres between yourself and the other person.",
            "Avoid contact with individuals with chronic conditions, compromised immune systems and older adults.",
            "Avoid contact with animals, as there have been several reports of people transmitting COVID-19 to their pets.",
          ]}
        />
        <IsolationItem
          title="Keep your hands clean"
          content="Wash your hands often with soap at least 20 seconds"
          imgUrl="/images/isolation/handwash.png"
          details={[
            "Wash your hands often with soap and water for at least 20 seconds, and dry with disposable paper towels or dry reusable towel, replacing it when it becomes wet.",
            "You can also remove dirt with a wet wipe and then use an alcohol-based hand sanitizer.",
            "Avoid touching your eyes, nose and mouth.",
            "Cough or sneeze into the bend of your arm or into a tissue.",
          ]}
        />
        <IsolationItem
          title="Avoid contaminating"
          content="Clean and disinfect surfaces that you touch often daily if possible"
          imgUrl="/images/isolation/coronavirus.png"
          details={[
            "At least once daily, clean and disinfect surfaces that you touch often, like toilets, bedside tables, doorknobs, phones and television remotes.",
            "Do not share personal items with others, such as toothbrushes, towels, bed linen, utensils or electronic devices.",
            "To disinfect, use only approved hard-surface disinfectants that have a Drug Identification Number (DIN). A DIN is an 8-digit number given by Health Canada that confirms the disinfectant product is approved and safe for use in Canada.",
            "Place contaminated items that cannot be cleaned in a lined container, secure the contents and dispose of them with other household waste.",
            "Put the lid of the toilet down before flushing.",
            "Wearing a face mask, including a non-medical mask or facial covering (i.e., constructed to completely cover the nose and mouth without gaping, and secured to the head by ties or ear loops), may trap respiratory droplets and stop them from contaminating surfaces around you - but wearing a mask does not reduce the need for cleaning.",
            "Avoid contact with animals, as there have been several reports of people transmitting COVID-19 to their pets.",
          ]}
        />
        <IsolationItem
          title="Care for yourself"
          content="Monitor your symptoms carefully as directed by Provincial Health"
          imgUrl="/images/isolation/fever.png"
          details={[
            "Monitor your symptoms as directed by your health care provider or Public Health Authority.",
            "If your symptoms get worse, immediately contact your health care provider or public health authority and follow their instructions.",
            "Get some rest, eat a balanced diet and stay in touch with others through communication devices.",
          ]}
        />
        <IsolationItem
          title="Supplies to have at home"
          content="Medical masks if available in case for necessary out"
          imgUrl="/images/isolation/care.png"
          details={[
            "Eye protection (face shield or goggles) for use by caregiver",
            "Disposable gloves (do not re-use) for use by caregiver",
            "Disposable paper towels",
            "Tissues",
            "Waste container with plastic liner",
            "Thermometer",
            "Over the counter medication to reduce fever (e.g., ibuprofen or acetaminophen)",
            "Running water",
            "Hand soap",
            "Alcohol-based sanitizer containing at least 60% alcohol",
            "Dish soap",
            "Regular laundry soap",
            "Regular household cleaning products",
            "Alcohol prep wipes or appropriate cleaning products for high-touch electronics",
          ]}
        />
      </div>
    </div>
  )
}

export default Isolation
