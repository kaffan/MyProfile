import { Box } from "@mui/system";
import { css } from "@mui/system";
import { keyframes } from "@mui/system";

const MyImage = () =>{
    const spin = keyframes`
      from{transform:rotate(0deg)}
      to{transform:rotate(360deg)}
   `
    return(
        <>
            <img src="./../myImage.jpg"
              style={{
                border:"15px solid #f2e6e6",
                borderRadius:"50%",
                width:"20vw",
                height:"20vw",
                position:"relative",
                left:"7%",
                boxShadow:"10px 10px 2px grey"
              }}
            ></img>
        </>
    );
}

export default MyImage;