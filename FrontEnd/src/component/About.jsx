import React from 'react'

import './About.css'
import {motion} from 'framer-motion'

const About = () => {
  const transition={duration:3,type:'spring'}
  return (
    <div className='about' id='About'>
        <motion.div 
        initial={{left:'-50%'}}
        whileInView={{left:'15%'}}        
        transition={{duration:1,type:'spring'}}
        className='a-left'>
            <img src="https://assets.weforum.org/sf_account/image/hcp58FIao9mW04d_2-SFQ30rVe2UQkUcRNtjejWil_A.jpg" alt="" srcet="" />
            
        </motion.div>
        <div className='a-right'>
          <motion.div
          initial={{right:'-10%'}}
          whileInView={{right:'0%'}}        
          transition={transition}
           className='a-r'>
            
            <span>Susan Wojcicki</span>
            <span>CEO <span style={{color:'var(--blue)'}}>of Youtube</span> </span>
            <span>
            Launching Google AdWords and Google Images: As Google's first marketing manager, Wojcicki played a key role in the launch of Google AdWords, the company's flagship advertising platform, and Google Images, one of the most widely used image search engines on the web. As CEO of YouTube, Wojcicki has overseen the platform's growth into one of the largest and most influential websites on the internet. Under her leadership, YouTube has expanded its user base, increased engagement, and launched several new initiatives to promote diversity and inclusion. Wojcicki has been a vocal advocate for gender equality in the tech industry. She has spoken out against the lack of women in leadership positions and has worked to promote initiatives that support women in tech, such as the YouTube Women's Initiative. Wojcicki and her husband have donated millions of dollars to charitable causes, such as education and women's health. They have also supported several non-profit organizations, including Room to Read, the World Wildlife Fund, and the Wikimedia Foundation. Wojcicki has received numerous awards and honors throughout her career, including being named to Forbes' list of the World's 100 Most Powerful Women and Time magazine's list of the 100 most influential people in the world. She has also been inducted into the American Academy of Arts and Sciences and the National Academy of Engineering.
            </span>
          </motion.div>
          
        </div>
    </div>
  )
}

export default About