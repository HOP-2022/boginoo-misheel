import { React, useState, useEffect } from "react";
import pic from "../components/logo1.png";
import axios from "axios";

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
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "184px",
    height: "118px",
  },
  row: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  input: {
    width: "581px",
    height: "44px",
    backgroundColor: "white",
    border: "1px solid #F0F0F0",
    boxShadow: "opx 1px 5px rgba(0, 0, 0, 0.16)",
    borderRadius: "100px",
  },
  grey: {
    color: "grey",
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
  },
  new: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  black: {
    height: "15px",
    width: "100%",
    color: "black",
    fontSize: "15px",
  },
  history: {
    color: "#02B589",
    fontSize: "32px",
    fontHeight: "37px",
    fontWeight: "700",
  },
  greenunderline: {
    textDecoration: "underline",
    color: "#02B589",
    border: "0px solid black",
    backgroundColor: "white",
    shadow: "null",
  },
  new2: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  all: {
   
  },
  links: {
    height: "200px",
    width: "100px",
  },
};


const LinkComponent = ({link, short}) => {
  return (
    <div style={styles.new}>
            <div style={styles.grey}>
              Өгөгдсөн холбоос:
              <div style={styles.black}>{link}</div>
            </div>
            <div style={styles.grey}>
              Богино холбоос:
              <div style={styles.links}>
                <div style={styles.height} >
                  {short}
                </div>
                <button
                >
                  Хуулж авах
                </button>
              </div>
            </div>
          </div>
  ) 
}

export const History = () => {
  const [history, setHistory] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response)
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={styles.all}>
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
          <button type="submit" style={styles.green}>
            богиносгох
          </button>
        </div>
        <div style={styles.new2}>
          <div style={styles.history}>Түүх</div>
          <br></br>
          {history && history.map((item,index)=> {
            return <LinkComponent link={item.originalUrl} short={item.shortUrl} key={index}/>
          })}
        </div>
      </div>
    </div>
  );
};
