/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const BackButton = ({buttonLink , buttonText}) => {
  return ( 
    <Link to={buttonLink}><button> {buttonText} </button></Link> 
  )
}

export default BackButton