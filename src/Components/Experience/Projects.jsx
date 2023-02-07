import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";
import Project from "./Project";

const Projects = () =>{
    const arr = [
        {
            'img':"/chatApp.png",
            'url':'https://api.github.com/repos/kaffan/chatApp',
        },
        {
            'img':`/todoApp.png`,
            'url':'https://api.github.com/repos/kaffan/ToDosApp',
        },
        {
            'img':`/bankistadvance.png`,
            'url':'https://api.github.com/repos/kaffan/BankistApp-AdvanceJS',
        },
        {
            'img':`/bankist.png`,
            'url':'https://api.github.com/repos/kaffan/BankistApp',
        },
        {
            'img':`/expense.png`,
            'url':'https://api.github.com/repos/kaffan/expense-tracker',
        },
        {
            'img':`joblisting.png`,
            'url':'https://api.github.com/repos/kaffan/Jobs-listing-project',
        },
        {
            'img':`mapty.png`,
            'url':'https://api.github.com/repos/kaffan/Mapty-App',
        },
        {
            'img':`pigGame.png`,
            'url':'https://api.github.com/repos/kaffan/Pig-Game',
        },
        {
            'img':`shoppingCart.png`,
            'url':'https://api.github.com/repos/kaffan/Shoping-cart-Design',
        }
    ]
    let arr1,arr2;
    arr1 = [`translateX(-40px)`,`translateX(-30px)`,`translateX(-20px)`,`translateX(-10px)`,`translate(-5px)`,`translateX(0)`]
    arr2 = [`translateX(40px)`,`translateX(30px)`,`translateX(20px)`,`translateX(10px)`,`translate(5px)`,`translateX(0)`]
            
    return(
        <Fragment>
            <Grid container direction="column" 
            sx={{
                padding:"3em",
                margin:"1em 0"
            }}
            >
              <Grid item>
              <h1
            style={{
                fontFamily:"montserrat",
                display:"inline-block",
                borderBottom:"solid 4px rgb(255,255,255)"
            }}>
                PROJECTS
            </h1>
              </Grid>  
              {arr.map((ele,i)=>(
                <motion.div
                initial={{transform:(i%2==0) ? `translateX(50px)` : `translateX(-50px)`,
                opacity:0}}
                whileInView={{transform:(i%2==0) ? arr2 : arr1,
                opacity:[0.2,0.4,0.6,0.8,0.9,1]}}
                transition={{ease:"easeInOut",duration:0.7}}
                viewport={{amount:0.8, once:true}}>
                    <Grid key={i} item
                    sx={{
                        margin:"2em 0"
                    }}>
                      <Project k={i} obj={ele} ></Project>                
                    </Grid>
                </motion.div>   
            ))}
            </Grid>
        </Fragment>
    );
}

export default Projects;