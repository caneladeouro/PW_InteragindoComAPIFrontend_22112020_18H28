import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default function AppShowMusic() {
  return makeStyles({
    content: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000000",
    },
    divImage: {
      marginTop: 56,
      marginLeft: 15,
      width: "20vw",
      height: "20vw",
      backgroundColor: "black",
      border: "1px solid white",
      boxShadow: "14px 14px 14px white",
      borderRadius: "14px",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    divCardMusic: {
      height: "100%",
    },
    formContent: {
      width: "48%",
      height: "10%",
      marginTop: 60,
    },
    formContentField: {
      // backgroundColor: "#fff",
      color: "#fff",
    },
    cardMusic: {
      position: "absolute",
      minWidth: 275,
      width: "48%",
      height: "70%",
      backgroundColor: "#000000",
      boxShadow: "14px 14px 14px #ffffff",
      border: "1px solid #ffffff",
      color: "#ffffff",
      right: "5%",
      top: "13%",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardButton: {
      position: "absolute",
      top: "90%",
      right: "5%",
      width: "48%",
      backgroundColor: "crimson",
      color: "white",
    },
  });
}
