import React, { useState, Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from "./components/shared/AutoDismissAlert/AutoDismissAlert";
import Header from "./components/shared/Header";
import RequireAuth from "./components/shared/RequireAuth";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import ChangePassword from "./components/auth/ChangePassword";
import PetDetailScreen from "./screens/PetDetailScreen";
import SitterDetail from "./screens/SitterDetail";
import PetScreen from "./screens/PetScreen";
import Footer from "./components/Footer";
import CreateReview from "./components/CreateReview";
import MyBookingScreen from "./screens/MyBookingScreen";
import UserReviewScreen from "./screens/UserReviewScreen";
import HostAPetScreen from "./screens/HostAPetScreen"
import { fetchNoAuth } from "./api/fetch";
import ContactScreen from "./screens/ContactScreen";
import MessagesScreen from "./screens/MessagesScreen";

const App = () => {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [sitters, setSitters] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const clearUser = () => {
    console.log("clear user ran");
    setUser(null);
  };
  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id);
    });
  };

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid();
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }];
    });
  };

  useEffect(() => {
    try {
      fetchNoAuth("sitters", setSitters, "sitters");
    } catch (error) {
      console.log(error);
    }
  }, [trigger]);

  return (
    <Fragment>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen msgAlert={msgAlert} sitters={sitters} user={user} />}/>
        <Route path="/profile" element={<ProfileScreen user={user} />} />
        <Route path="/sign-up" element={<SignUp msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/sign-in" element={<SignIn msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/pets" element={<PetScreen user={user} />}/>
        <Route path="/pets/:id" element={<PetDetailScreen  user={user} />}/>
        <Route path="/sign-out" element={<RequireAuth user={user}><SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /></RequireAuth>}/>
        <Route path="/change-password" element={<RequireAuth user={user}><ChangePassword msgAlert={msgAlert} user={user} /></RequireAuth>}/>
        <Route path="/sitterlisting/:id" element={<SitterDetail user={user}/>}    />
        <Route path="/sitterlisting/:id" element={<CreateReview user={user}/>}    />
        <Route path='/mybookings' element={<MyBookingScreen user={user} />} />
        <Route path='/myreviews' element={<UserReviewScreen  user={user} /> } />
        <Route path='/hostapet' element={<HostAPetScreen setTrigger={setTrigger}  user={user} /> } />
        <Route path='/contact/:id' element={<ContactScreen  user={user} /> } />
        <Route path='/messages/' element={<MessagesScreen  user={user} /> } />
      </Routes>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <Footer/>
    </Fragment>
  )
}

export default App;
