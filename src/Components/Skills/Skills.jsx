import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion"
import { MotionConfig } from 'framer-motion';

const Skills = () =>{
    const skills = ['https://img.icons8.com/officel/80/null/react.png',
                    `https://img.icons8.com/color/80/null/redux.png`,
                    `https://img.icons8.com/color/80/null/material-ui.png`,
                    `https://img.icons8.com/color/80/null/javascript--v1.png`,
                    `https://img.icons8.com/color/80/null/css3.png`,
                    `https://img.icons8.com/external-tal-revivo-color-tal-revivo/80/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png`,
                    `https://img.icons8.com/dotty/80/null/api-settings.png`,
                    `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/80/null/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-shadow-tal-revivo.png`
                  ];
    const skillset = ['React.js','Redux','Material UI','Javscript','CSS3','HTML5','REST API','Framer Motion'];              
    // const icons = [<FontAwesomeIcon icon={faReact} />,
    // <FontAwesomeIcon icon={faRedux} />]
    const match = useMediaQuery(`(max-width:900px)`);
    const match1 = useMediaQuery(`(min-width:650px)`);
    return (
      <>
        <div style={{ padding: "4rem 2rem" }}>
          <div
            style={{
              textAlign: match1 ? "left" : "center",
              padding: "0 4rem",
            }}
          >
            <h1
              style={{
                color: `rgb(36, 36, 36)`,
                // textShadow: `10px 7px 3px #5f5c5c`,
                fontSize: "2.0rem",
                fontFamily:"Montserrat, sans-serif"
              }}
            >
              SKILLS
            </h1>
          </div>
          <Grid
            container
            rowSpacing={6}
            direction="row"
            style={{
              padding: match ? "5rem 2rem" : "5rem 0",
            }}
          >
            {skills.map((ele, i) => (
              <Grid item xs={6} sm={3}>
                <motion.div
                  initial = {{scale : 0 }}
                  viewport={{
                    once : true,
                    amount : 0.3
                  }}
                  whileInView={{
                    scale : [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4 ,1, 1.2, 1.4, 1]
                  }}
                  transition ={{
                    type:"spring",
                    ease : "easeIn",
                    duration : 1,
                  }}
                >
                  <Grid container direction="column" rowSpacing={2}>
                    <Grid item>
                      <img src={ele} />
                    </Grid>
                    <Grid item>{skillset[i]}</Grid>
                  </Grid>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
}

export default Skills;