import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, useMediaQuery } from '@mui/material';

const Skills = () =>{
    const skills = ['https://img.icons8.com/officel/80/null/react.png',
                    `https://img.icons8.com/color/80/null/redux.png`,
                    `https://img.icons8.com/color/80/null/material-ui.png`,
                    `https://img.icons8.com/color/80/null/javascript--v1.png`,
                    `https://img.icons8.com/color/80/null/css3.png`,
                    `https://img.icons8.com/external-tal-revivo-color-tal-revivo/80/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png`,
                    `https://img.icons8.com/dotty/80/null/api-settings.png`
                  ];
    const skillset = ['React.js','Redux','Material UI','Javscript','CSS3','HTML5','REST API'];              
    // const icons = [<FontAwesomeIcon icon={faReact} />,
    // <FontAwesomeIcon icon={faRedux} />]
    const match = useMediaQuery(`(max-width:900px)`);
    const match1 = useMediaQuery(`(min-width:650px)`);
    return (
        <>
          <div 
          style={{ padding:"4rem 2rem"}}>
            <div
            style={{
              textAlign: (match1) ? "left" : "center",
              padding:"0 4rem"
            }}>
              <h1
              style={{
                color: `rgb(36, 36, 36)`,
                textShadow : `10px 7px 3px #5f5c5c`,
                fontSize:"2.5rem"
              }}>Skills</h1>
            </div>
            <Grid container rowSpacing={6} direction={(match1) ? "row" : "column"}
            style={{
              padding: (match) ? "5rem 2rem" : "5rem 0"
            }}>
              {
                skills.map((ele,i)=>( 
                  <Grid item sm={3}>
                    <Grid container direction="column" rowSpacing={2}>
                      <Grid item><img src={ele} /></Grid>
                      <Grid item>{skillset[i]}</Grid>
                    </Grid>
                  </Grid>
                ))
              }
            </Grid>
          </div>
        </>
    );
}

export default Skills;