import "./app.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import EditProfile from "./components/pages/editProfile/EditProfile";
import Feed from "./components/feed/Feed";
import Reels from "./components/pages/reels/Reels";
import { useUserContext } from "./context/UserContext";
import { UserContextProvider } from "./context/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";
import WatchPage from "./components/pages/watch/WatchPage";
import FriendsPage from "./components/pages/friendsPage/FriendsPage";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../src/app/userSlice";
import { auth } from "./components/auth/firebase";

const fakeAuth = {
  isAuthenticated: false, // Set this to true when the user is authenticated
  login(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // Simulate an asynchronous login process
  },
  logout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100); // Simulate an asynchronous logout process
  },
};

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
  },[isAuthenticated])
  console.log(isAuthenticated)
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setIsAuthenticated(true)
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        setIsAuthenticated(false)
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);



  return (
    <UserContextProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/" replace /> : <Login />
              }
            />
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuthenticated ? <Home /> : <Register />}
            />
            <Route
              path="/reels"
              element={isAuthenticated ? <Reels /> : <Login />}
            />
            <Route
              path="/watch"
              element={isAuthenticated ? <WatchPage /> : <Login />}
            />
            <Route
              path="/friends"
              element={isAuthenticated ? <FriendsPage /> : <Login />}
            />
            <Route
              path="/watch"
              element={isAuthenticated ? <WatchPage /> : <Login />}
            />
            <Route path="/profile">
              <Route
                path=":userId"
                element={isAuthenticated ? <Profile /> : <Login />}
              />
              <Route
                path=":userId/edit"
                element={isAuthenticated ? <EditProfile /> : <Login />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
