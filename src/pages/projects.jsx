import { FaGithub } from 'react-icons/fa'
import BloggingApp from '../assets/BloggingApp.png'

const Project = () => {
    return (
        <>
            <h2 className="text-center font-bold uppercase text-2xl">My Recent Work</h2>
            <p className="text-center text-lg">Here are few works I've worked on recently</p>
            <div className="flex justify-center gap-10 flex-wrap my-5 mx-30">
                <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
                    <img
                        src={BloggingApp}
                        alt="Blogging App Image"
                        className='rounded'
                    />
                    <h3 className='font-semibold text-lg text-center'>Blogging App</h3>
                    <p>I've created a blogging app where the user can add and delete post and cn also upload image</p>
                    {/* <span className="bg-[#181a27] rounded-lg p-2 text-xl">
                        <a href="">
                            <button className='text-[25px]'>
                                <FaGithub />
                                GitHub
                            </button>
                        </a>
                    </span> */}
                </div>
                <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-5">
                    <img
                        src={BloggingApp}
                        alt="Blogging App Image"
                        className='rounded'
                    />
                    <h3 className='font-semibold text-lg text-center'>Blogging App</h3>
                </div>
                <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-5">
                    <img
                        src={BloggingApp}
                        alt="Blogging App Image"
                        className='rounded'
                    />
                    <h3 className='font-semibold text-lg text-center'>Blogging App</h3>
                </div>
            </div>
        </>
    )
}

export default Project