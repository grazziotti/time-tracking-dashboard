import { useEffect, useState } from 'react'

import { ProfileCard } from './components/ProfileCard'
import { CardList } from './components/CardList'

import dataJson from'./data/data.json'
import { dataType } from './types/dataType'
import { timeframeType } from './types/timeframeType'

import './App.scss'

const App = () => { 
  const [data, setData] = useState<dataType[]>([])
  const localStorageActiveTimeframe = localStorage.getItem('activeTimeframe')
  const activeTimeframeInitialState = 
    localStorageActiveTimeframe !== undefined 
    && localStorageActiveTimeframe === 'daily' 
    || localStorageActiveTimeframe === 'weekly' 
    || localStorageActiveTimeframe === 'monthly'
    ? localStorageActiveTimeframe
    : 'weekly'
  const [activeTimeframe, setActiveTimeframe] = useState<timeframeType>(activeTimeframeInitialState)

  const handleTimeframeChange = (activeTimeframe: timeframeType) => {
    setActiveTimeframe(activeTimeframe)
    localStorage.setItem('activeTimeframe', activeTimeframe)
  }

  useEffect(() => {
    setData(dataJson)
  }, [])
  
  return (
    <div className="container">
      <div className="content">
        <ProfileCard activeTimeframe={activeTimeframe} onTimeframeChange={handleTimeframeChange} />
        <CardList data={data} activeTimeframe={activeTimeframe} />
      </div>
    </div>
  )
}

export default App
