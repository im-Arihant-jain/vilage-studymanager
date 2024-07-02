// import "./App.css";

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import FellowDashboard from './components/fellow-dashboard/fellow-dashboard.component';
// import FellowManagerDashboard from './components/fellow-manager-dashboard/fellow-manager-dashboard.component';

// import Header from "./components/header/header.component";
// import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// import { auth } from "./firebase/firebase.utils";
// import AddFellow from "./components/add-fellow/AddFellow";
// import Profile from "./components/fellow-profile/Profile";
// import AboutUs from "./components/about-us/About";
// class App extends React.Component {

//   constructor(){
//     super();

//     this.state = {
//       currentUser: null
//     }
//   }

//   unsubscribeFromAuth = null;
//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
//       this.setState({currentUser: user}) ;
//       console.log(user);     

//     });
//   }

//   componentWillUnmount(){
//     this.unsubscribeFromAuth();
//   }

//   render() {

  
//     return (
//       <div>
//         <Header currentUser = {this.state.currentUser}/>
        
//         <Routes>
    
//           <Route path="/" element={<AboutUs />} />
//           <Route path="/signin" element={<SignInAndSignUp />}></Route>
//           <Route path="/fellowProfile" element={<Profile />}></Route>
//           <Route path="/fellow-dashboard" element={<FellowDashboard />} />
//           <Route path="/fellow-manager-dashboard" element={<FellowManagerDashboard />} />
//           <Route path="/Profile" element={<Profile />}></Route>
//           <Route path="/add-fellow" element={<AddFellow />} />
//           {/* <Route path="/aboutUs" element={<AboutUs />} />  */}
          
//          </Routes>
        
        
//        </div>
//     );
//   }
// }

// export default App;
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FellowDashboard from './components/fellow-dashboard/fellow-dashboard.component';
import FellowManagerDashboard from './components/fellow-manager-dashboard/fellow-manager-dashboard.component';
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import AddFellow from "./components/add-fellow/AddFellow";
import Profile from "./components/fellow-profile/Profile";
import AboutUs from "./components/about-us/About";
import Footer from "./components/footer/Footer";
import StudentProfile from "./components/StudentProfile/StudentProfile";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignInAndSignUp />} />
          <Route path="/fellowProfile" element={<Profile />} />
          <Route path="/fellow-dashboard" element={<FellowDashboard />} />
          <Route path="/fellow-manager-dashboard" element={<FellowManagerDashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/add-fellow" element={<AddFellow />} />
          <Route path="/student-profile/:userId" element={<StudentProfile />} />
      
        </Routes>
      </div>
    );
  }
}

export default App;
