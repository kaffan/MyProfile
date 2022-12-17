import Grid from '@mui/material/Grid';
import AkLogo from './AK_logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { textAlign } from '@mui/system';

const Navbar = () =>{
    const iconStyles = {
      width:"30px",
      height:"30px"
    }
    return (
        <>
          <Grid container spacing={2} 
          sx={{
                margin:"0.5em auto",
                alignItems:"center",
                width:"90%"
             }}>
             <Grid item xs={9}>
                <AkLogo ></AkLogo>
             </Grid>
             <Grid item xs={1}>
                <a href="https://github.com/kaffan"><FontAwesomeIcon style={iconStyles} icon={faGithub} /></a>
             </Grid>
             <Grid item xs={1}>
                <a href="https://www.linkedin.com/in/affan-khan-6626b9195/"><FontAwesomeIcon style={iconStyles} icon={faLinkedin} /></a>
             </Grid>
             <Grid item xs={1}>
                <a href="https://twitter.com/Affankh37437391"><FontAwesomeIcon style={iconStyles} icon={faTwitter} /></a>
             </Grid>
          </Grid>
        </>
    );
}

export default Navbar;