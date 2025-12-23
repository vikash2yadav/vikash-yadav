import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = (props) => {
  const navItems = [
    { component: "Home", to: "home" },
    { component: "About", to: "about" },
    { component: "Project", to: "project" },
    { component: "Service", to: "service" },
    { component: "Blog", to: "blog" },
    { component: "Contact", to: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.secondDiv}>
          <div style={styles.secondContainer}>
            <div style={styles.secondColumns}>
              <h1 className="text-2xl font-semibold mb-10">About Me</h1>
              <div className="flex text-m" style={{ flexDirection: "column" }}>
                <div className="mb-20 text-m" style={styles.aboutinfo}>
                  {" "}
                  I am dedicated to delivering innovative solutions that empower
                  my clients. With a passion for technology and design, I strive
                  to create exceptional user experiences across web and mobile
                  platforms. My journey as a developer is fueled by a commitment
                  to quality and excellence in every project I undertake. Join
                  me as I transform ideas into reality and bring your visions to
                  life!
                </div>
                <div className="flex justify-start align-start mb-10">
                  <span
                    className="mx-2 bg-gray-600 p-3"
                    style={{ borderRadius: "50%" }}
                  >
                    <Link
                      to={`https://wa.me/${"7698661812"}?text=${encodeURIComponent(
                        "Hello"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <WhatsAppIcon />
                    </Link>
                  </span>

                  <span
                    className="mx-2 bg-gray-600 p-3"
                    style={{ borderRadius: "50%" }}
                  >
                    <Link
                      to="https://www.instagram.com/vikash_tech_brilliant/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <InstagramIcon />
                    </Link>
                  </span>

                  <span
                    className="mx-2 bg-gray-600 p-3"
                    style={{ borderRadius: "50%" }}
                  >
                    <Link>
                      {" "}
                      <XIcon />
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.secondColumns}>
              <h1 className="text-2xl font-semibold mb-10">Links</h1>
              <ul className="text-m" style={styles.linkList}>
                {navItems.map((item) => (
                  <li className="mb-2">
                    {" "}
                    <Link
                      className="hover:text-gray-300"
                      onClick={() => scrollToSection(item.to)}
                    >
                      {" "}
                      &#8594; <span className="mx-1">
                        {item?.component}
                      </span>{" "}
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.secondColumns}>
              <h1 className="text-2xl font-semibold mb-10">Social Services</h1>
              <ul className="text-m" style={styles.linkList}>
                <li className="mb-2">
                  {" "}
                  <Link className="hover:text-gray-300" onClick={()=> alert("I am trying to delever best to our society from my side.")}>
                    &#8594; <span className="mx-1"> For our society</span>
                  </Link>{" "}
                </li>
                <li className="mb-2">
                  {" "}
                  <Link className="hover:text-gray-300" onClick={()=> alert(`Thank you 😊 for visiting...`)}>
                    &#8594; <span className="mx-1"> For you</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div style={styles.secondColumns}>
              <h1 className="text-2xl font-semibold mb-10">
                Have a Questions?
              </h1>
              <ul className="text-m" style={styles.linkList}>
                <li className="mb-4">
                  {" "}
                  <Link className="hover:text-gray-300">
                    <LocationOnIcon />
                    <span className="mx-1">
                      {" "}
                      3, Prahladbhai ki chali, Metro Piller 59, Bhilwada,
                      Amraiwadi, Ahmedabad - 380026
                    </span>
                  </Link>{" "}
                </li>
                <li className="mb-4">
                  {" "}
                  <Link className="hover:text-gray-300">
                    {" "}
                    <CallIcon /> <span className="mx-1">+91 76986 61812</span>
                  </Link>{" "}
                </li>
                <li className="mb-4">
                  {" "}
                  <Link className="hover:text-gray-300">
                    {" "}
                    <MailIcon />
                    <span className="mx-1"> vikash9412077@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" w-full mt-5 flex mb-10 text-m justify-center text-center">
          <p className="text-m w-full" style={styles.linkList}>
            copyright © 2024 | All rights reserved | This is made with &#9829;
            by
            <Link className="hover:text-gray-300"> Vikash Yadav </Link>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};
const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: " 60px 40px",
    fontFamily: "Arial, sans-serif",
  },
  secondDiv: {
    color: "#fff",
  },
  secondContainer: {
    padding: "50px 0px",
    marginLeft: "0px",
    display: "flex",
    flexWrap: "wrap",
  },
  secondColumns: {
    flex: "1",
    margin: "0 10px",
  },
  column: {
    flex: "1",
    margin: "0 20px",
  },
  aboutinfo: {
    color: "rgb(166, 168, 169)",
    lineHeight: "30px",
  },
  linkList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    color: "rgb(166, 168, 169)",
    "&:hover": {
      color: "red",
    },
  },
  socialIcons: {
    fontSize: "24px",
    marginLeft: "10px",
  },
  subsButton: {
    backgroundColor: "blue",
    color: "white",
  },
};
export default Footer;
