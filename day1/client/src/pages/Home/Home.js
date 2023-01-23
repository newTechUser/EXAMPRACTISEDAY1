import React from 'react'
import Header from '../../components/Header/Header'
import Ourteachers from '../../components/Ourteachers/Ourteachers'
import Section2 from '../../components/Section2/Section2'
import Messageus from '../Messageus/Messageus'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <Section2/>
        <Ourteachers/>
        <Messageus/>
    </div>
  )
}

export default Home