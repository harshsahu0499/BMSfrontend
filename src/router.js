import React, { useContext }  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import AdminSignUp from './pages/SignUpAdmin';
import SubmitReport from './pages/SubmitReport'
import Notification from './pages/Notification'
import CreateNotification from './pages/CreateNotification'
import ViewReportUser from './pages/ViewReportUser'


import { Nav, Navbar } from "react-bootstrap";
import classes from "./components/shared/Header.module.css";
import logo from "./components/shared/logo-building.jpg";
import Header from "../src/components/shared/Header"
import Footer from "../src/components/shared/Footer"

import Default from './layout/Default';
import AdminLayout from './layout/AdminLayout'

const Router = () => {
  return (

    <BrowserRouter>
    <Header />

        <Routes>
                    <Route exact path="/" render={(props) => <Login {...props} />}  element={<Default>
                    <Login />
                    </Default>}/>
                    <Route exact path="/notification" component={Notification} element={ <Default privated={true}>
                                                                                                                <Notification />
                                                                                                              </Default> }/>


                    <Route path="/logout" element={<Default>
                      <Logout />
                    </Default>} />
                    <Route path="/SignUp" element={<Default>
                       <SignUp />
                    </Default>} />
                    <Route path="/viewreportuser" element={ <Default>
                                                       <ViewReportUser />
                                                     </Default> } />
                     <Route path="/submitreport" element={ <Default>
                                  <SubmitReport />
                                </Default> } />



                </Routes>

        <Routes>
                            <Route exact path="/adminlogin" render={(props) => <AdminLogin {...props} />}  element={<AdminLayout>
                            <AdminLogin />
                            </AdminLayout>}/>

                            <Route path="/logout" element={<AdminLayout>
                              <Logout />
                            </AdminLayout>} />
                            <Route path="/signupadmin" element={<AdminLayout>
                               <AdminSignUp />
                            </AdminLayout>} />

                            <Route path="/createnotification" element={ <AdminLayout>
                                                              <CreateNotification />
                                                            </AdminLayout> } />



                        </Routes>




       <Footer />
    </BrowserRouter>
  )
}

export default Router;
