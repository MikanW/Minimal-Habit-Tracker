import React, { useState, useEffect} from 'react'
import './App.css'

import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/plugin/updateLocale';
import locale from 'antd/locale/zh_CN';
import moment from 'moment';

// import CurrentTime from './Components/CurrentTime';
// import MyNavigation from './Components/MyNavigation';
// import DataViewerWithType from './Components/DataViewer';

import './App.css';
import './components/types'
import Greeting from './components/Greeting';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="appBody">
        <ConfigProvider locale={locale}>
          <Greeting userName='Mikan'/>
        </ConfigProvider>
      </div>
      
    </div>
  )
}

export default App
