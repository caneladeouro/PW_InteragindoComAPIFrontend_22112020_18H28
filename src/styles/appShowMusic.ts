import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default function AppShowMusic() {
  return {
    MakeStyles: makeStyles({
      content: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        padding: "8% 0 0 3px",
      },
      image: {
        height: "300px",
        width: "300px",
        border: "1px solid #ffffff",
        borderRadius: "14px",
      },
      input: {
        width: "500px",
      },
      card: {
        minWidth: 275,
        width: "48%",
        height: "75%",
        position: "absolute",
        top: "12%",
        right: "20px",
        backgroundColor: "#000000",
        border: "1px solid #ffffff",
        color: "#ffffff",
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
        color: "#ffffff",
      },
      pos: {
        marginBottom: 12,
        color: "#ffffff",
      },
    }),
    CreateStyles: makeStyles((theme: Theme) =>
      createStyles({
        form: {
          "& > *": {
            margin: theme.spacing(1),
            width: "55ch",
          },
          alignItems: "center",
          width: "48%",
          borderRadius: "5px 5px 5px 0",
          backgroundColor: "#ffffff",
          marginTop: "5px",
          display: "flex",
          flexDirection: "column",
        },
      })
    ),
  };
}
