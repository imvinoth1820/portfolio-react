import resumeImg from '../Assets/resume.jpg'
const Resume = () => {
    const config = {
        link: "https://drive.google.com/file/d/1f86gDLYPD-YE1RQ1VC4toCucmX5uZaUG/view?usp=drive_link" 
    }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img src={resumeImg} className='w-[300px]'/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-[#585cd1] mb-5 font-bold'>Resume 📄</h1>
            <p className='text-white pb-5'>You can view my resume <a className='btn' href={config.link} target='blank'>Download</a></p>
           
        </div>

    </div>
</section>
    )
}

export default Resume