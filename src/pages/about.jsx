import ME from '../assets/me.jpeg'

const About = () => {
    return (
        <>
            <div className="text-xl p-5 flex justify-around gap-8 flex-wrap">
                <div>
                    <img
                        // src={ME}
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
                            <li class="before:content-['👉']"> Playing Cricket</li>
                            <li class="before:content-['👉']"> Discovering new things</li>
                            <li class="before:content-['👉']"> Third item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <h3 className='text-4xl text-center font-semibold'>Professional Skillset</h3>
            <div className='flex justify-center gap-10 flex-wrap my-5 mx-30'>
                {/* HTML */}
                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu'>
                    <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
                    </svg>
                </div>

                {/* CSS */}
                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
                    </svg>
                </div>

                {/* TAILWIND */}
                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu '>
                    <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                    </svg>
                </div>

                {/*  */}
                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu'>
                </div>



                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu '>
                </div>



                <div className='p-20 border border-white rounded w-50 shadow-xl hover:transform-gpu '>
                </div>

                
            </div>
        </>
    )
}

export default About