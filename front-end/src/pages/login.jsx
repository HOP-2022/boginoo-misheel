import React from "react";
import pic from "../components/logo1.png";
import {sendRequest} from "../utils/Api";
// const { data } = await sendRequest(`getLink/${val}`, "GET");

export const Login = () => {
  const styles = {
    header: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      justifyContent: "flex-end",
    },
    green: {
      backgroundColor: "#02B589",
      width: "383px",
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
    column: {
      display: "flex",
      flexDirection:"column",
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
    black:{
        color:"black",
        textDecoration:"underline",
        margin:"20px"
    },
    greenunderline:{
        textDecoration:"underline",
        color:"#02B589",
        width:"383px",
        display:"flex",
        justifyContent:"center"
    },
    row:{
      display:"flex",
      flexDirection:"row",
      margin:"15px",
      width:"581px",
      justifyContent:"space-between"
    },
    bold:{
      color: "#02B589",
      fontSize: "25px",
      display: "flex",
      fontWeight:"bold",
      justifyContent:"center"
    },
    center:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    check:{
      accentColor:"#02B589"
    }
  };
  const log = async () => {
    try{
      const {data}= await sendRequest(`logiin/`, "POST", {email: "",password: ""});
    }catch(error) {
      const a = error.response.data
      alert(a.error.message)
    }
  }
  return (
    <div>
      <div style={styles.header}>
        <div style={styles.white}>хэрхэн ажилладаг вэ?</div>
      </div>
      <div style={styles.main}>
        <img style={styles.logo} src={pic} alt="" />
        <br></br>
        <br></br>
        <div style={styles.column}>
            <div style={styles.bold}>Нэвтрэх</div>
            <div>
              <div style={styles.column}>
            <label for="email">Цахим хаяг</label>
            <input style={styles.input} placeholder="name@mail.domain" type="email" />
            </div>
            <br></br>
            <div style={styles.column}>
            <label for="pwd">Нууц үг</label>
            <input style={styles.input}  placeholder="........" type="password"/>
            </div>
            </div>
            <div style={styles.row}>
                <div style={styles.white}> 
                    <input style={styles.check} type="checkbox" />
                    <div>Намайг сана</div>
                </div>
                <div style={styles.black}>Нууц үгээ мартсан</div>
            </div>
            <div style={styles.center}>
            <div style={styles.green}>нэвтрэх</div>
            <div style={styles.greenunderline}>Шинэ хэрэглэгч бол энд дарна уу</div>
            </div>
        </div>
      </div>
    </div>
  );
};
