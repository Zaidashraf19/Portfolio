import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { IoMdMail } from 'react-icons/io';
import ME from '../assets/me.png'

const Home = () => {
    return (
        <>
            <div className="text-4xl p-5 flex justify-around flex-wrap gap-8">
                <div>
                    <span className="font-light">Hi There!</span>
                    <span>👋🏻</span> <br />
                    <span>I'M </span>
                    <span className="font-bold underline underline-offset-4"> Muhammad Zaid</span> <br />

                    <Typewriter
                        options={{
                            strings: [
                                "Frontend Developer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />

                </div>
                <div>
                    <img
                        src={ME}
                        alt="Developer Avatar"
                        className=" w-80 rounded-full"
                    />
                </div>
            </div>


            <div className='flex flex-col justify-center items-center gap-5 my-10'>

                <div>
                    <span className='text-4xl'>
                        FIND ME ON
                    </span> <br />
                    <span>
                        Feel free to <span className='font-semibold'>connect with me</span>
                    </span>
                </div>

                {/* ICONS */}
                <div className='flex gap-3'>

                    {/* INSTAGRAM */}
                    <span className="bg-[#181a27] rounded-lg p-2 text-xl">
                        <a href="">
                            <span className='text-[25px]'>
                                <FaInstagram />
                            </span>
                        </a>
                    </span>

                    {/* GITHUB */}
                    <span className="bg-[#181a27] rounded-lg p-2 text-xl">
                        <a href="https://github.com/Zaidashraf19">
                            <span className='text-[25px]'>
                                <FaGithub />
                            </span>
                        </a>
                    </span>

                    {/* LINKEDIN */}
                    <span className="bg-[#181a27] rounded-lg p-2 text-xl">
                        <a href="">
                            <span className='text-[25px]'>
                                <FaLinkedin />
                            </span>
                        </a>
                    </span>

                    {/* MAIL-BOX */}
                    <span className="bg-[#181a27] rounded-lg p-2 text-xl">
                        <a href="">
                            <span className='text-[25px]'>
                                <IoMdMail />
                            </span>
                        </a>
                    </span>
                    
                </div>
            </div>
        </>
    )
}

export default Home