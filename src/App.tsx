import { useEffect, useState } from 'react'

import { ProfileCard } from './components/ProfileCard'

import d from'./data/data.json'
import { dataType } from './types/dataType'

import './App.scss'

const App = () => {
  const [data, setData] = useState<dataType[]>()

  useEffect(() => {
    setData(d)
  }, [])

  return (
    <div className="container">
      <ProfileCard />
    </div>
  )
}

export default App
