import { Grid } from "@mui/material"
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
        <Grid container columnSpacing={2}
          direction={(props.k%2!=0) ? "row-reverse" : "row"}
        >
          <Grid item
          sx={{
          }}>
            <img src={img} />
          </Grid>
          <Grid item
          sx={{
            flexWrap:"wrap",
            width:"40%"
          }}>
            <Grid container rowSpacing={1} direction="column"
            sx={{
                textAlign:(props.k%2!=0)?"right":"left"
            }}>
              <Grid item>{state.title}</Grid>
              <Grid item>{state.description}</Grid>
              <br />
              <Grid item>
                {state.githubLink ? (
                  <span>
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/null/external-GitHub-Logo-social-media-those-icons-flat-those-icons-2.png" />
                    <a href={state.githubLink}></a>
                  </span>
                ) : (
                  ""
                )}
                {state.liveLink ? (
                  <span>
                    <img src="https://img.icons8.com/emoji/24/null/link-emoji.png" />
                    <a href={state.liveLink}></a>
                  </span>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item>
                {state.topics && state.topics.map((ele)=>(
                    <span>{ele.toUpperCase()}</span>
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