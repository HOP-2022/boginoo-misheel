import {React, useState} from "react";
import pic from "../components/logo1.png";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios'

export const Short = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };




  const styles = {
    header: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      justifyContent: "flex-end",
    },
    green: {
      backgroundColor: "#02B589",
      width: "183px",
      height: "44px",
      borderRadius: "100px",
      fontSize: "20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "8px",
      borderColor: "#02B589",

    },
    white: {
      color: "#02B589",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "44px",
      margin: "8px",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      height: "88vh",
      alignItems: "center",
      justifyContent:"center",
    },
    logo: {
      width: "184px",
      height: "118px",
    },
    row: {
      display: "flex",
      width: "100vw",
      justifyContent:"center"
    },
    input: {
      width: "581px",
      height: "44px",
      backgroundColor: "white",
      border: "1px solid #F0F0F0",
      boxShadow: "opx 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",
    },
    greenunderline:{
         textDecoration:"underline",
        color:"#02B589",
         border:"0px solid black",
         backgroundColor:"white",
        shadow:"null"
    },
    grey:{
        color:"grey",
        fontSize:"16px",
        display:"flex",
        flexDirection:"row"
    },
    plus:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
    },
    black:{
      color:"black"
    }
  };
  return (
    <div>
      <div style={styles.header}>
        <div style={styles.white}>хэрхэн ажилладаг вэ?</div>
        <div style={styles.green}>нэвтрэх</div>
      </div>
      <div style={styles.main}>
        <img style={styles.logo} src={pic} alt="" />
        <div style={styles.row}>
          <input
              value={userInput}
              onChange={(e)=>{setUserInput(e.target.value)}}
              type="text"
            style={styles.input}
             placeholder="https://www.web-huudas.mn"
          />
          <button   onClick={() => {
              fetchData();
               }}
             style={styles.green}>
            богиносгох
          </button>
        </div>
        <div style={styles.plus}>
      <div style={styles.grey}>
      Өгөгдсөн холбоос <div style={styles.black}>{userInput}</div>
      </div>
      <br></br>
      <div>
      <div style={styles.grey}>
        Богино холбоос <div style={styles.black}>{shortenedLink}</div>
        <br></br>
      <CopyToClipboard text={shortenedLink}>
     <button style={styles.greenunderline}> Хуулж авах</button> 
     </CopyToClipboard>
     </div>
     </div>
     </div>
      </div>
    </div>
  );
};