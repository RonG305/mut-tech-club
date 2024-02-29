import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {motion} from 'framer-motion'



const Team = () => {


    const variants = {
        hidden: {opacity: 0, y:200},
        visible: {opacity: 1, y:0}
    }

    const TeamLeaders = [
            {
                imageUrl: './oselu.jpeg',
                leaderTitle: "  Michael Oselu:",
                leaderIntro: ' Our Chairman and Mobile App Development Leader',
                description: "At the helm of MUT Tech Club stands Michael Oselu, a visionary leader who wears multiple hats with grace. Serving as both Chairman and Mobile App Development Leader, Michael brings strategic direction and technical prowess to our endeavors. Join us as we embark on innovative journeys under his guidance."
            },

            {
                imageUrl: './ivy.jpg',
                leaderTitle: "  Ivy Nyambura:",
                leaderIntro: ' Our Blockchain/Cybersecurity Leader and MUT Tech Club Secretary',
                description: "Ivy Nyambura is the driving force behind our Blockchain and Cybersecurity initiatives. As our dedicated leader in these critical fields, Ivy ensures our club remains at the forefront of technological security. Additionally, Ivy serves as the efficient and organized Secretary, keeping our club running smoothly behind the scenes."
            },

            {
                imageUrl: '/ron.png',
                leaderTitle: "  Ronald Mutia",
                leaderIntro: " Our Technical Coordinator and Web Development Leader",
                description: "Ronald Mutia is the driving force behind our technical operations and web development initiatives. As the club's Technical Coordinator, Ronald ensures seamless execution of projects and coordinates our technical endeavors with precision. Additionally, Ronald leads our web development team with expertise and innovation, shaping our online presence and user experience."
            },

            {
                imageUrl: '/gitonga.jpeg',
                leaderTitle: "  Daniel Gitonga:",
                leaderIntro: "  Our MUT Tech AI Leader and Club Treasurer",
                description: "Daniel Gitonga is a pivotal figure within our club, excelling in two critical roles. As our MUT Tech AI Leader, Daniel spearheads our endeavors in artificial intelligence, driving innovation and exploration in this cutting-edge field. Additionally, Daniel diligently manages our finances as the Club Treasurer, ensuring transparency and fiscal responsibility."
            },


            {
                imageUrl: '/eric.jpeg',
                leaderTitle: "Ezekiel Eric Njuguna:",
                leaderIntro: "  Our Vice Chairman and  User Interface/User experience Leader",
                description: "DEric plays a pivotal role in our club, excelling in two key capacities. As Vice Chairman, Eric provides crucial support and leadership, guiding our club towards its goals. Additionally, Eric leads our UI/UX efforts, ensuring our projects are not only functional but also visually appealing and user-friendly.",
                contactInfo: [
                    {
                        linkedIn: '',
                        url: '',

                    },

                    {

                    }
                ]
            }
          


        
    ]
  return (
    <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1, delay:0.5}}
    >
    <div className=' text-center'>
        <h3 className=' text-3xl font-extrabold'>Team</h3>
        <p className='text-sky-400 '>This is our able Team of leaders</p>
    </div>
    <Splide
      className='my-4'
      options={ {
        rewind: true,
        gap   : '1rem',
        autoplay:true,
        height: "750px",
     
      } }
      aria-label="mut Teach leaders"
    >

        {TeamLeaders.map((lead, index) => (
            <SplideSlide   
                className='md:flex gap-4 bg-slate-700 '
            >
                <img className='lg:h-full h-1/2' src={lead.imageUrl} alt="Image 1"/>
                <div className=' p-2'>
                    <h3 className=' text-sky-400 font-bold text-2xl mb-2'>{lead.leaderTitle}</h3>
                    <h4 className=' font-bold text-slate-300 text-xl'>{lead.leaderIntro}</h4>
                    <p className=' text-white my-3'>{lead.description}</p>
                </div>
                
            </SplideSlide>
        ))}
        
    </Splide>
    </motion.div>
   
  );
}

export default Team