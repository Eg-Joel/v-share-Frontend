import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import NotificationItem from "../NotificationItem/NotificationItem";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";


const Notifications = () => {

    const userDetails = useSelector((state) => state.user)
    let user = userDetails.user
    const accesstoken = user?.accessToken
    const token = accesstoken
    const config = {
        headers: { token: ` ${token}` }
    }
    const [notifications, setNotifications] = useState([]);

    const getNotifications = async () => {
        try {
            const { data } = await axios.get(`user/notifications`, config)

            setNotifications(data);
        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getNotifications()
    }, [])


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
                    <Typography variant="h6" component="h1" >
                        Notifications
                    </Typography>
                </Box>
                <Box>
                    <Box >
                        <Box sx={{
                            width: "90%", margin: "1rem", maxHeight: "80vh",
                            overflowY: "scroll",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                            {notifications.map((item, i) => {
                                return (
                                    <>
                                        <NotificationItem key={i} notification={item} />
                                        <Divider />
                                    </>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default Notifications