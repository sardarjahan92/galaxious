import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Box, makeStyles, Typography } from "@material-ui/core";
import "react-tabs/style/react-tabs.css";

function ElectricalActuator() {
  function changeBackground(e) {
    e.target.style.background = "blue";
    e.target.style.color = "white";
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = "white";
    e.target.style.color = "black";
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxtop}>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            margin: "10px",
            textShadow: "5px 5px 5px #3af85f",
          }}
        >
          Electrical Service
        </Typography>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            textShadow: "5px 5px 5px rgb(66, 245, 147)",
          }}
        >
          We Provide the installation, repairing and commission of Electrical as
          well as Mechanical Machine to the industries
        </Typography>
      </Box>
      <div style={{ marginTop: "10px", alignItems: "center" }}>
        <Tabs
          forceRenderTabPanel
          defaultIndex={0}
          style={{ alignItems: "center" }}
        >
          <TabList>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              Transmitter
            </Tab>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              Control Wiring
            </Tab>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              Control Wiring
            </Tab>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              3-Phase Wiring
            </Tab>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              Electrical Panel
            </Tab>
            <Tab
              onMouseLeave={changeBackgroundLeave}
              onClickCapture={changeBackground}
            >
              Push Button Panel
            </Tab>
          </TabList>

          <TabPanel>
            <Tabs forceRenderTabPanel defaultIndex={1}>
              <TabList>
                <Tab
                  onMouseLeave={changeBackgroundLeave}
                  onClickCapture={changeBackground}
                >
                  Flow
                </Tab>
                <Tab
                  onMouseLeave={changeBackgroundLeave}
                  onClickCapture={changeBackground}
                >
                  Temperature
                </Tab>
                <Tab
                  onMouseLeave={changeBackgroundLeave}
                  onClickCapture={changeBackground}
                >
                  Pressure
                </Tab>
                <Tab
                  onMouseLeave={changeBackgroundLeave}
                  onClickCapture={changeBackground}
                >
                  Level
                </Tab>
              </TabList>

              <TabPanel>
                <p>
                  As the name suggests, these transmitters provide measurements
                  on the flow of liquid or fluid. This transmitter type consists
                  of a transmitter and a flow sensor in one product. This allows
                  it to generate an output up to 20mA. Flow transmitters are
                  designed using different technologies, these include
                  ultrasonic flow sensors, differential pressure flow sensors,
                  and velocity flow
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                  alt="Homer Simpson"
                />
              </TabPanel>

              <TabPanel>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                  <TabList>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Thermocouple Type
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      RTD Type
                    </Tab>
                  </TabList>

                  <p>
                    The design of temperature transmitters includes a
                    transmitter, and a temperature sensor. The sensor sends a
                    signal to the transmitters, which calculates the
                    temperature, and converts it into an output signal.
                  </p>

                  <TabPanel>
                    <p>
                      A temperature transmitter with a thermocouple sensor is
                      capable of calculating temperature by measuring the
                      electromotive force created by a change in process
                      temperature.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      This temperature transmitter comprises RTD sensors, which
                      change electrical resistance due to the change in process
                      temperature. The relationship between these two aspects is
                      used to calculate the temperature
                    </p>
                  </TabPanel>
                </Tabs>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                  alt="Marge Simpson"
                />
              </TabPanel>

              <TabPanel>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                  <TabList>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Absolute Transmitter
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Gauge Transmitter
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Differential Transmitter
                    </Tab>
                  </TabList>
                  <TabPanel>
                    This transmitter take vacuum pressure as its base, and then
                    measures process pressure
                  </TabPanel>

                  <TabPanel>
                    This type measures process pressure with the location’s
                    atmospheric pressure as a base
                  </TabPanel>

                  <TabPanel>
                    When sensing units are introduced to multiple pressures as
                    inputs, differential transmitters
                  </TabPanel>
                </Tabs>

                <p>
                  Oldest child and only son of Homer and Marge; brother of Lisa
                  and Maggie.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                  alt="Bart Simpson"
                />
              </TabPanel>

              <TabPanel>
                <Tabs forceRenderTabPanel defaultIndex={1}>
                  <TabList>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Point Level:
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Continuous Level:
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Ultrasonic Level Transmitter
                    </Tab>

                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Conductive Level
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Pneumatic Level
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Capacitance Level
                    </Tab>
                    <Tab
                      onMouseLeave={changeBackgroundLeave}
                      onClickCapture={changeBackground}
                    >
                      Hydrostatic based
                    </Tab>
                  </TabList>
                  <TabPanel>
                    These are designed to provide an output signal when a
                    particular measurement level has been reached. The output
                    signal can be an electrical signal to turn on a switch, or
                    an audible alarm
                  </TabPanel>

                  <TabPanel>
                    This type measures process pressure with the location’s
                    atmospheric pressure as a base
                  </TabPanel>

                  <TabPanel>
                    trasonic level transmitters allow for non-contact level
                    measurements of bulk solids, or viscous liquids.
                  </TabPanel>

                  <TabPanel>
                    This type is used to measure different types of liquids at
                    point level. Liquids can include water, caustic soda, and
                    hydrochloric acids, and other corrosive fluids.
                  </TabPanel>
                  <TabPanel>
                    These transmitters are ideal for applications that comprise
                    slurry or sludge. They can be used in applications that does
                    not have electricity.
                  </TabPanel>
                  <TabPanel>
                    This transmitter type is used to provide continuous
                    measurement of non-conductive liquids that have a high
                    dielectric constant.
                  </TabPanel>
                  <TabPanel>
                    As the name suggests, this transmitter relies on hydrostatic
                    pressure to determine the level of a liquid.
                  </TabPanel>
                </Tabs>

                <p>
                  Middle child and eldest daughter of Homer and Marge; sister of
                  Bart and Maggie.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                  alt="Lisa Simpson"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Philip J. Fry</Tab>
                <Tab>Turanga Leela</Tab>
                <Tab>Bender Bending Rodriguez</Tab>
                <Tab>Amy Wong</Tab>
                <Tab>Professor Hubert J. Farnsworth</Tab>
                <Tab>Doctor John Zoidberg</Tab>
              </TabList>
              <TabPanel>
                <p>
                  Protagonist, from the 20th Century. Delivery boy. Many times
                  great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                  alt="Philip J. Fry"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Mutant cyclops. Captain of the Planet Express Ship. Love
                  interest of Fry.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                  alt="Turanga Leela"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot
                  who is Fry's best friend. Built in Tijuana, Mexico, he is the
                  Planet Express Ship's cook.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                  alt="Bender Bending Rodriguez"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                  Kroker.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Many times great-nephew of Fry. CEO and owner of Planet
                  Express delivery company. Tenured professor of Mars
                  University.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                  alt="Professor Hubert J. Farnsworth"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Alien from Decapod 10. Planet Express' staff doctor and
                  steward. Has a medical degree and Ph.D in art history.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                  alt="Doctor John Zoidberg"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
      </React.Fragment>
  );
}

export default ElectricalActuator;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    flexBasis: "100%",
    flexShrink: 0,
    fontWeight: "bold",
  },
  boxtop: {
    overflowY:'scroll',
    marginTop: "110px",
    marginBottom: "20px",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
  },
  colorChange: {
    color: "blue",
  },
}));
