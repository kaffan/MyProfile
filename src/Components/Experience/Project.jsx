import { Grid, useMediaQuery, useTheme } from "@mui/material"
import { motion } from "framer-motion";
import { useReducer } from "react";
import { useEffect } from "react"
import { Fragment } from "react"

const Reducer = (state,action) =>{
    switch(action.type){
        case 'add':
           state = {
            title: action.payload.title,
            description: action.payload.description,
            githubLink: action.payload.githubLink,
            liveLink: action.payload.liveLink,
            topics: action.payload.topics
           }
           break;   
    }
    return state;
}
const Project = (props) =>{
    const url = props.obj.url;
    const img = props.obj.img;
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'))
    const [state,dispatch] = useReducer(Reducer,
        {
            title:"",
            description:"",
            githubLink:"",
            liveLink:"",
            topics:""
        })
    useEffect(()=>{
        let getObj;
        let payload;
        fetch(url)
        .then((obj)=>obj.json())
        .then((obj)=>{
            payload = {
                title: obj.name.toUpperCase(),
                description: obj.description,
                githubLink: obj.html_url,
                liveLink: obj.homepage,
                topics: obj.topics
            }
            dispatch({type:"add",payload:payload});
        })
        .catch(()=>alert("A problem encountered"));
    }, [])
    console.log(props.k)
    return (
      <Fragment>
        <Grid container columnSpacing={4} 
          direction={(props.k%2!=0) ? "row-reverse" : "row"}
          sx={{
            alignItems:"center"
          }}
        >
          <Grid item
          sx={{
           
          }}>
            <motion.div
            whileHover={{
              scale:1.2,
              
            }}
            >
              <img 
              style={{
                height:'15vw',
                width:'25vw',
                borderRadius:"7%"
              }}
              src={img} />
            </motion.div>
          </Grid>
          <Grid item
          sx={{
            // flexWrap:"wrap",
            width:(media) ? "90%":"45%"
          }}>
            <Grid container spacing={1} direction="column"
            sx={{
                textAlign:(props.k%2!=0)?"right":"left"
            }}>
              <Grid item
              sx={{
                fontFamily:"montserrat",

              }}>{state.title}</Grid>
              <Grid item
              sx={{
                fontFamily : "Roboto"
              }}>{state.description}</Grid>
              <br />
              <Grid item>
                {state.githubLink ? (
                  <span>
                    <a href={state.githubLink}>
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/null/external-GitHub-Logo-social-media-those-icons-flat-those-icons-2.png" />
                    </a>
                  </span>
                ) : (
                  ""
                )}
                {state.liveLink ? (
                  <span
                  style={{
                    margin:"0 7px"
                  }}>
                    <a href={state.liveLink}>
                    <img src="https://img.icons8.com/emoji/24/null/link-emoji.png" />
                    </a>
                  </span>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item>
                {state.topics && state.topics.map((ele)=>(
                    <span
                    style={{
                      fontSize:"0.7em",
                      display: "inline-block",
                      borderRadius: "14%",
                      backgroundColor: "rgb(203, 125, 242)",
                      padding: "4px",
                      color: "white",
                      margin:"2px",
                      fontWeight: "300"
                    }}>{ele.toUpperCase()}</span>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
          sx={{
            
          }}>

          </Grid>
        </Grid>
      </Fragment>
    );
}

export default Project;