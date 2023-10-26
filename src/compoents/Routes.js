import React, { useEffect, useState } from 'react'
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import SignInSide from '../pages/login/login';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../layouts/theme';
import SignUpSide from '../pages/signup/signUp';
import Dashboard from '../pages/dashboard/dashboard';
import MainProfile from '../pages/profile/profile';
import ProfilesList from '../pages/list/profilesList';


const Routes = () => {
  
//   const navigate = useNavigate();
//   const [hasCheckedToken, setHasCheckedToken] = useState(false);
//   const [tokenExists, setTokenExists] = useState(false);

//   useEffect(() => {
//     const tokenInCookie = Boolean(Cookies.get("cak_dashboard"));
//     setTokenExists(tokenInCookie);
//     setHasCheckedToken(true);
//     const publicPaths = ["/", "/change-password", "/forgot-password"];
//     if (tokenInCookie && publicPaths.includes(window.location.pathname)) {
//       navigate("/dashboard");
//     } else if (
//       !tokenInCookie &&
//       !publicPaths.includes(window.location.pathname)
//     ) {
//       navigate("/"); 
//     }
//   }, [navigate]);

//   if (!hasCheckedToken) return null;
  return (
    // <Router>
      // <AxiosInterceptorNavigate />
      <>
        <Switch>
          <Route exact path="/" element={
              <ThemeProvider theme={theme}>
              <SignInSide />
            </ThemeProvider>
          } />
             <Route exact path="/SignUp" element={
              <ThemeProvider theme={theme}>
              <SignUpSide />
            </ThemeProvider>
          } />
            <Route exact path="/dashboard" element={
                <Dashboard/>
          } />
          <Route exact path="/ProfilePage" element={
                <MainProfile/>
          } />
                    <Route exact path="/ProfileLists" element={
                <ProfilesList/>
          } />
          {/* <Route exact path="/forgetPassword" element={<Forget />} />
          <Route exact path="/changePassword" element={<ChangePassword />} /> */}

        </Switch>
      </>
    // </Router>
  )
}

export default Routes