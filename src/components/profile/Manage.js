import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import firebase from "firebase"
import Progress from "../Progress"
import Feedback from "../Feedback"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}))

export default function ControlledOpenSelect(props) {
  const db = firebase.firestore()
  const classes = useStyles()
  const [status, setStatus] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const darkText = {
    color: "white",
  }

  const handleChange = (event) => {
    setLoading(true)
    setTimeout(() => {
      setStatus(event.target.value)
      firebase.auth().onAuthStateChanged((user) => {
        db.collection("user")
          .doc(user.uid)
          .collection("Doc")
          .doc("Symptom")
          .update({
            SymptomResult: event.target.value,
          })
      })
      setLoading(false)
      setShow(true)
    }, 1000)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Symptom")
        .get()
        .then((doc) => {
          if (doc.data().SymptomResult) {
            setStatus(doc.data().SymptomResult)
          }
        })
    })
  }, [])

  return (
    <div>
      {loading === true ? <Progress /> : null}

      {show === true ? (
        <div>
          <Feedback
            msg="Success"
            info="Your status has been changed. Please check out your symptom and aid"
            imgUrl="/images/success.png"
          />
        </div>
      ) : null}

      <FormControl className={classes.formControl}>
        <InputLabel
          id="demo-controlled-open-select-label"
          style={props.theme === true ? darkText : null}
        >
          Status
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
          style={props.theme === true ? darkText : null}
        >
          <MenuItem value={"Low Risk"}>Low Risk</MenuItem>
          <MenuItem value={"High Risk"}>High Risk</MenuItem>
          <MenuItem value={"Test"}>Test</MenuItem>
          <MenuItem value={"Wait"}>Wait</MenuItem>
          <MenuItem value={"Confirmed"}>Confirmed</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
