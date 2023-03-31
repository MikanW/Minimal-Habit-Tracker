import { useState } from 'react'
import './App.css'
import { Button, ConfigProvider } from 'antd';
import 'dayjs/locale/zh-cn';
import 'dayjs/plugin/updateLocale';
import locale from 'antd/locale/zh_CN';
import Greeting from './components/Greeting';
import MyNavigation from './components/MyNavigation';
import { Pages } from './components/types';
import PageView from './components/PageView';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserIdContext } from './Data/context';



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

    return (
      <ConfigProvider locale={locale} >
        <UserIdContext.Provider value={user.uid} >
          <div className="App">
            <div className="appBody">
              <div className='dashboard'>
                <div className='header'>
                  <Greeting userName='Mikan' photoUrl={user.photoURL} />
                  <MyNavigation
                  setPageView={setPageView}
                />
                  {SignOutBtn}
                </div>
                <PageView
                  type={pageView}
                />
              </div>

            </div>
          </div>
        </UserIdContext.Provider>
      </ConfigProvider>
    )

  }
  else {
    return SignInBtn;
  }

}


export default App
