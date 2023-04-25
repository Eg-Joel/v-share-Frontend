import React, { useEffect, useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
    Divider,
    List,
    ListItem,
    ListItemButton,
    Stack,
    Typography
} from '@mui/material'
import axios from '../../utils/axios'
import { Link, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { setUserss } from '../ReduxContainer/useReducer';

function FollowingList() {
    const userDetails = useSelector((state)=>state.user);
    const currentUser= userDetails.user
    
    const accesstoken = currentUser?.accessToken
    const config = {
        headers: { token: ` ${accesstoken}` }
      }
      const dispatch = useDispatch();
 
    let ids = useParams()
    let id= ids.id

    
      const [followingUser, SetFollowingUser] = useState([])

      useEffect(() => {
        const getFollowing = async () => {
          try {
            const res = await axios.get(`post/followingss/${id}`, config)
            SetFollowingUser(res.data.followingList)
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        }
        getFollowing()
      }, [id, ])
      
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
  return (
    <Box flex={4}>
    <Card sx={{
        boxShadow: `-1px 6px 5px 3px rgba(0,0,0,0.25)`,
        height: "90vh",
        width: "98%"
    }} >
        
        <Box >
            <Stack direction="row" justifyContent="flex-start">
              
                {
                  
                    <Box sx={{
                        width: "100%", margin: "1rem", maxHeight: "80vh",
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }}> 
                        {
                            followingUser.map((item, index) => (
                                <Link to={ `/Profile/${item._id}` }  key={index} >
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
    <Box marginTop="1rem" minWidth="max-content">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Avatar src={item?.profile} sx={{width:50, height:50}} />
            <Typography variant='span' margin={1}>
                {item?.username}
            </Typography>
        </Stack>
    </Box>
    <Box sx={{ marginTop: "1rem" }} >
        {
            currentUser.other?.following.includes(item._id)   ?


            <LoadingButton
            size="small"
            fullWidth
            onClick={()=>handleUnFollow(item._id)}
            
            variant="contained"
        >
            <span>Unfollow</span>
        </LoadingButton> :
                <LoadingButton
                    size="small"
                    fullWidth
                    onClick={()=>handleFollow(item?._id)}
                    
                    variant="contained"
                >
                    <span>Follow</span>
                </LoadingButton> 
               
        }
        
    </Box>
</Stack>
                              </Link>
                            ))
                        }
                    </Box>
                }
            </Stack>
        </Box>
    </Card>
</Box>
  )
}

export default FollowingList