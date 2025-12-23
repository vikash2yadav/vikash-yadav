import React, { useEffect, useState } from "react";
import SmallBox from "../../../components/smallBox";
import { projectDetail, projectDetailInfo } from "../../../constant/sampleData";

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const title = "Our Projects";

  useEffect(() => {
    if (isVisible && !hasTyped) {
      let index = 0;
      const type = () => {
        if (index <= title.length) {
          setTypedText(title.slice(0, index));
          index++;
          setTimeout(type, 120);
        } else {
          setHasTyped(true);
        }
      };
      type();
    }
  }, [isVisible, hasTyped]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={styles.maindiv} id="project">
        <h1 className="text-5xl mb-4 text-center font-serif text-gray-700 font-semibold">
          {typedText}
          <span style={styles.blinking_cursor}>|</span>
        </h1>

        <div className="w-full h-1 mb-8 flex justify-center">
          <div className="w-10 h-1 bg-red-700 mb-20 rounded-lg"></div>
        </div>

        <p className="mb-20 mx-4 text-center text-gray-400 text-m">
          🌟 Explore my diverse range of projects that showcase my skills and creativity.
        </p>

        <div style={styles.seconddiv}>
          {projectDetail.map((item, index) => (
            <div
              key={index}
              className="project-card w-full md:w-1/3"
              style={{ height: "300px" }}
            >
              <a href={item?.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="project-img"
                />

                <div className="project-overlay">
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <br/>
                  <h3>{item?.description2}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div style={styles.seconddiv} className="mb-20">
          {projectDetailInfo.map((item, index) => (
            <SmallBox
              key={index}
              title={item?.value}
              description={item?.title}
            />
          ))}
        </div>
      </div>

      {/* CSS INSIDE SAME FILE */}
      <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
        }

        .project-card a {
          display: block;
          height: 100%;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.75);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .project-overlay p {
          font-size: 14px;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
};

const styles = {
  maindiv: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "100px 0px",
  },
  seconddiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "100px",
  },
  blinking_cursor: {
    fontWeight: 100,
    fontSize: "30px",
    color: "red",
    animation: "blink 0.7s infinite",
  },
};

export default Works;
