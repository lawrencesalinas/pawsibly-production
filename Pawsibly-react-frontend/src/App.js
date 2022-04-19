import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { v4 as uuid } from "uuid";
import { SitterProvider } from "./context/sitter/SitterContext";
import { UserProvider } from "./context/user/UserContext";
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
import MyBookingScreen from "./screens/MyBookingScreen";
import UserReviewScreen from "./screens/UserReviewScreen";
import HostAPetScreen from "./screens/HostAPetScreen"
import ContactScreen from "./screens/ContactScreen";
import SearchPage from "./screens/SearchPage";
import EditListingScreen from "./screens/EditListingScreen";


const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([]);

  const clearUser = () => {
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


  return (
    
    <UserProvider>
    <SitterProvider>
      <Header user={user} />
      <main className="py-1">
      <Container>
      <Routes>
        <Route path="/" element={<HomeScreen msgAlert={msgAlert}  user={user} />}/>
        <Route path="/sign-up" element={<SignUp msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/sign-in" element={<SignIn msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path='/searchpage/:url' element={<SearchPage  user={user} /> } />
        <Route path="/sitterlisting/:id" element={<SitterDetail user={user}/>}    />
        <Route path='/contact/:id' element={<ContactScreen  user={user} />}/>

        {/* user routes */}
        <Route path="/profile" element={<RequireAuth user={user}><ProfileScreen user={user} /></RequireAuth>}/>
        <Route path="/pets" element={<RequireAuth user={user}><PetScreen user={user} /></RequireAuth>}/>
        <Route path="/pets/:id" element={<RequireAuth user={user}><PetDetailScreen  user={user} /></RequireAuth>}/>
        <Route path="/sign-out" element={<RequireAuth user={user}><SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /></RequireAuth>}/>
        <Route path="/change-password" element={<RequireAuth user={user}><ChangePassword msgAlert={msgAlert} user={user} /></RequireAuth>}/>
        <Route path='/mybookings' element={<RequireAuth user={user}><MyBookingScreen user={user} /></RequireAuth>}/>
        <Route path='/myreviews' element={<RequireAuth user={user}><UserReviewScreen  user={user} /></RequireAuth>}/>
        <Route path='/hostapet' element={<RequireAuth user={user}><HostAPetScreen  user={user} /></RequireAuth>}/>
        <Route path='/editlisting/' element={<RequireAuth user={user}><EditListingScreen user={user} /></RequireAuth>}/>


      </Routes>

      </Container>
      </main>
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
    </UserProvider>
  )
}

export default App;
