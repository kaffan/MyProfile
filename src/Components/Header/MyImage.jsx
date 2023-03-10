import { useMediaQuery, useTheme } from "@mui/material";
import { css, keyframes } from "@emotion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = () =>{
    const spin = keyframes`
      from{transform:rotate(0deg)}
      to{transform:rotate(360deg)}
   `
   const imgCSS = css`
     @media screen and (max-width:420px){
      width:60vw;
      height:60vw;
     }
   ` 
   const theme = useTheme();
   const match2 = useMediaQuery(theme.breakpoints.down('md'));
   const match3 = useMediaQuery(`(max-width:600px)`);
    return(
        <>
            <LazyLoadImage src="/profileImg.jpg"
              // placeholderSrc="/profileImg.jpg"
              style={{
                border:"30px solid #efe8e8",
                borderRadius:"50%",
                width:`${(match2) ? ((match3) ? "65vw" : "40vw") : "22vw"}`,
                height:`${(match2) ? ((match3) ? "65vw" : "40vw") : "22vw"}`,
                // position:"relative",
                boxShadow:"10px 10px 10px rgba(49, 51, 50, 0.7)"
              }}
              css={imgCSS}
            ></LazyLoadImage>
        </>
    );
}

export default MyImage;