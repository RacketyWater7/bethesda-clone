import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "gray.100",
//   ...theme.typography.body2,
//   padding: 0,
//   margin: 0,
//   boxSizing: "border-box",
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const GridImage = styled(CardMedia)(({ theme }) => ({
  left: 0,
  top: 0,
  height: "100%",
  objectFit: "scale-down",
  borderRadius: "inherit",
}));
const GridImageWrapper = styled("div")(({ theme }) => ({
  // paddingBottom: "30%",
  display: "block",
  position: "relative",
  borderRadius: "3.5px",
  // border: "1px solid ",
}));
const GridText = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  color: "white",
}));

function Main() {
  return (
    <Box
      sx={{ flexGrow: 1, height: "auto", width: "auto", pl: "3%", pr: "3%" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <GridImageWrapper>
            <GridImage component={"img"} src="gridImage.jpg" />
            <GridText>
              <Typography variant="h6">Grid Text</Typography>
              <h3>Ghostwire: Tokyo - Prelude Available Now for Free </h3>
              <p>GhostWire: Tokyo</p>
            </GridText>
          </GridImageWrapper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
