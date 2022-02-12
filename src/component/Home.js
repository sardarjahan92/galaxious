import React from "react";
import { Grid } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
      alt: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
      alt: "Scotland",
    },
  ];
  const classes = useStyle();
  return (
    <React.Fragment>
      <Grid className={classes.main}>
        <Carousel
          autoPlay={true}
          autoFocus={true}
          NextIcon="next"
          fullHeightHover={false}
          emulateTouch={true} // Change the "inside" of the next button to "next"
          PrevIcon="prev"
          infiniteLoop={true}
        >
          {data.map((image) => (
            <div>
              <img src={image.image} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </React.Fragment>
  );
}

export default Home;

const useStyle = makeStyles({
  main: {
    width: "100%",
    height: "10%",

    borderBottom: "1px solid #61dafb",
  },
});
