// export const RenderLink = ({link}) => {
//     return (
//         <div>
            
//         </div>
//     )
// }
// const styles = {
//     container: {
//         height: "100px",
//         width: "200px",
//         backgroundColor: "red",
//         marginTop: 4
//     }
// }

import {React, useState, useEffect} from "react";
import axios from 'axios'


export const RenderLink = () => {
    const [history, setHistory] = useState();
  useEffect(() => {
    axios
    .get("http://localhost:8000/")
    .then((response) => {
      // console.log(response.data.data)
      setHistory(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []); 
    return (
        <div style={styles.container}>
                  {history((item, index) => {
          return (
            <div  id={index} >{item.shortUrl}</div>
          )
        })}
        </div>
    )
}




















const styles = {
    container:{
        backgroundColor:"red"
    },
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
      height: "15px",
      width: "100%",
     color:"black",
      fontSize:"15px",
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
   new2:{
    display:"flex",
    width:'100vw',
    justifyContent:"space-between",
    flexDirection:"column"
   },
   all:{
    height:"100vh"
   },
   links:{
    height:"200px",
    width:"100px"
   },
  };