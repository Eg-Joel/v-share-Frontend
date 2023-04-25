import React from 'react'
import './Following.css'
import Navbar from '../../components/Navbar/Navbar'
import ProfileLeftbar from '../../components/ProfileLeftContainer copy/ProfileLeftbar'
import ProfileRightbar from '../../components/ProfileRightcontainer copy/ProfileRightbar'
import FollowingList from '../../components/Following/FollowingList'


function Following() {
  return (
    <div className='profileContainer'>
      <Navbar />
      <div className='subProfileContainer'>
      <div className='subCop'>
          <ProfileLeftbar/>
       <FollowingList/>
          <ProfileRightbar/>
          </div>
      </div>
    </div>
  )
}

export default Following