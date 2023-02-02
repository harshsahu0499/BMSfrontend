import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { getMe } from '../services/auth';
import {setAuth} from '../slices/authSlice';
import "../styles/Default.css";

//const Default = ({children, privated=false}) => {
//  let dispatch = useDispatch()
//  let navigate = useNavigate()
//  const {isAuth} = useSelector((state) => state.auth);
//
//  useEffect(() => {
//    const getData = async () => {
//      let token = localStorage.getItem('token');
//      const res = await getMe(token);
//      console.log(res)
//
//      if (res.status && res.status !== 503) {
//        dispatch(setAuth({
//          user: res.data,
//          token: token
//        }))
//      }
//
//      console.log(privated, isAuth)
//
//      if (privated && !isAuth) {
//        navigate('/login')
//      }
//    };
//
//    getData();
//  }, []);

const Default = ({children, privated=false}) => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const {isAuth} = useSelector((state) => state.auth);

  useEffect(() => {
    const getData = async () => {
      let token = localStorage.getItem('token');
      const res = await getMe(token);
      console.log(res)

      if (res.status && res.status !== 503) {
        dispatch(setAuth({
          user: res.data,
          token: token
        }))
      }

      console.log(privated, isAuth)

      if (privated && !isAuth) {
        navigate('/')
      }
    };

    getData();
  }, []);

  return (
    <div id="default" class="cent">
      <nav>
          <button class="button" ><Link to="/">User Login</Link></button>
           <button class="button" ><Link to="/notifications">View Notifications</Link></button>
            <button class="button" ><Link to="/submitreport">Submit Report</Link></button>
           <button class="button" ><Link to="/viewreportuser">View Reports</Link></button>
          <br></br>
          <br></br>

      </nav>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Default;
