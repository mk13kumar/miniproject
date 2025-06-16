import React from 'react'
import styles from "./component/contactForm/contact.module.css";
import Button from './component/button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const FormButton = () => {
    const handleCall = () => {
        console.log("someone is calling");
      };
  return (
    <div className={styles.btn_container}>
          <div className={styles.contact_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
            <Button
              onClick={handleCall}
              text=" VIA Call "
              icon={<FaPhoneAlt />}
            />
          </div>
          <Button isOutline={true} text="VIA Mail Form" icon={<CiMail />} />
        </div>
  )
}

export default FormButton