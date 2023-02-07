import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion, MotionConfig } from "framer-motion";
import { Fragment } from "react";

const ProExperience = () =>{
    const theme = useTheme();
    const media = useMediaQuery('(max-width:700px)');
    const media1 = useMediaQuery(`(max-width:400px)`);
    const styles = {
        fontSize:`0.7em`,
        borderRadius: "14%",
        display: "inline-block",
        padding: "4px",
        backgroundColor: "rgb(203, 125, 242)",
        margin:"2px",
        color: "white",
        fontWeight: "300"
    }
    return (
        <Fragment>
            <Grid container direction="column" rowSpacing={7}
            sx={{
                // margin:"1.5em",
            }}>
                <Grid item>
                <motion.div
                 initial={{
                    opacity:0,
                    transform:"translateY(300px)"
                }}
                whileInView={{
                    transform:"translateY(0px)",
                    opacity:[0.2,0.4,0.6,1]
                }}
                transition={{
                    ease:"easeIn",
                    duration: 0.7
                }}
                viewport={{
                    amount : 0.8
                }}
                >
                    <h1
                    style={{
                        fontFamily:"montserrat",
                        display:"inline-block",
                        borderBottom:"solid 4px rgb(255,255,255)"
                    }}>EXPERIENCE</h1>
                </motion.div>
                </Grid>

                <Grid item>
                    <Grid container direction={(media) ? "column" : "row"} 
                    rowSpacing={(media) ? 4 : 0}
                    columnSpacing={(media) ? 0 : 4}
                    sx={{
                        justifyContent:"center",
                        alignItems:(media) ? "flex-start" : "center",
                        margin:(media) ? ((media1) ? "0" : "auto") : "0",
                        width: (media) ? ((media1) ? "100%" : "70%") : "100%",
                        padding:(media1) ? "16px" : "0"
                    }}>
                        <Grid item
                        sx={{
                            width:(media) ? "100%" : "25%",
                            
                        }}>
                            <img 
                            style={{
                                width:(media) ? "80%" : "100%",
                                height:(media) ? "80%" : "100%",
                                boxShadow:"2px 2px 10px grey",
                                borderRadius:"7%"
                            }} src="/merkle.jpeg"/>
                        </Grid>
                        <Grid item
                        sx={{
                            width:(media) ? "100%" : "50%"
                        }}>
                            <Grid container direction="column" rowSpacing={2}
                            sx={{
                                alignItems:"flex-start",
                                textAlign:"left"
                            }}>
                                <Grid item>
                                    <span
                                    style={{
                                        fontFamily:"montserrat"
                                    }}>ASSOCIATE SOFTWARE ENGINEER</span>
                                </Grid>
                                <Grid item>
                                    <span 
                                    style={{
                                        fontFamily:"Montserrat"
                                    }}>Merkle</span>
                                </Grid>
                                <br />
                                <Grid item>
                                    <span
                                    style={{
                                        fontFamily:"Roboto"
                                    }}>
                                        As a part of Merkle, I am working as an Email developer since the inception of my tenure.
                                        I trained on Javascript and was aligned with Merkle NL, under them I developed Emails for clients
                                        such as Vodafone Ziggo, hollandsnieuwe, KLM - Royal Dutch Airlines, etc.
                                    </span>
                                </Grid>
                                <Grid item>
                                <span style={styles}>HTML</span>
                                <span style={styles}>CSS</span>
                                <span style={styles}>EMAIL DEVELOPMENT</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default ProExperience;