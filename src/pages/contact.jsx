import { useState } from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [text, SetText] = useState();
  const [subject, SetSubject] = useState();

  const handlesubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !text || !subject) {
      alert("Fill all the inputs");
      return;
    }

    const message = `*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${text}`;

    const whatsappLink = `https://wa.me/923343654822?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div className="text-center m-6 px-3">
        <h3 className="text-6xl font-semibold uppercase">get in touch</h3>
        <p className="text-xl">
          Feel free to contact me for any project or collaboration. I'm always
          open to discussing new projects, creative ideas, or opportunities to
          be part of your vision
        </p>
      </div>
      <div className="flex flex-wrap p-5 w-full">
        <div className="rounded-lg shadow shadow-white border-[#181a27] p-5 min-w-1/3 max-w-full">
          <h4 className="text-2xl font-bold text-center uppercase">
            Contact Information
          </h4>

          {/* EMAIL */}
          <div className="flex my-6 text-xl p-3 gap-5">
            <span className="border rounded-full p-5 text-[30px] bg-[#1b1e2f]">
              <HiOutlineMail />
            </span>
            <span>
              Email <br />
              <a
                href="mailto:muhammadzaidmuhammadashraf@gmail.com"
                target="blank"
                className="cursor-pointer font-semibold"
              >
                muhammadzaidmuhammad <br />
                ashraf@gmail.com
              </a>
            </span>
          </div>

          {/* CONTACT NUMBER */}
          <div className="flex my-6 text-xl p-3 gap-5">
            <span className="border rounded-full p-5 text-[30px] bg-[#1b1e2f]">
              <HiOutlinePhone />
            </span>
            <span>
              Phone <br />
              <a
                href="https://wa.me/+923343654822"
                target="blank"
                className="cursor-pointer font-semibold"
              >
                +923343654822
              </a>
            </span>
          </div>

          {/* LOCATION */}
          <div className="flex my-6 text-xl p-3 gap-5">
            <span className="border rounded-full p-5 text-[30px] bg-[#1b1e2f]">
              <HiOutlineLocationMarker />
            </span>
            <span>
              Location <br />
              <a
                href="https://maps.app.goo.gl/1fGbuFx5VrKwrZdT6"
                target="blank"
                className="cursor-pointer font-semibold"
              >
                Karachi
              </a>
            </span>
          </div>
          <div>
            <h5 className="font-semibold text-2xl text-center uppercase">
              Follow me
            </h5>
            <div className="flex justify-center gap-4 my-5 ">
              {/* GITHUB */}
              <span className="border border-white p-2 rounded-full text-lg">
                <a href="https://github.com/Zaidashraf19">GitHub</a>
              </span>

              {/* LINKEDIN */}
              <span className="border border-white p-2 rounded-full text-lg">
                <a href="">Linkedin</a>
              </span>

              {/* INSTAGRAM */}
              <span className="border border-white p-2 rounded-full text-lg">
                <a href="https://www.instagram.com/dev_zaid28">Instagram</a>
              </span>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="rounded-lg shadow shadow-white border-[#181a27] p-5 min-w-2/3 max-w-full">
          <h4 className="text-4xl font-bold my-3 text-center uppercase">
            Send a message
          </h4>
          <form onSubmit={handlesubmit}>
            <div className="my-10">
              <label className="text-2xl">Your Name</label> <br />
              <input
                value={name}
                onChange={(e) => SetName(e.target.value)}
                type="text"
                placeholder="John Deo"
                className="border border-[#1d293d] rounded-lg p-3 focus:outline-none focus:shadow shadow-white transition-shadow duration-300 w-full"
              />
            </div>
            <div className="my-10">
              <label className="text-2xl">Your Email</label> <br />
              <input
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
                placeholder="john.doe@example.com"
                className="border border-[#1d293d] rounded-lg p-3 focus:outline-none focus:shadow shadow-white transition-shadow duration-300 w-full"
              />
            </div>
            <div className="my-10">
              <label className="text-2xl">Subject</label>
              <input
                value={subject}
                onChange={(e) => SetSubject(e.target.value)}
                type="text"
                placeholder="Project Inquiry"
                className="border border-[#1d293d] rounded-lg p-3 focus:outline-none focus:shadow shadow-white transition-shadow duration-300 w-full"
              />
            </div>
            <div className="my-10">
              <label className="text-2xl">Your Message</label> <br />
              <textarea
                value={text}
                onChange={(e) => SetText(e.target.value)}
                placeholder="Leave a comment here"
                className="border border-[#1d293d] rounded-lg p-3 focus:outline-none focus:shadow shadow-white transition-shadow duration-300 min-h-[100px] sm:min-h-[120px] w-full"
              />
            </div>
            <button
              type="submit"
              className="shadow-sm shadow-white p-3 rounded-2xl flex"
            >
              Send Message <IoIosSend className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
