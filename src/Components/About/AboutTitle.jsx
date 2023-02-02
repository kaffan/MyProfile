import { useMediaQuery } from "@mui/material";

const AboutTitle = () =>{
  const media = useMediaQuery('(max-width:600px)');
    return(
        <>
          <h2 style={{
            fontSize:(media) ? "4.5vw" : "2.5vw",
            fontFamily:"montserrat",
            color: "#999797",
            textShadow:"2px 1px 2px white",
            // textShadow:"5px 3px 5px white"
        }}
          >
            About Me</h2>
        </>
    );
}

export default AboutTitle;