import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { getMe } from '../services/auth';
import {setAuth} from '../slices/authSlice';

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
        navigate('/login')
      }
    };

    getData();
  }, []);

  return (
    <div id="default">
      <nav>
          <Link to="/"> &nbsp;&nbsp; Login &nbsp;&nbsp;  |  </Link>
          <Link to="/signup"> &nbsp;&nbsp; SignUp &nbsp;&nbsp; |  </Link>
          <Link to="/submitreport"> &nbsp;&nbsp; Submit Report &nbsp;&nbsp; |  </Link>
          <Link to="/notifications"> &nbsp;&nbsp; Notifications &nbsp;&nbsp; | </Link>
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
