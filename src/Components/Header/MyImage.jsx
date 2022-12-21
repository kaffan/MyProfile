import { useMediaQuery, useTheme } from "@mui/material";
import { keyframes, css } from "@mui/system";

const MyImage = () =>{
    const spin = keyframes`
      from{transform:rotate(0deg)}
      to{transform:rotate(360deg)}
   `
   const theme = useTheme();
   const match2 = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
            <img src="./../myImage.jpg"
              style={{
                border:"15px solid #f2e6e6",
                borderRadius:"50%",
                width:`${(match2) ? "40vw" : "27vw"}`,
                height:`${(match2) ? "40vw" : "27vw"}`,
                position:"relative",
                boxShadow:"10px 10px 2px grey"
              }}
            ></img>
        </>
    );
}

export default MyImage;