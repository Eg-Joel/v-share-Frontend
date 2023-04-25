import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProfileLeftbar from '../../components/ProfileLeftContainer copy/ProfileLeftbar'
import ProfileRightbar from '../../components/ProfileRightcontainer copy/ProfileRightbar'
import FollowerL from '../../components/FollowersLi/FollowerL'

function FollowersL() {
  return (
    <div className='profileContainer'>
    <Navbar />
    <div className='subProfileContainer'>
    <div className='subCop'>
        <ProfileLeftbar/>
     <FollowerL/>
        <ProfileRightbar/>
        </div>
    </div>
  </div>
  )
}

export default FollowersL