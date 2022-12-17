import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import TitleName from "./TitleName";
import MyImage from "./MyImage";
import { css } from "@mui/material";

const HeadMain = () =>{
    return(
        <>
          <Grid container direction="column" rowSpacing={3}
            sx={{
              backgroundImage:"linear-gradient(to right,rgba(221, 181, 181,0.5),rgba(221, 181, 181,0.5))"
            }} 
          >
            <Grid item><Navbar /></Grid>
            <Grid item
            sx={{flexGrow:"6"}}
            >
                <Grid container spacing={0}
                 sx={{flexGrow:"6",alignItems:"center",justifyContent:"center"}}
                 >
                    <Grid item xs={5} sx={{textAlign:"left",padding:"2em"}}>
                      <MyImage></MyImage>
                    </Grid>
                    <Grid item xs={6}>
                        <TitleName></TitleName>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </>
    )
}

export default HeadMain;
