import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import TitleName from "./TitleName";
import MyImage from "./MyImage";
// import { css } from "@mui/material";
import ScrollToAbout from './ScrollToAbout';

const HeadMain = () =>{
    return(
        <>
          <Grid container direction="column" rowSpacing={8}
            sx={{
              backgroundImage:"linear-gradient(to right,rgba(221, 181, 181,0.5),rgba(0, 219, 175,1),rgba(12, 131, 137,1))",
              margin:"0"
            }} 
          >
            <Grid item 
             sx={{flexGrow:"2"}}
            ><Navbar /></Grid>
            <Grid item
            sx={{flexGrow:"7",alignItems:"center",flexWrap:"wrap"}}
            >
                <Grid container spacing={0}
                 sx={{height:"100%",alignItems:"center",justifyContent:"center"}}
                 >
                    <Grid item md={5} xs={8} sx={{textAlign:"left",padding:"0 2em"}}>
                      <MyImage></MyImage>
                    </Grid>
                    <Grid item md={6} xs={8}>
                        <TitleName></TitleName>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
            sx={{
              alignItems:"center",
              flexGrow:"2"
            }}>
              <ScrollToAbout></ScrollToAbout>
            </Grid>
          </Grid>
        </>
    )
}

export default HeadMain;
