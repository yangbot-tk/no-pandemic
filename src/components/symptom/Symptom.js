import React, { Component } from "react"
import Accessment from "./Accessment"
import firebase from "firebase"
import Loading from "../Loading"
import HighRiskReturn from "./HighRiskReturn"
import LowRiskReturn from "./LowRiskReturn"
import WaitReturn from "./WaitReturn"
import TestReturn from "./TestReturn"
import ConfirmedReturn from "./ConfirmedReturn"
import UserNav from "../UserNav"

class Symptom extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: false,
      symptomResult: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          this.setState({
            darkMode: doc.data().DarkMode,
          })
        })
    })

    this.setState({ symptomResult: "loading" })
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) =>
      db
        .collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Symptom")
        .get()
        .then((snap) =>
          this.setState({
            symptomResult: snap.data().SymptomResult,
          })
        )
    )
  }

  render() {
    const darkBackground = {
      backgroundColor: "#121212",
    }
    return (
      <div
        style={this.state.darkMode === true ? darkBackground : null}
        className="main-container"
      >
        <UserNav title="Symptom Dashboard" />
        <div className="content-container">
          {/* 根据数据库用户的症状结果渲染组件 */}

          {this.state.symptomResult === "loading" ? (
            <Loading />
          ) : // 如果症状结果不存在 渲染症状选择表单
          this.state.symptomResult == null ? (
            <Accessment theme={this.state.darkMode} />
          ) : // 如果是高风险患者 渲染需要进一步测试的提示
          this.state.symptomResult === "High Risk" ? (
            <HighRiskReturn theme={this.state.darkMode} />
          ) : //如果是低风险患者 提示用户已经填写是否要更改
          this.state.symptomResult === "Low Risk" ? (
            <LowRiskReturn theme={this.state.darkMode} />
          ) : //如果已经进行进一步的测试 并处于等待状态 渲染提示用户等待
          this.state.symptomResult === "Wait" ? (
            <WaitReturn theme={this.state.darkMode} />
          ) : //如果用户是已经确诊新冠病毒 渲染无法更改
          this.state.symptomResult === "Confirmed" ? (
            <ConfirmedReturn theme={this.state.darkMode} />
          ) : this.state.symptomResult === "Test" ? (
            <TestReturn theme={this.state.darkMode} />
          ) : null}
        </div>
      </div>
    )
  }
}
export default Symptom
