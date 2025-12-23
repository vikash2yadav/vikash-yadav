import React, { useEffect, useState } from "react";
import BlogBox from "../../../components/BlogBox";
import { blogsData } from "../../../constant/sampleData";

const Blog = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const title = "Our Blogs";

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
      {/* INLINE CSS — SAME FILE */}
      <style>
        {`
          .blog-card {
            transition: all 0.4s ease;
          }

          .blog-card:hover {
            transform: translateY(-12px) scale(1.03);
            cursor: pointer
          }
        `}
      </style>

      <div style={styles.maindiv} id="blog">
        <h1
          id={`${props.title}`}
          className="text-5xl text-center font-serif mb-4 text-gray-700 font-semibold"
        >
          {typedText}
          <span style={styles.blinking_cursor}>|</span>
        </h1>

        <div className="w-full h-1 mb-8 flex justify-center">
          <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
        </div>

        <p className="mb-20 text-center text-gray-400 text-m">
          ✨ Dive into our collection of insightful blogs that reflect real-world
          experience and practical knowledge. Honest work. No fluff.
        </p>

        <div style={styles.seconddiv} className="mb-20">
          {blogsData.map((item, index) => (
            <div key={index} className="blog-card">
              <BlogBox
              image={item?.image}
                date={item?.date}
                feild={item?.fields}
                title={item?.title}
                description={item?.description}
              />
            </div>
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
    backgroundColor: "#f0f0f0",
    padding: "100px 20px",
  },
  seconddiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "30px",
  },
  blinking_cursor: {
    fontWeight: 100,
    fontSize: "30px",
    color: "red",
    animation: "blink 0.7s infinite",
  },
};

export default Blog;
