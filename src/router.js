import React, { useContext }  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import SubmitReport from './pages/SubmitReport'


import { Nav, Navbar } from "react-bootstrap";
import classes from "./components/shared/Header.module.css";
import logo from "./components/shared/logo-building.jpg";
import Header from "../src/components/shared/Header"
import Footer from "../src/components/shared/Footer"

import Default from './layout/Default';

const Router = () => {
  return (

    <BrowserRouter>
    <Header />
        <Routes>
            <Route exact path="/" render={(props) => <Login {...props} />}  element={<Default>
            <Login />
            </Default>}/>
            <Route exact path="/reports" component={SubmitReport} element={ <Default>
                                                                                            <Home />
                                                                                          </Default> }/>

            <Route path="/logout" element={<Default>
              <Logout />
            </Default>} />
            <Route path="/SignUp" element={<Default>
               <SignUp />
            </Default>} />

             <Route path="/submitreport" element={ <Default>
                          <SubmitReport />
                        </Default> } />

        </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default Router;
