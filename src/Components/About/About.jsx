import { Grid } from "@mui/material";
import AboutTitle from "./AboutTitle";
import AboutContent from "./AboutContent";
import { motion, useScroll } from "framer-motion"
import { useEffect } from "react";
import { useRef } from "react";

const About = () =>{
    const aboutRef = useRef();
    const { scrollY } = useScroll({
        target: aboutRef,
        offset:["start start","end end"]
    });
    // useEffect(()=>{
    //     return scrollY.onChange((latest)=>{
    //         console.log(latest);
    //     });
    // },[scrollY]);
    const aboutstyling = {
        borderRadius:"10%",
        padding:"2em",
        border:"30px solid rgb(234, 168, 168)",
        backgroundColor:"rgb(61, 64, 102)"

    }
    return(
        <>
          <Grid container
           sx={{
            justifyContent:"center",
            padding:"2em",
            background:`url("%PUBLIC_URL%/myImage.jpg")`
           }}  
          >
          <motion.div
          ref={aboutRef}
          style={{
            display:"flex",
            justifyContent:"center"
          }}
          initial={{transform:`translateX(-500px)`,opacity:0}}
          whileInView={{
            transform: [`translateX(-400px)`,`translateX(-300px)`,`translateX(-200px)`,`translateX(-150px)`,`translateX(-100px)`,`translateX(-50px)`,`translateX(0)`],
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