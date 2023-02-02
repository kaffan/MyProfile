import { useTheme, useMediaQuery } from "@mui/material";


const AboutContent = () =>{
    const media = useMediaQuery('(max-width:600px)');
    const contentStyling = {
        fontSize:(media) ? "4vw" : "2vw",
        textShadow:"2px 1px 2px white",
        color:"#999797"
    }
    return(
        <>
          <p style={contentStyling}>
            My name is khan Affan sibgatullah. I am a frontend Developer
            and an aspiring full stack developer. I am an avid problem solver and
            a keen learner. I am a self taught developer with 2 years of learning and
            building experience in frontend development. 
            I always look for challenging tasks in my domain and I have a very strong
            foundation in javascript coding and building projects using javascript. I also 
            have a good hands on with Node.js for backend. I am great coffee lover and crazy
            for traditional Indian chai. I always look out for adventurous tasks that excites
            me. 
          </p>
        </>
    );
}

export default AboutContent;