import Grid from '@mui/material/Grid';
import AkLogo from './AK_logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () =>{
    return (
        
          <Grid container spacing={2}>
             <Grid item xs={2}>
                <AkLogo ></AkLogo>
             </Grid>
             <Grid item xs={2}>
                <a href="https://github.com/kaffan"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
             </Grid>
             <Grid item xs={2}>
                <a href="https://www.linkedin.com/in/affan-khan-6626b9195/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
             </Grid>
             <Grid item xs={2}>
                <a href="https://twitter.com/Affankh37437391"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
             </Grid>
          </Grid>
        
    );
}

export default Navbar;