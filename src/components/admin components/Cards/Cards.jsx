import React, { useEffect, useState } from 'react'
import {
  
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  
} from "@iconscout/react-unicons";
import Card from '../Card/Card'
import './Cards.css'
import { useSelector } from 'react-redux';
import axios from '../../../utils/axios'
const Cards = () => {

  const adminDetails = useSelector((state)=>state.admin)
    
  // const token= adminDetails.admin.accessToken
  
  // const config = {
  //     headers: { token: ` ${token}` }
  // }
  const [userCount, setUserCount] = useState('');
  const [postCount, setPostCount] = useState('')
  // useEffect(()=>{

  //   const getUsers = async () => {
  //       try {
            
  //           const response =await axios.get(`admin/getamount`)
           
  //           const res=response
  //           console.log(res);
            
  //            setUserCount(res.userCount)
  //            setPostCount(res.postCountCount)
  //       } catch (error) {
  //           console.error(error);
  //         }
  //       };
  //       getUsers()
  //   },[])
const  cardsData = [
    {
      title: "user",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: 15,
      png: UilUsersAlt,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Posts",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: 19,
      png: UilPackage,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  return (
    <div className='Cards'>
        {cardsData.map((card,id)=>{
            return(
                <div className="parentContainer" key={id}>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards