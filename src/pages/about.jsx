import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { DiGit, DiJavascript1 } from 'react-icons/di';
import { SiFirebase, SiRedux } from 'react-icons/si';
import GitHubCalendar from 'react-github-calendar';


const About = () => {
    return (
        <>
            <div className="text-xl p-5 flex justify-around gap-8 flex-wrap">
                <div>
                    <img
                        src='https://static.vecteezy.com/system/resources/thumbnails/011/961/865/small/programmer-icon-line-color-illustration-vector.jpg'
                        alt="Boy avatar"
                        className="rounded-full w-70 border-white border-2 bg-gray-700 p-2"
                    />
                </div>
                <div>
                    Hi everyone, <span className="font-semibold text-2xl">Muhammad Zaid</span> here from <span className="font-semibold text-2xl">Karachi, Pakistan. </span> <br /> <br />
                    I'm a passionate Frontend Developer with expertise in creating <br />
                    responsive and interactive web applications. I specialize in React, <br />
                    Firebase, HTML, and CSS. <br /> <br />
                    When I'm not coding, you can find me exploring new technologies, <br />
                    contributing to open-source projects, or enhancing my skills through <br />
                    continuous learning. <br /> <br />
                    <div>
                        <h3>Apart from coding, some other activities that I love to do!</h3> <br />
                        <ul class="list-none">
                            <li class="before:content-['👉']"> Sports</li>
                            <li class="before:content-['👉']"> Discovering new things</li>
                            <li class="before:content-['👉']"> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <h3 className='text-4xl text-center font-semibold'>Professional Skillset</h3>
            <div className='flex justify-center gap-10 flex-wrap my-5 mx-30'>
                {/* HTML */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu'>
                    <span className='text-[48px]'>
                        <FaHtml5 />
                    </span>
                </div>

                {/* CSS */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <span className='text-[48px]'>
                        <FaCss3 />
                    </span>
                </div>

                {/* TAILWIND */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <span className="text-[48px]">
                        <RiTailwindCssFill />
                    </span>
                </div>

                {/* JAVASCRIPT */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu'>
                    <span className='text-[48px]'>
                        <DiJavascript1 />
                    </span>
                </div>

                {/* REACT JS */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <span className='text-[48px]'>
                        <FaReact />
                    </span>
                </div>

                {/* REDUX */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <span className='text-[48px]'>
                        <SiRedux />
                    </span>
                </div>


                {/* NEXT JS */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <span className='text-[48px]'>
                        <RiNextjsFill />
                    </span>
                </div>

                {/* FIREBASE */}
                <div className='p-20 border-2 border-white shadow-xl rounded w-50 hover:transform-gpu '>
                    <span className='text-[48px]'>
                        <SiFirebase />
                    </span>
                </div>

                {/* GIT */}
                <div className='p-20 border-2 border-white rounded w-50 shadow-xl'>
                    <span className='text-[48px]'>
                        <DiGit />
                    </span>
                </div>

            </div>
            <div className='flex flex-col items-center gap-5 p-5'>
                <h1 className='text-2xl text-center'>
                    Days I <strong className="font-bold">Code</strong>
                </h1>
                    <GitHubCalendar
                        username="zaidashraf19"
                        colorScheme='light'
                    />
            </div>
        </>
    )
}

export default About