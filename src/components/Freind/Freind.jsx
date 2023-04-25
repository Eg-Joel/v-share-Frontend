import React,{ useEffect, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import axios from '../../utils/axios'
import { useDispatch, useSelector } from 'react-redux';
import { setUserss } from '../ReduxContainer/useReducer';

function Freind(userId, value) {
    const [loading, setLoading] = useState(false);
    const [friend, setFriend] = useState({});
    const userDetails = useSelector((state)=>state.user);
    let user = userDetails?.user
    const accesstoken =  user.accessToken
    const dispatch = useDispatch();
    const config = {
        headers: { token: ` ${accesstoken}` }
      }
    
let id= userId.userId
    
const handleFollow = async (friendId)=>{
    try {
      const data = await axios.put(`user/follow`,{friendId},config)
      const userDet = data.data.updatedUser
     
      dispatch(setUserss(  userDet ))
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleUnFollow = async (friendId)=>{
    try {
      const data = await axios.put(`user/Unfollow`,{friendId},config)
      const userDet = data.data.updatedUser
     
      dispatch(setUserss(  userDet ))
     
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const getusers = async () => {
      try {
        const res = await axios.get(`user/post/user/details/${id}`)
        console.log(res,"ggg");
        setFriend(res.data)
        
      } catch (error) {
        console.log("some error occured");
      }
    }
    getusers()
  }, [])
 
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
    <Box marginTop="1rem" minWidth="max-content">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Avatar src={friend?.profile} sx={{width:50, height:50}} />
            <Typography variant='span' margin={1}>
                {friend?.username}
            </Typography>
        </Stack>
    </Box>
    <Box sx={{ marginTop: "1rem" }} >
        {
            value === "followers" ?
                <LoadingButton
                    size="small"
                    fullWidth
                    onClick={()=>handleFollow(friend?._id)}
                    loading={loading}
                    variant="contained"
                >
                    <span>Follow</span>
                </LoadingButton> :
                <LoadingButton
                    size="small"
                    fullWidth
                    onClick={()=>handleUnFollow(friend._id)}
                    loading={loading}
                    variant="contained"
                >
                    <span>Unfollow</span>
                </LoadingButton>
        }
        
    </Box>
</Stack>
  )
}

export default Freind