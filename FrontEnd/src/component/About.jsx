import React, { useEffect, useState } from 'react'

import './About.css'
import {motion} from 'framer-motion'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const About = () => {

  const transition={duration:3,type:'spring'};

  const [details,setDetails]=useState({});
  const params=useParams()
  console.log("params value :"+params.searchInput);
  const searchInput=params.searchInput;

  useEffect(()=>{
    const url=`http://localhost:5001/api/data/women/${searchInput}`
    console.log(url);
    axios.get(url)
    .then((res)=>{
      setDetails(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
    })
  },[searchInput])
  console.log(details);
  return (
          <div className='about' id='About'>
              
                  <motion.div 
                  initial={{left:'-50%'}}
                  whileInView={{left:'15%'}}        
                  transition={{duration:1,type:'spring'}}
                  className='a-left'>
                      <img src={details.img} alt="" srcet="" />
                      
                  </motion.div>
                  <div className='a-right'>
                    <motion.div
                    initial={{right:'-10%'}}
                    whileInView={{right:'0%'}}        
                    transition={transition}
                    className='a-r'>
                      
                      <span>{details.name}</span>
                      <span>{details.rol}</span>
                      <span>
                      {details.desc}
                      </span>
                    </motion.div>
                    
                  </div>
            </div> 
        )
     }



export default About