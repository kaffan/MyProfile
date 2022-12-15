import Grid from '@mui/material/Grid';
import AkLogo from './AK_logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () =>{
    return (
        <>
          <Grid conatiner>
             <Grid item>
                {/* <AkLogo ></AkLogo> */}
             </Grid>
             <Grid item>
                {/* <a href="https://github.com/kaffan"><FontAwesomeIcon icon="fa-brands fa-github" /></a> */}
             </Grid>
             <Grid item>
                {/* <a href="https://www.linkedin.com/in/affan-khan-6626b9195/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a> */}
             </Grid>
             <Grid item>
                <a href="https://twitter.com/Affankh37437391"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
             </Grid>
          </Grid>
        </>
    );
}

export default Navbar;