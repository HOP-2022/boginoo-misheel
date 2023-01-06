import React from "react";
import pic from "../components/logo1.png";

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
    column: {
      display: "flex",
      width: "100vw",
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
        textDecoration:"underline"
    },
    greenunderline:{
        textDecoration:"underline",
        color:"#02B589"
    }
  };
  return (
    <div>
      <div style={styles.header}>
        <div style={styles.white}>хэрхэн ажилладаг вэ?</div>
      </div>
      <div style={styles.main}>
        <img style={styles.logo} src={pic} alt="" />
        <div style={styles.column}>
            <div>Нэвтрэх</div>
            <form>
            <label for="email">Цахим хаяг</label><br></br>
            <input placeholder="name@mail.domain" type="email"/>
            <label for="pwd">Нууц үг</label><br></br>
            <input placeholder="........" type="password"/>
            </form>
            <div>
                <div style={styles.white}> 
                    <input type="checkbox" />
                    <div>Намайг сана</div>
                </div>
                <div style={styles.black}>Нууц үгээ мартсан</div>
            </div>
            <div style={styles.green}>нэвтрэх</div>
            <div style={styles.greenunderline}>Шинэ хэрэглэгч бол энд дарна уу</div>
        </div>
      </div>
    </div>
  );
};
