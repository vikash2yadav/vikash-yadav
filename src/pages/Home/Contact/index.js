import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Box from "../../../components/Box";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { contactDetailsData } from "../../../constant/sampleData";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      })
      .catch((err) => {
        setErrorMessage("Failed to send message. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <>
      <div style={styles.maindiv} id="contact">
        <h1
          id={`${props.title}`}
          className="text-5xl text-center font-serif mb-4 text-gray-700 font-semibold"
        >
          Contact Me
        </h1>
        <div className="w-full h-1 mb-8 flex justify-center ">
          <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
        </div>

        <p className="mb-20 text-center text-gray-400 text-m">
          🌟 I offer a range of services tailored to meet your needs. If you're
          looking for assistance or collaboration, don't hesitate to reach
          out—let's create something amazing together!
        </p>

        <div style={styles.seconddiv} className="mb-20">
          {contactDetailsData.map((item) => (
            <Box
              key={item.title} // Add key prop for mapping
              logo={item?.icon}
              title={item?.title}
              add={item?.add}
              description={item?.description}
              className={isVisible ? "contact-item visible" : "contact-item"}
            />
          ))}
        </div>

        <div className="mt-5" style={styles.formContainer}>
          <form style={styles.form} onSubmit={handleSubmit}>
            {/* <p className="text-sm font-semibold text-red-600 mb-1">
              Get in Touch!
            </p> */}
            <div style={styles.inputGroup}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                className="mx-0"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                className="mx-0"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                className="mx-0"
              />
              <TextArea
                name="message"
                style={{ ...styles.input, height: "100px" }}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <div style={{ textAlign: "center" }}>
              <Button
                label="Send"
                className="bg-red-600 hover:bg-white hover:text-gray-700 w-full p-3 border border-solid border-1 border-red-600 font-serif text-white rounded-lg"
              />
            </div>
          </form>
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
    padding: "100px 20px",
    "@media (max-width: 400px)": {
      padding: "0px 20px",
    },
  },
  seconddiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    maxWidth: "800px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3px",
  },
  input: {
    color: "black",
    padding: "20px",
    backgroundColor: "#f4f1f1",
    border: "0.5px solid gray",
    borderRadius: "5px",
    marginBottom: "8px",
    width: "100%",
  },
};

export default Contact;
