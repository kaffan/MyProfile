import { Grid } from "@mui/material";
import { Fragment } from "react";
import Project from "./Project";

const Projects = () =>{
    const arr = [
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/chatApp',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/ToDosApp',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/BankistApp-AdvanceJS',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/BankistApp',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/expense-tracker',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/Jobs-listing-project',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/Mapty-App',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/Pig-Game',
        },
        {
            'img':`url()`,
            'url':'https://api.github.com/repos/kaffan/Shoping-cart-Design',
        }
    ]
    return(
        <Fragment>
            <Grid container direction="column" rowSpacing={2}
            sx={{
                padding:"3em",
            }}
            >
            {arr.map((ele,i)=>(
                <Grid key={i} item>
                  <Project k={i} obj={ele} ></Project>                
                </Grid>   
            ))}
            </Grid>
        </Fragment>
    );
}

export default Projects;