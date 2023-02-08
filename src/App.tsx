import React, { useState, useEffect} from 'react'
import './App.css'

import { ConfigProvider } from 'antd';
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

function App() {
  const [pageView, setPageView] = useState(Pages.today);

  return (
    <div className="App">
      <div className="appBody">
        <ConfigProvider locale={locale}>
          
          <Greeting userName='Mikan'/>

          <MyNavigation
            setPageView={setPageView}
          />

          <PageView
            type={pageView}
          />

        </ConfigProvider>
      </div>
      
    </div>
  )
}

export default App
