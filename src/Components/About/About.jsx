/** @jsxImportSource @emotion/react */
import { css, Grid, useMediaQuery, useTheme } from "@mui/material";
import AboutTitle from "./AboutTitle";
import AboutContent from "./AboutContent";
import { motion, useScroll } from "framer-motion"
import { useEffect } from "react";
import { useRef } from "react";
// import { useTheme } from "@emotion/react";


const About = () =>{
    const aboutRef = useRef();
    const theme = useTheme();
    const media = useMediaQuery(`(max-width:450px)`);
    const media2 = useMediaQuery(theme.breakpoints.down('sm'));
    const { scrollY } = useScroll({
        target: aboutRef,
        offset:["start start","end end"]
    });
    const gridImg = css`
      &:after{
        content:'';
        position:"relative";
        background-size:"cover",
        display:"block",
        z-index:-1;
        background-image:"linear-gradient(to right,rgba(1,1,1,0.5),rgba(1,1,1,0.5))";
      }
    `
    const aboutstyling = {
        borderRadius:"10%",
        padding:"2em",
        border:"30px solid rgb(234, 168, 168)",
        backgroundColor:"rgba(61, 64, 102, 0.7)",

    }
    return(
        <>
          <Grid container
           sx={{
            justifyContent:"center",
            padding:(media) ? "0" : "0 2em",
            position:"relative",
            zIndex:"-2",
            backgroundImage:`url("/myImage.jpg.jpg")`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backdropFilter:"blur(5px)",
            backgroundPositionY:"50%",
            backgroundPositionX:(media2) ? "0" : "15em"
           }}
           css={css`
            &::after{
            content:'';
            position:absolute;
            background-size:cover;
            display:block;
            z-index:-1;
            width:100%;
            min-height:100%;
            background-color:rgba(0, 0 ,0 ,0.4);
            // background-image:linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5));
          }`
           }  
          >
          <motion.div
          ref={aboutRef}
          style={{
            display:"flex",
            justifyContent:"left"
          }}
          initial={{transform:`translateX(-100px)`,opacity:0}}
          whileInView={{
            transform: [`translateX(-80px)`,`translateX(-60px)`,`translateX(-40px)`,`translateX(-20px)`,`translateX(0)`],
            opacity:[0.2,0.4,0.6,0.8,1]
          }}
          transition={{
              duration:1,
              ease:"linear"    
          }}
          >
            <Grid item lg={6} sm={8} sx={aboutstyling}>
                <Grid container direction="column" spacing={2}
                sx={{
                    alignItems:"center"
                }}
                >
                    <AboutTitle />
                    <AboutContent />
                </Grid>
            </Grid>
           </motion.div>
          </Grid>          
        </>
    );
}

export default About;