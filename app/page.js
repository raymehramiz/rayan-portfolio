import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import  avatar from '../public/cartoon_avatar_me.png';
import code from '../public/code.png';
import project1 from '../public/proj1.png';
import project2 from '../public/proj2.png';


export default function Home() {
  
  return (
    <div>
     <main className='px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen min-w-full">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Mahbod Rayan Mehramiz</h1>
            <ul className='flex items-center'>
              <li><a href="https://docs.google.com/document/d/1cN9NJ5MugisFpeLYgN6xxyRrR4rMGXUjrdsjRCBaJ6k/edit?usp=sharing" className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>Mahbod Rayan Mehramiz</h2>
            <h3 className='text-2xl dark:text-gray-300 py-2 md:text-3xl'>Contact: <a className='text-teal-600' href='mailto:max.mustermann@example.com'>mehramiz.ray@gmail.com</a></h3>
            <p className='text-md py-5 leading-8 text-gray-500 md:text-xl max-w-xl mx-auto'>
              I am a Computer Engineer, Developer and Programmer Alumni of University of Toronto.
              I hope you consider me for your project or team.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-400'>
            <a href="https://www.linkedin.com/in/rayan-mehramiz-89399796/"><AiFillLinkedin/></a>
            <a href="https://github.com/raymehramiz"><AiFillGithub/></a>
          </div>
          <div className='relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={avatar} layout='fill' objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-center'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-500 text-center'>
              <span className='text-teal-500'>C++</span>, <span className='text-teal-500'>Python</span>, TensorFlow, VertexAI, AutoML, Google Cloud Platform, Javascript, React, HTML, CSS, Neo4J, SQL, Git, Perforce, CUDA
            </p>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-gray-500 shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <Image style={{margin: "auto",}} src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Portfolio Code Projects</h3>
              <p className='text-gray-500 dark:text-gray-300 py-2'>Coding Projects linked to their GitHub repos showcasing my skills as a Programmer</p>
              <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'><a href='https://github.com/raymehramiz/TF_Churn/blob/main/TF_Churn.ipynb'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} src={project1}/></a></div>
                <div className='basis-1/3 flex-1'><a href='https://github.com/raymehramiz/TF_LipNet_Clone/blob/main/Lip_Reading.ipynb'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} src={project2}/></a></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
