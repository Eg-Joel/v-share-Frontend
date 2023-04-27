import React, { useState } from 'react'
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
import { useSelector } from 'react-redux';
import Friend from '../Freind/Freind';

function FollowerList() {

    const userDetails = useSelector((state) => state.user);
    let user = userDetails?.user.other

    const [open, setOpen] = useState(true);
    
    return (
        <Box flex={4}>
            <Card sx={{
                boxShadow: `-1px 6px 5px 3px rgba(0,0,0,0.25)`,
                height: "85vh",
                width: "85%",
                marginTop: "20px",
                marginLeft: "30px"
            }} >
                <Box sx={{
                    textAlign: "center"
                }}>

                    <List >
                        <Stack direction="row">
                            <ListItem sx={{ justifyContent: "center" }} disablePadding>
                                <ListItemButton onClick={() => setOpen(true)}
                                 sx={{ 
                                    backgroundColor: open ? 'rgb(194, 222, 246)' : 'inherit',
                                    borderRadius: open ? '10px' : '0'
                                }}
                                >
                                    <Typography variant='h6'>
                                        Followers
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ justifyContent: "center" }} disablePadding>
                                <ListItemButton onClick={() => setOpen(false)}
                                 sx={{ 
                                    backgroundColor: !open ? 'rgb(194, 222, 246)' : 'inherit',
                                    borderRadius: !open ? '10px' : '0'
                                }}
                                >
                                    <Typography variant='h6'>
                                        Followings
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        </Stack>
                    </List>
                </Box>
                <Box >
                    <Stack direction="row" justifyContent="flex-start">
                        {
                            open &&
                            <Box sx={{
                                width: "65%", margin: "1rem", maxHeight: "80vh",
                                overflowY: "scroll",
                                "&::-webkit-scrollbar": {
                                    display: "none"
                                }
                            }}>
                                {
                                    user?.followers.map((userId, i) => (
                                        <Friend key={i} userId={userId} value="followers" />
                                    ))
                                }
                            </Box>
                        }
                        {
                            !open &&
                            <Box sx={{
                                width: "65%", margin: "1rem", maxHeight: "80vh",
                                overflowY: "scroll",
                                "&::-webkit-scrollbar": {
                                    display: "none"
                                }
                            }}>
                                {
                                    user?.following.map((userId, i) => (
                                        <Friend key={i} userId={userId} value="followings" />
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

export default FollowerList