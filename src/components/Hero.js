import HeroImg from '../Assets/hero.png'
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
      <div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-white text-4xl'>Hello,<br />I'm <span>Vinoth kumar R🧑‍💻</span>
        <p className='text-2xl'>I'm a React developer</p>
        </h1>
        <div className='flex mt-2 py-2 links'>
             
            <a className='linka' title='github' target='_blank' href="https://github.com/imvinoth1820"><AiOutlineGithub size={40} /></a>
            <a className='linka' title='facebook'  target='_blank' href="https://www.facebook.com/"><FaFacebook size={40} /></a>
            <a className='linka' title='Linkedin' target='_blank' href="https://www.linkedin.com/in/vinothkumar-r-087083232/"><AiOutlineLinkedin size={40} /></a>
          
            
        </div>
      </div>
        <img className='md:w-1/3 ' src={HeroImg} />
    
    </section>
    )
}

export default Hero