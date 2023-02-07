import React from 'react'
import Name from '../Components/Name/Name'
import Summery from '../Components/Summery/Summery'
import TypingBox from '../Components/TypingBox/TypingBox'
import style from "./Home.module.css"

function Home() {
  return (
    <div className={style.home}>
        <Name/>
        <TypingBox/>
        <Summery/>
    </div>
  )
}

export default Home