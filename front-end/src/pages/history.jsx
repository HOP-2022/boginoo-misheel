import React from "react";
import pic from "../components/logo1.png";
import original from "./originalUrl.json";
import short from "./shortUrl.json"

export const History = () => {
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
    grey:{
        color:"grey",
        fontSize:"16px",
        display:"flex",
        flexDirection:"column"
    },
    new:{
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
    },
    black:{
      color:"black"
    },
    history:{
        color:"#02B589",
        fontSize:"32px",
        fontHeight:"37px",
        fontWeight:"700"
    },
    greenunderline:{
        textDecoration:"underline",
       color:"#02B589",
        border:"0px solid black",
        backgroundColor:"white",
       shadow:"null"
   },
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
            style={styles.input}
            placeholder="https://www.web-huudas.mn"
            type="link"
          />
          <button  type="submit" style={styles.green}>
            богиносгох
          </button>
        </div>
      </div>
      <div style={styles.history}>Түүх</div>
      <div style={styles.new}>
        <div style={styles.grey}>Өгөгдсөн холбоос:
            <div style={styles.black}>{original}</div>
        </div>
        <div style={styles.grey}>Богино холбоос:
        <div>
            <div style={styles.black}>{short}</div>
            <button 
            style={styles.greenunderline}
            onClick={() => {
                navigator.clipboard.writeText();
            }}
            >
               Хуулж авах
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};
