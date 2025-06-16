import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './button.module.css'
const Button = ({isOutline, icon,text, ...rest}) => {
    //  const { isOutline , icon,text} = props
    // const handleCall =()=>{
    //   console.log("someone is calling");
    //  }
  return (
    <button 
    // onClick={handleCall}
     {...rest} 
     className={ isOutline ? styles.outline_btn : styles.btn} >
      {icon}
      {text} 
      {/* {props.styles} */}
    </button>
  )
}
export default Button
