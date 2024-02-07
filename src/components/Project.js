import websiteImg1 from '../Assets/act.png';
import websiteImg2 from '../Assets/weather2.jpg';
import websiteImg3 from '../Assets/mailer.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: '🚀 ActTodo Manager - React app with secure user authentication, advanced hook usage',
                link: 'https://acttodo-manager-react.vercel.app/'
            },
            {
                image: websiteImg2,
                description: '🌦️ WeatherExplorer App 🌍 Explore real-time weather details with this React application.',
                link: 'https://weather-explorer-react.vercel.app/'
            },
            {
                image: websiteImg3,
                description: '📧 Bulk Mail Sender App 🚀 Frontend: ReactJS, Axios, XLSX Developed a user-friendly bulk email  ',
                link: 'https://bulk-mailer-react.vercel.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]  hover:opacity-50' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5  '>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}