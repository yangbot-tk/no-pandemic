// Import FirebaseAuth and firebase.
import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase"
import Navbar from "./components/Navbar"

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBaeFlC-YPDz4NCZsYzIlVbIpYCvtjbEgM",
  authDomain: "covaid-14.firebaseapp.com",
  databaseURL: "https://covaid-14.firebaseio.com",
  projectId: "covaid-14",
  storageBucket: "covaid-14.appspot.com",
  messagingSenderId: "226991688377",
  appId: "1:226991688377:web:4ace782662c396c4dbe968",
}
firebase.initializeApp(config)

class SignIn extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }))
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="signin-container">
          <div className="signin-ui-container">
            <h1>QuarantineAid</h1>
            <h4>Finds out your surroundings and protect yourself</h4>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </div>
      )
    }
    const db = firebase.firestore()

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("user").doc(user.uid).set(
        {
          Name: user.displayName,
          Profile: "/images/user.jpg",
        },
        {
          merge: true,
        }
      )
    })

    return (
      <div>
        {/* <h1>My App</h1>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p> */}
        <Navbar />
      </div>
    )
  }
}

export default SignIn
