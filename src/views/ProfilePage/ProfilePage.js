import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/chan.jpg";
import twitch from "assets/img/apps/my-twitch-rec.svg";

import profileStyles from "assets/jss/material-kit-react/views/profilePage.js";
import { cardTitle } from "assets/jss/material-kit-react";

const styles = {
  ...profileStyles,
  cardTitle,
  appGridContainer: { margin: 0, width: "100%" },
  appGridItem: {
    display: "flex",
    justifyContent: "center",
  },
  appCard: {
    padding: "15px 0px",
    width: "20rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
};
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="chanrao.dev"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={6} sm={6} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Chan Rao</h3>
                    <h6>Software Engineer</h6>
                    <Button
                      link
                      className={classes.margin5}
                      color="transparent"
                      href="https://github.com/lichengrao"
                      target="_blank"
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Likes to tackle big challenges and solve interesting problems
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Portfolio",
                      tabIcon: Apps,
                      tabContent: (
                        <GridContainer
                          justify="center"
                          className={classes.appGridContainer}
                        >
                          <GridItem xs={12} className={classes.appGridItem}>
                            <Card className={classes.appCard}>
                              <Button
                                link
                                className={classes.margin5}
                                color="primary"
                                href="https://my-twitch-rec.chanrao.dev"
                                target="_blank"
                              >
                                <img
                                  style={{
                                    width: "230px",
                                    justifySelf: "end",
                                    alignSelf: "center",
                                  }}
                                  className={classes.imgCardTop}
                                  src={twitch}
                                  alt="my-twitch-rec"
                                />
                              </Button>
                              <CardBody>
                                <h4 className={classes.cardTitle}>
                                  my-twitch-rec
                                </h4>
                                <p>
                                  Personalized Twitch Resources Recommendation
                                  Engine
                                  <br />
                                  <br />
                                  <i>
                                    React, Ant Design, RESTful APIs w/ Java
                                    servlets, MySQL, AWS EC2
                                  </i>
                                </p>
                                <div className={classes.buttons}>
                                  <Button
                                    color="primary"
                                    href="https://my-twitch-rec.chanrao.dev/"
                                    target="_blank"
                                  >
                                    Visit
                                  </Button>
                                  <Button
                                    color="github"
                                    href="https://github.com/lichengrao/my-twitch-rec-backend"
                                    target="_blank"
                                  >
                                    GitHub
                                  </Button>
                                </div>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
