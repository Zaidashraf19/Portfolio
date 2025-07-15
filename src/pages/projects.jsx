import { FaGithub } from "react-icons/fa";
import BloggingApp from "../assets/BloggingApp.png";
import EcommerceApp from "../assets/EcommerceApp.png";
import GitHubProfileViewerApp from "../assets/GitHubProfileViewerApp.png";
import NoonApp from "../assets/NoonApp.png";
import WeatherApp from "../assets/WeatherApp.png";
import ProductListing from "../assets/Product-Listing.png";
import FilterApp from "../assets/Filter-App.png";
import SaltNPepper from "../assets/SaltNPepper-App.png";

const Project = () => {
  return (
    <>
      <h2 className="text-center font-bold uppercase text-4xl my-4">
        My Recent Work
      </h2>
      <p className="text-center text-xl">
        Here are few works I've worked on recently
      </p>
      <hr className="w-1/2 mx-auto my-4 border-t-2 border-gray-600" />
      {/* PROJECTS */}
      <div className="flex justify-center gap-10 flex-wrap my-5 mx-5">
        {/* Salt N Pepper App Clone */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={SaltNPepper} alt="Blogging App Image" className="rounded" />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              Salt’n Pepper Clone
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> HTML | CSS
            </p>
            <br />
            <p className="text-center">
              A fully responsive front-end clone of the Salt’n Pepper restaurant
              website, developed using pure HTML and CSS. The layout replicates
              the original design, including sections like navigation, banners,
              menus, and footer. Built with a mobile-first approach to ensure
              seamless responsiveness across all devices.
            </p>
          </div>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Salt-n-Pepper"
              target="blank"
            >
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* Filter App */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={FilterApp} alt="Blogging App Image" className="rounded" />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              Product Filter App
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> HTML | CSS |
              JavaScript
            </p>
            <br />
            <p className="text-center">
              A fully responsive product filtering application built with
              vanilla HTML, CSS, and JavaScript. Users can easily browse and
              filter products based on categories. The app features a clean user
              interface, category-based filtering logic, and adapts seamlessly
              across all screen sizes without any external libraries or
              frameworks.
            </p>
          </div>
          <span className="p-1">
            <a href="https://github.com/Zaidashraf19/filter-app" target="blank">
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* BLOGGING APP */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img src={BloggingApp} alt="Blogging App Image" className="rounded" />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              Blogging App
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> React.js |
              Tailwind CSS | Firebase
            </p>
            <br />
            <p className="text-center">
              A simple and responsive blogging platform where users can create
              and delete posts with real-time updates using Firebase. Each post
              supports text and image uploads with preview functionality. The
              app includes user authentication, clean UI components, and dynamic
              post rendering for a smooth experience.
            </p>
          </div>
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
            alt="E-commerce App Image"
            className="rounded"
          />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              E-commerce App
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> React.js |
              Redux Toolkit | Tailwind CSS | Material UI
            </p>
            <br />
            <p className="text-center">
              An interactive e-commerce platform where users can browse
              products, view details, and manage their shopping cart. Built with
              React.js and styled using Tailwind CSS and Material UI, the app
              allows users to add/remove items and adjust quantities using Redux
              Toolkit. Features a modern card layout, responsive design, and
              smooth user experience.
            </p>
          </div>
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
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              GitHub Profile Viewer
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> Next.js |
              Tailwind CSS
            </p>
            <br />
            <p className="text-center">
              A sleek GitHub profile viewer built with Next.js and styled using
              Tailwind CSS. Users can enter a GitHub username to view public
              details including name, bio, repositories, followers, and
              following. The app features a clean card layout with real-time
              data fetching and responsive design.
            </p>
          </div>
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
          <img src={NoonApp} alt="Noon App Image" className="rounded" />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              Noon.com Clone
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> React.js |
              Tailwind CSS
            </p>
            <br />
            <p className="text-center">
              A fully responsive clone of the Noon.com homepage built using
              React.js and styled with Tailwind CSS. The project replicates core
              UI features such as a sticky navbar, promotional banners, product
              categories, and a modern grid-based layout. Designed with
              mobile-first responsiveness and clean component structure, this
              clone demonstrates practical frontend skills in e-commerce UI
              development.
            </p>
          </div>
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
          <img src={WeatherApp} alt="Weather App Image" className="rounded" />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              Weather Forecast App
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> React.js |
              Bootstrap
            </p>
            <br />
            <p className="text-center">
              A responsive weather forecasting app built with React.js. Users
              can enter any city or country name to view real-time weather data.
              The app supports both
              <span className="font-semibold">
                hourly (24-hour) and 3-day forecasts
              </span>
              , and allows users to toggle between
              <span className="font-semibold"> Celsius </span> and
              <span className="font-semibold"> Fahrenheit </span> temperature
              units. Clean UI with dynamic rendering based on user input and
              weather conditions.
            </p>
          </div>
          <span className="p-1">
            <a href="https://github.com/Zaidashraf19/weatherApp" target="blank">
              <button className="flex gap-2 p-2 bg-black rounded-lg hover:bg-[#181a30] cursor-pointer">
                <FaGithub />
                <span>GitHub</span>
              </button>
            </a>
          </span>
        </div>

        {/* Product-Listing */}
        <div className="bg-[#181a27] shadow-2xl shadow-black w-90 p-2">
          <img
            src={ProductListing}
            alt="Blogging App Image"
            className="rounded"
          />
          <div className="mx-3">
            <h3 className="font-semibold text-lg text-center my-4">
              E-Commerce Inventory Manager
            </h3>
            <p>
              <span className="font-semibold">Tech Stack:</span> React.js |
              Bootstrap
            </p>
            <br />
            <p className="text-center">
              A responsive inventory management app that allows users to create
              categories and subcategories, and add products with price and
              quantity. Each product's total value is auto-calculated, and users
              can edit or delete entries with ease. The UI includes collapsible
              views, product counters, and a clean Bootstrap-styled layout.
              Built with reusable React components and efficient state handling
              for a smooth user experience.
            </p>
          </div>
          <span className="p-1">
            <a
              href="https://github.com/Zaidashraf19/Product-listing-app"
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
