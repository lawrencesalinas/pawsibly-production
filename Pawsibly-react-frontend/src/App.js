import React, { useState, Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import axios from "axios";
import apiUrl from "./apiConfig";
import { SitterProvider } from "./context/sitter/SitterContext";

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
import Footer from "./components/shared/Footer";
import CreateReview from "./components/CreateReview";
import MyBookingScreen from "./screens/MyBookingScreen";
import UserReviewScreen from "./screens/UserReviewScreen";
import HostAPetScreen from "./screens/HostAPetScreen"
import ContactScreen from "./screens/ContactScreen";
import MessagesScreen from "./screens/MessagesScreen";
import SearchResult from "./components/SearchResult";
import SearchPage from "./screens/SearchPage";
import UserListingScreen from "./screens/UserListingScreen";
import { fetchWithAuth } from "./api/fetch";
import EditListingScreen from "./screens/EditListingScreen";

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [sitters, setSitters] = useState([]);
  const [trigger, setTrigger] = useState(false)
  const [userData, setUserData] =useState ([])
  const [userTrigger, setUserTrigger] = useState(false)
  const [postId, setPostId]= useState('')

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
  async function fetchData() {
    try {
      const { data } = await axios.get(`${apiUrl}/profile`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log('apicall',data);
      setUserData(data.user)
      console.log(userData);
      setPostId(userData.post_owned?userData.post_owned.map(data=>{
return data[0].id
      }):postId)
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, [user, userTrigger]);


  return (
    <SitterProvider>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen msgAlert={msgAlert}  user={user} />}/>
        <Route path="/sign-up" element={<SignUp msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/sign-in" element={<SignIn msgAlert={msgAlert} userTrigger={userTrigger} setUser={setUser} />}/>
        <Route path='/searchpage/:url' element={<SearchPage  user={user} /> } />
        <Route path="/sitterlisting/:id" element={<SitterDetail user={user}/>}    />
        <Route path="/sitterlisting/:id" element={<CreateReview user={user}/>}    />

        {/* user routes */}
        <Route path="/profile" element={<RequireAuth user={user}><ProfileScreen user={user} /></RequireAuth>}/>
        <Route path="/pets" element={<RequireAuth user={user}><PetScreen user={user} /></RequireAuth>}/>
        <Route path="/pets/:id" element={<RequireAuth user={user}><PetDetailScreen  user={user} /></RequireAuth>}/>
        <Route path="/sign-out" element={<RequireAuth user={user}><SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /></RequireAuth>}/>
        <Route path="/change-password" element={<RequireAuth user={user}><ChangePassword msgAlert={msgAlert} user={user} /></RequireAuth>}/>
        <Route path='/mybookings' element={<RequireAuth user={user}><MyBookingScreen user={user} /></RequireAuth>}/>
        <Route path='/myreviews' element={<RequireAuth user={user}><UserReviewScreen  user={user} /></RequireAuth>}/>

        <Route path='/hostapet' element={<RequireAuth user={user}><HostAPetScreen userData={userData} id={postId} setUserTrigger={setUserTrigger}  setTrigger={setTrigger} user={user} /></RequireAuth>}/>
        <Route path='/mylisting/'element={<RequireAuth user={user}><UserListingScreen  setUserTrigger={setUserTrigger}  setTrigger={setTrigger} userData={userData}user={user} /></RequireAuth>}/>
        <Route path='/contact/:id' element={<RequireAuth user={user}><ContactScreen  user={user} /></RequireAuth>}/>
        <Route path='/editlisting/' element={<RequireAuth user={user}><EditListingScreen setUserTrigger={setUserTrigger}  setTrigger={setTrigger} userData={userData}user={user} /></RequireAuth>}/>

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
    </SitterProvider>
  )
}

export default App;
