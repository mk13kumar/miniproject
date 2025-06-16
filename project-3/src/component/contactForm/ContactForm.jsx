 import React, { use, useContext, useEffect, useState } from "react";
 import Button from "../button/Button";

 import styles from "./contact.module.css";


const ContactForm = () => {
  // const { setSharedData, sharedData } = useContext(MyContext);

  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");

  const [submit, setSubmit] = useState(false);

 
  const handleNameChange = (e) => {
    let value = e.target.value;
    setName(value);
    setNameError(value.length < 1 ? "must Enter Name" : "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? " " : "Invalid email format");
  };
  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    setTextError(value.trim() ? "" : "Text is required");
  };

  const handleAddInputvalue = (e) => {
    e.preventDefault();

    const newEntry = { name, email, text };

    const oldData = JSON.parse(localStorage.getItem("formData")) || [];
    const updatedData = [...oldData, newEntry];
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setName("");
    setEmail("");
    setText("");
    setSubmit(true)
  };
  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => setSubmit(false), 3000); // 3 sec
      return () => clearTimeout(timer);
    }
  }, [submit]);
    
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Trigger validation
    const isNameValid = name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isTextValid = text.trim() !== "";

    setNameError(isNameValid ? "" : "Must enter name");
    setEmailError(isEmailValid ? "" : "Invalid email format");
    setTextError(isTextValid ? "" : "Text is required");

    if (isNameValid && isEmailValid && isTextValid) {
      handleAddInputvalue(e);
    }
  };

  return (
    <>
      <section className="section">
        <div className={styles.btn_container}>
           {submit && <p className={styles.green}>Data Submitted</p>}  
          <form onSubmit={handleOnSubmit}>
            <div className={styles.form_control}>
              <label type="name">
                Name <span className={name ? styles.black : styles.red}>*</span>{" "}
              </label>
              <input
                value={name}
                type="text"
                onChange={handleNameChange}
                // required
              />
              {nameError && <p className={styles.red}>{nameError}</p>}
              {/* <p>{name?  alertE: null}</p> */}
            </div>
            <div className={styles.form_control}>
              <label type="text">
                Email{" "}
                <span className={email ? styles.black : styles.red}>*</span>{" "}
              </label>
              <input
                value={email}
                type="text"
                onChange={handleEmailChange}
                // required
              />
              {emailError && <p className={styles.red}>{emailError}</p>}
              {/* <p>{email? "": "Email Requred"}</p> */}
            </div>
            <div className={styles.form_control}>
              <label type="name">Text</label>
              <textarea
                value={text}
                name="text"
                rows="8"
                onChange={handleTextChange}
                // required
              />
              {textError && <p className={styles.red}>{textError}</p>}
              {/* <p>{text? " ": "Text Requred"}</p> */}
              <div className={styles.form_btn}>
                <Button text="SUBMIT"></Button>
              </div>
            </div>
           </form>
        </div>
       </section>
    </>
  );


 






};

export default ContactForm;
