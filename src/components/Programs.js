import React from 'react'


const WorkShops = () => {
    return (
        <div className='bg-slate-800 rounded-md px-3 py-4 w-96 shadow-lg shadow-slate-700 text-slate-300'>
            <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>Workshops</h4>
            <p className=' text-md'>
                Workshops are organized to provide students with hands-on learning experiences in various areas of technology. These sessions are designed to introduce students to new concepts, tools, and techniques relevant to their academic and professional development. Led by knowledgeable instructors or industry experts, workshops offer practical insights and real-world applications, empowering students to apply what they've learned in their coursework and beyond. Whether it's exploring the basics of a new technology or diving deep into advanced topics, workshops provide valuable opportunities for students to expand their skill set, enhance their problem-solving abilities, and stay abreast of industry trends.

            </p>
            <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
        </div>
    )
}

const Seminars = () => {
    return (
        <div className='bg-slate-800 rounded-md px-3 py-4 w-96 shadow-lg shadow-slate-700 text-slate-300'>
        <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>Seminars</h4>
        <p>
                Seminars are organized to expose students to emerging trends, challenges, and opportunities within the realm of technology. These events feature guest speakers, panel discussions, and interactive sessions focused on a specific theme or topic of interest. Seminars provide a platform for students to engage with industry professionals, researchers, and thought leaders, gaining valuable insights and perspectives from experts in the field. Whether it's exploring the ethical implications of new technologies, discussing innovative solutions to global problems, or sharing best practices for career development, seminars empower students to broaden their horizons, expand their networks, and cultivate a deeper understanding of the impact of technology on society.

        </p>
        <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
    </div>
    )
}


const Trainings = () => {
    return (
        <div className='bg-slate-800 rounded-md px-3 py-4 w-96 shadow-lg shadow-slate-700 text-slate-300'>
        <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>Skills Development Programs</h4>
        <p>Training programs are designed to equip students with the practical skills and knowledge needed to succeed in today's tech-driven world. These programs offer hands-on learning opportunities in areas such as coding, design, data analysis, cybersecurity, and project management. Led by experienced instructors or industry professionals, training programs provide a structured curriculum, guided instruction, and feedback to help students develop proficiency in key areas of technology. Whether it's mastering a new programming language, learning how to build a website, or honing their digital marketing skills, students can tailor their training experience to align with their interests and career goals, gaining valuable skills that enhance their employability and competitiveness in the job market.

        </p>
        <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
    </div>
    )
}

const MemberShipProgram = () => {
    return (
        <div className='bg-slate-800 rounded-md px-3 py-4 w-96 shadow-lg shadow-slate-700 text-slate-300'>
            <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>MUT tech club Membership</h4>
            <p>The Tech Club Membership card offers students an entry point into a dynamic community of technology enthusiasts. Membership provides access to a variety of activities and resources aimed at fostering skill development, networking, and collaboration. Whether you're a novice or an experienced tech enthusiast, joining the Tech Club opens doors to a supportive environment where you can engage in workshops, seminars, hackerthons, and other events tailored to your interests and goals. By becoming a member, students not only expand their knowledge and expertise but also join a vibrant community where they can connect with like-minded peers and explore their passion for technology.</p>

            <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
        </div>

             
    )
}


const Hackerthons = () => {
    return (
        <div className='bg-slate-800 rounded-md px-3 py-4 w-96 shadow-lg shadow-slate-700 text-slate-300'>
        <h4 className=' font-bold text-cyan-500 text-2xl mb-4'>Hackerthons</h4>
            <p>
            Hackerthons are immersive events that challenge students to collaborate, innovate, and problem-solve using technology. Organized in partnership with industry sponsors, these events provide students with access to cutting-edge tools, mentorship, and resources to support their projects. From ideation to prototyping, teams work together to develop innovative solutions to real-world problems, competing for prizes, recognition, and opportunities to further develop their ideas. Hackerthons foster creativity, teamwork, and entrepreneurial spirit, empowering students to apply their technical skills in meaningful ways and make a positive impact on society. With a well-structured platform and support system in place, students participating in hackerthons have the opportunity to unleash their potential, network with industry professionals, and gain hands-on experience that prepares them for future success in the tech industry.
            </p>

            <button className=' my-4 font-bold px-3 py-1 text-white bg-cyan-500 rounded-md'>learn more</button>
        </div>
    )
}

const Programs = () => {

  return (
    <div>
        <div>
            <h3 className=' font-extrabold text-2xl mb-4 md:text-4xl text-center my-4'>Our Programs</h3>

            <div className=' flex items-center  justify-center gap-3 flex-wrap'>
                <WorkShops />
                <Hackerthons />
                <Seminars />
                <Trainings />
              
                <WorkShops />
            </div>
            
        </div>
    </div>
  )
}

export default Programs