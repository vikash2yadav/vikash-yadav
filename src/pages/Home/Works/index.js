import React from "react";
import "./works.css"; // Importing the CSS file
import SmallBox from "../../../components/smallBox";
import { projectDetail, projectDetailInfo } from "../../../constant/sampleData";

const Works = () => {
  return (
    <>
      <div style={styles.maindiv} id="project">
        <h1 className="text-5xl mb-4 text-center font-serif text-gray-700 font-semibold">
          Our Projects
        </h1>

        <div className="w-full h-1 mb-8 flex justify-center ">
          <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
        </div>

        <p className="mb-20 mx-4 text-center text-gray-400 text-m">
          🌟 Explore my diverse range of projects that showcase my skills and
          creativity. If you need assistance or want to collaborate, don't
          hesitate to reach out—let's make something amazing together!
        </p>

        <div style={styles.seconddiv}>
          {projectDetail.map((item) => (
            <div style={{ height: "300px" }} className="w-full md:w-1/3 ">
              <img
                style={styles.img}
                className="img w-full h-full"
                src={item?.image}
                alt=""
              />
            </div>
          ))}
        </div>

        <div style={styles.seconddiv} className="mb-20">
          {projectDetailInfo.map((item) => (
            <SmallBox title={item?.value} description={item?.title} />
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  maindiv: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    color: "white",
    padding: "100px 0px",
    "@media (max-width: 400px)": {
      padding: "0px 20px",
    },
  },
  seconddiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "100px",
  },
  img: {
    transition: "transform 0.5s ease",
  },
};

export default Works;
