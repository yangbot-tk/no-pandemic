import React, { Component } from "react"
import firebase from "firebase"
import $ from "jquery"

class InformationForm extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      phone: null,
      email: null,
      address: null,
      sin: null,
      birthday: null,
    }
  }

  // 渲染加载用户存储的信息 展示在placeholder
  componentDidMount() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Profile")
        .get()
        .then((snap) => {
          this.setState({
            name: snap.data().Name,
            phone: snap.data().Phone,
            email: snap.data().Email,
            address: snap.data().Address,
            sin: snap.data().SIN,
            birthday: snap.data().Birthday,
          })
        })
    })
  }

  // 用户编辑后保存更改
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  // 写入用户更新的数据 存储到firebase
  addDoc = () => {
    const { name, phone, email, address, sin, birthday } = this.state
    const db = firebase.firestore()

    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user").doc(user.uid).collection("Doc").doc("Profile").set(
        {
          Name: name,
          Phone: phone,
          Email: email,
          Address: address,
          SIN: sin,
          Birthday: birthday,
        },
        {
          merge: true,
        }
      )
    })
    $("input").val("")
  }

  render() {
    return (
      <div className="profile-section">
        <div className="profile-submit">
          <h2>Information</h2>
          <button onClick={this.addDoc}>Save</button>
        </div>
        <div className="profile-form">
          <div>
            <p>Name</p>
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder={this.state.name}
            />
          </div>
          <div>
            <p>Phone Number</p>
            <input
              onChange={this.handleChange}
              name="phone"
              type="text"
              placeholder={this.state.phone}
            />
          </div>

          <div>
            <p>Email</p>
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder={this.state.email}
            />
          </div>
          <div>
            <p>Address</p>
            <input
              onChange={this.handleChange}
              name="address"
              type="text"
              placeholder={this.state.address}
            />
          </div>
          <div>
            <p>SIN</p>
            <input
              onChange={this.handleChange}
              name="sin"
              type="text"
              placeholder={this.state.sin}
            />
          </div>
          <div>
            <p>Birth Date</p>
            <input
              onChange={this.handleChange}
              name="birthday"
              type="date"
              placeholder="123 456 789"
              value={this.state.birthday}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default InformationForm