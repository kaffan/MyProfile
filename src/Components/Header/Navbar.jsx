import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';
import AkLogo from './AK_logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { textAlign } from '@mui/system';
import { motion } from 'framer-motion';

const Navbar = () =>{
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('md'));
    const iconStyles = {
      width:"25%",
      height:"25%"
    }
    return (
        <>
          <Grid container spacing={2} 
          sx={{
                margin:"0.5em auto",
                alignItems:"center",
                justifyContent:"center",
                width:`${(media) ? "100%" : "90%"}`
             }}>
             <Grid item md={6} xs={6}>
                 <AkLogo ></AkLogo>
             </Grid>
             <Grid item md={1.5} xs={2}>
               <motion.div
                whileHover={{scale : 1.4}}
               >
                <a href="https://github.com/kaffan"><FontAwesomeIcon style={{...iconStyles,color:"black"}} icon={faGithub} /></a>
               </motion.div>
             </Grid>
             <Grid item md={1.5} xs={2}>
               <motion.div
                whileHover={{scale : 1.4}}
               >
                <a href="https://www.linkedin.com/in/affan-khan-6626b9195/"><FontAwesomeIcon style={iconStyles} icon={faLinkedin} /></a>
               </motion.div>
             </Grid>
             <Grid item md={1.5} xs={2}>
               <motion.div
                whileHover={{scale : 1.4}}
               >
                <a href="https://twitter.com/Affankh37437391"><FontAwesomeIcon style={iconStyles} icon={faTwitter} /></a>
               </motion.div>
             </Grid>
          </Grid>
        </>
    );
}

export default Navbar;