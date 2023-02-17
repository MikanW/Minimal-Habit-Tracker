import React, { useState, useEffect } from 'react'
import './App.css'

import { Button, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/plugin/updateLocale';
import locale from 'antd/locale/zh_CN';
import moment from 'moment';

import './App.css';
import Greeting from './components/Greeting';
import MyNavigation from './components/MyNavigation';
import { Pages } from './components/types';
import PageView from './components/PageView';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [pageView, setPageView] = useState(Pages.today);
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(() => {
      }).catch((error) => {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
  }

  const signOut = () => {
   auth.signOut();
  };

  const SignInBtn = (
    <Button
      size='large'
      onClick={signInWithGoogle}
    >
      SignIn
    </Button>
  );

  const SignOutBtn = (
    <Button
    size='large'
    onClick={signOut}
    className='signInBtn'
  >
    SignOut
  </Button>
);
  
  if (user) {
    
    return(
      <div className="App">
      <div className="appBody">
        <ConfigProvider locale={locale}>
  
        <div className='dashboard'>
        <div className='header'>
          <Greeting userName='Mikan' photoUrl={user.photoURL}/>
          {SignOutBtn}
        </div>
  
        
        <MyNavigation
          setPageView={setPageView}
        />
        <PageView
          type={pageView}
        />
      </div>
  
        </ConfigProvider>
      </div>
    </div>
    )

  }
  else {
    return SignInBtn;
  }

}


export default App
