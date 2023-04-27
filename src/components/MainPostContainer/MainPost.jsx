import axios from '../../utils/axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Content from '../ContentPostContainer/Content'
import Post from '../PostContainer/Post'
import "./mainpost.css"
import InfiniteScroll from 'react-infinite-scroll-component'




function MainPost() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  let id = user?.other?._id;
  
  const accesstoken =  user.accessToken
  
  const [post,setPost] = useState([])
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
   const getPost = async ()=>{
    try {
      
      const res = await axios.get(`user/followerpost/${id}?page=${page}&limit=10`,{
      headers:{
        token:accesstoken
      },
     
    })
   
    const newPosts = res.data.posts.filter((post) => !post.isDeleted);
    return { results: newPosts, nextPage: page + 1, totalPages: res.data.totalPages };
    // setPost(newPosts);
    
    // setTotalPages(res.data.totalPages);
  } catch (error) {
    
    console.error(error);
    return { results: [], nextPage: null, totalPages: 0 };
    }
   }
   useEffect(() => {
    getPost(page).then((res) => {
      setPost(prevPosts => [...prevPosts, ...res.results]);
      setTotalPages(res.totalPages);
    });
  }, [page])
  
  
  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  
  return (
    <div className='mainpost'>
      <Content/>
      <InfiniteScroll
        dataLength={post.length}
        next={handleLoadMore}
        hasMore={page < totalPages}
        loader={<h4>Loading...</h4>}
      >
      {post.map((item, index) => {
  
  
      
     return   <Post post={item} key={index}/>
  
   
 
})} 
</InfiniteScroll>
  
       </div>
  )
}

export default MainPost