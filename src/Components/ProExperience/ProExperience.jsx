import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion, MotionConfig } from "framer-motion";
import { Fragment } from "react";

const CommonAni = (props) => {
    return (
        <Fragment>
            <motion.div
                style={{ display: "inline-block" }}
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: [0.3, 0.6, 0.9, 1],
                    // width:"100%"
                }}
                transition={{
                    duration: 1,
                    ease: "easeIn",
                }}
                viewport={{
                    amount: 0.4,
                    once: true,
                }}
            >
                {props.children}
            </motion.div>
        </Fragment>
    );
};
const ProExperience = () => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width:700px)");
    const media1 = useMediaQuery(`(max-width:400px)`);
    const styles = {
        fontSize: `0.7em`,
        borderRadius: "14%",
        display: "inline-block",
        padding: "4px",
        backgroundColor: "rgb(203, 125, 242)",
        margin: "2px",
        color: "white",
        fontWeight: "300",
    };
    return (
        <Fragment>
            <Grid
                container
                direction="column"
                rowSpacing={media ? 4 : 7}
                sx={{
                    margin: "1.5em 0",
                }}
            >
                <Grid item>
                    <motion.div
                        initial={{
                            opacity: 0,
                            transform: "translateX(-50px)",
                        }}
                        whileInView={{
                            transform: "translateX(0px)",
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.5,
                        }}
                        viewport={{
                            amount: 0.4,
                            once:true
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "montserrat",
                                display: "inline-block",
                                borderBottom: "solid 4px rgb(255,255,255)",
                            }}
                        >
                            EXPERIENCE
                        </h1>
                    </motion.div>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        direction={media ? "column" : "row"}
                        rowSpacing={media ? 4 : 0}
                        columnSpacing={media ? 0 : 4}
                        sx={{
                            justifyContent: "center",
                            alignItems: media ? "flex-start" : "center",
                            margin: media ? "auto" : "0",
                            width: media ? "70%" : "100%",
                            // padding:(media1) ? "2.5em" : "0"
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                width: media ? "100%" : "25%",
                            }}
                        >
                            <motion.div
                                initial={{ transform: "scale(0)" }}
                                whileInView={{
                                    transform: "scale(1)",
                                }}
                                transition={{
                                    duration: 0.7,
                                    once: true,
                                }}
                                viewport={{
                                    amount: 0.4,
                                    once: true,
                                }}
                            >
                                <img
                                    style={{
                                        width: media && !media1 ? "80%" : "100%",
                                        height: media && !media1 ? "80%" : "100%",
                                        boxShadow: "2px 2px 10px grey",
                                        borderRadius: "7%",
                                    }}
                                    src="/merkle.jpeg"
                                />
                            </motion.div>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                width: media ? "100%" : "50%",
                            }}
                        >
                            <Grid
                                container
                                direction="column"
                                rowSpacing={2}
                                sx={{
                                    alignItems: "flex-start",
                                    textAlign: "left",
                                }}
                            >
                                <Grid item>
                                    <CommonAni>
                                        <span
                                            style={{
                                                fontFamily: "montserrat",
                                            }}
                                        >
                                            ASSOCIATE SOFTWARE ENGINEER
                                        </span>
                                    </CommonAni>
                                </Grid>
                                <Grid item>
                                    <CommonAni>
                                        <span
                                            style={{
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            Merkle
                                        </span>
                                    </CommonAni>
                                </Grid>
                                <br />
                                <Grid item>
                                    <CommonAni>
                                        <span
                                            style={{
                                                fontFamily: "Roboto",
                                            }}
                                        >
                                            As a part of Merkle, I am working as an Email developer
                                            since the inception of my tenure. I trained on Javascript
                                            and was aligned with Merkle NL, under them I developed
                                            Emails for clients such as Vodafone Ziggo, hollandsnieuwe,
                                            KLM - Royal Dutch Airlines, etc.
                                        </span>
                                    </CommonAni>
                                </Grid>
                                <Grid item>
                                    <CommonAni>
                                        <span style={styles}>HTML</span>
                                        <span style={styles}>CSS</span>
                                        <span style={styles}>EMAIL DEVELOPMENT</span>
                                    </CommonAni>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default ProExperience;
