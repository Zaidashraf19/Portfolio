const About = () => {
    return (
        <>
            <div className="text-xl p-5 flex justify-around gap-8 flex-wrap">
                <div className="bg-gray-700 rounded-full p-0">
                    <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png"
                        alt="Boy avatar"
                        width={100}
                        className=""

                    />
                </div>
                <div>
                    Hi everyone, <span className="font-semibold text-2xl">Muhammad Zaid</span> here from <span className="font-semibold text-2xl">Karachi, Pakistan. </span> <br /> <br />
                    I'm a passionate Frontend Developer with expertise in creating responsive and interactive web applications. I specialize in React, Firebase, HTML, and CSS. <br /> <br />
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my skills through continuous learning.
                </div>
            </div>
        </>
    )
}

export default About