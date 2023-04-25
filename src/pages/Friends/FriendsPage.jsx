import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

import FollowerList from '../../components/FollowersList/FollowerList'
import Leftbar from '../../components/leftContainer/Leftbar'
import Rightbar from '../../components/Rightcontainer/Rightbar'


function Followers() {
  return (
    <div><div className='home'>
      
    <Navbar/>
    <div className='componentContainers'>
      <div className='subCop'>
      <Leftbar/>
      
        <FollowerList/>
        <Rightbar/>
      </div>
      
    </div>
  </div></div>
  )
}

export default Followers