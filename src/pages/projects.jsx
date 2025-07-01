import { FaGithub } from "react-icons/fa";
import BloggingApp from "../assets/BloggingApp.png";
import EcommerceApp from "../assets/EcommerceApp.png";
import GitHubProfileViewerApp from "../assets/GitHubProfileViewerApp.png";
import NoonApp from "../assets/NoonApp.png";
import WeatherApp from "../assets/WeatherApp.png";

const Project = () => {
  return (
    <>
      <h2 className="text-center font-bold uppercase text-4xl my-4">
        My Recent Work
      </h2>
      <p className="text-center text-xl">
        Here are few works I've worked on recently
      </p>
      <div className="flex justify-center gap-10 flex-wrap my-5 mx-5">
        {/* BLOGGING APP */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={BloggingApp} alt="Blogging App Image" className="rounded" />
          <h3 className="font-semibold text-lg text-center my-4">
            Blogging App
          </h3>
          <p className="text-center">
            I have built a blogging platform with React.js, allowing users to
            create and remove posts, and upload images with preview
            functionality.
          </p>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Blogging-App"
              target="blank"
            >
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* ECOMMERCE APP */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img
            src={EcommerceApp}
            alt="Blogging App Image"
            className="rounded"
          />
          <h3 className="font-semibold text-lg text-center my-4">
            Ecommerce App
          </h3>
          <p className="text-center">
            Utilizing React.js and Redux Toolkit, I created an e-commerce
            platform where users can manage their shopping cart by adding or
            removing products and adjusting item quantities.
          </p>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Kitchen-Accessories"
              target="blank"
            >
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* GIT HUB PROFILE VIEWER APP */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img
            src={GitHubProfileViewerApp}
            alt="Blogging App Image"
            className="rounded"
          />
          <h3 className="font-semibold text-lg text-center my-4">
            GitHub Profile Viewer
          </h3>
          <p className="text-center">
            I have developed a GitHub Profile Viewer application using Next.js.
            Users can enter a GitHub username to view the profile’s bio, number
            of public repositories, follower count, and following count.
          </p>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Github-Profile-viewer"
              target="blank"
            >
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* NOON APP CLONE */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={NoonApp} alt="Blogging App Image" className="rounded" />
          <h3 className="font-semibold text-lg text-center my-4">
            Noon.com Clone
          </h3>
          <p className="text-center">
            This is a design of noon.com made using reactjs. It has a responsive
            layout which looks beautifully on all devices, from mobiles to
            desktops.
          </p>
          <span className="p-1">
            <a href="https://github.com/Zaidashraf19/noon-app" target="blank">
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* WEATHER APP */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={WeatherApp} alt="Blogging App Image" className="rounded" />
          <h3 className="font-semibold text-lg text-center my-4">
            Weather App
          </h3>
          <p className="text-center">
            Developed a JavaScript-based application that allows users to check
            the current weather conditions of any entered city.
          </p>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Weather-app"
              target="blank"
            >
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>
      </div>
      {/* VIEW MORE */}
      <div className="flex justify-center my-10 text-2xl">
        <a
          href="https://github.com/Zaidashraf19?tab=repositories"
          target="blank"
        >
          <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
            <FaGithub />
            <span>View more on GitHub</span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Project;
