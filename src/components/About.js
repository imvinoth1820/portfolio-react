import AboutImg from '../Assets/about.png'
const About = () => {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id="about">
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white border-b-4 border-[#585cd1] mb-5 font-bold'>About Me🚀</h1>
                    <p className='text-white pb-5'>Hi there! I'm Vinoth Kumar, a passionate React developer with two years of experience</p>
                    <p className='text-white pb-5'> I specialize in crafting stunning websites using ReactJS and Tailwind CSS. Proficient in frontend technologies like Redux, Axios, Hooks, and CSS, I thrive on creating captivating user experiences.</p>
                    <p className='text-white'>
                        In addition to my frontend expertise, I'm well-versed in backend technologies such as Express.js, MongoDB, and Node.js.</p>
                </div>

            </div>
        </section>
    )
}

export default About