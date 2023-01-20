import Navbar from "./Navbar";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import TitleName from "./TitleName";
import MyImage from "./MyImage";
// import { css } from "@mui/material";
import { css } from "@emotion/react";
import ScrollToAbout from './ScrollToAbout';

const HeadMain = () =>{
    const theme = useTheme();
    const match1 = useMediaQuery(theme.breakpoints.down('md'));
    const match2 = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <>
          <Grid container direction="column" rowSpacing={(match1) ? 3 : 6.5} 
            sx={{
              // backgroundImage:"linear-gradient(to right,rgba(221, 181, 181,0.5),rgba(153, 77, 234,0.5))",
              margin:"0"
            }} 
          >
            <Grid item 
             sx={{flexGrow:"2"}}
            ><Navbar /></Grid>
            <Grid item
            sx={{flexGrow:"7",alignItems:"center",flexWrap:"wrap"}}
            >
                <Grid container spacing={(match1) ? 6 : 0}
                 sx={{
                  height:"100%",
                  alignItems:"center",
                  justifyContent:"center"
                }}
                 >
                    <Grid item md={5} xs={12} 
                    sx={{
                      textAlign:(match1) ? `center` : `left`
                    }}
                    >
                      <MyImage></MyImage>
                    </Grid>
                    <Grid item md={6} xs={12}
                    sx={{
                      textAlign:(match1) ? `center` : `left`
                    }}>
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
