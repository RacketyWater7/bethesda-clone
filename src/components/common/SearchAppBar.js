import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { CloseSharp } from "@mui/icons-material";
import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const DrawerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));
const DrawerNavbar = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-around",
  backgroundColor: theme.palette.background.paper,
}));

const SocialIcons = styled("div")(({ theme }) => ({
  flex: "50%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const ListsContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));
const ListColumn = styled("div")(({ theme }) => ({
  flex: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  // alignItems: ""
}));
const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  // alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
}));

export default function SearchAppBar() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const drawerContent = () => (
    <Box
      sx={{
        width: {
          xs: 200,
          sm: 500,
          md: 600,
          lg: 650,
          xl: 700,
        },
      }}
      role="presentation"
    >
      <DrawerWrapper>
        <DrawerNavbar>
          <span>
            <IconButton
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              edge="start"
              aria-label="close"
            >
              <CloseSharp sx={{ flex: "10%" }} />
            </IconButton>
          </span>
          {/* center align below text in its own area */}
          <p
            style={{
              flex: "40%",
              fontSize: "30px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Bethesda
          </p>
          <SocialIcons>
            <Facebook />
            <Twitter />
            <YouTube />
            <Instagram />
          </SocialIcons>
        </DrawerNavbar>
        <ListsContainer>
          <ListColumn>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                GAMES
              </p>

              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {[
                  "Starfield",
                  "Redfall",
                  "DOOM Eternal",
                  "Fallout 76",
                  "DEATHLOOP",
                  "Ghostwire: Tokyo",
                  "The Elder Scrolls Online: Blackwood",
                  "The Elder Scrolls V: Skyrim Anniversary Edition",
                  "The Elder Scrolls: Blades",
                  "All Games",
                ].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                MODS
              </p>
              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {["Fallout 4", "Skyrim Special Edition"].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </ListColumn>
          <ListColumn>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                COMMUNITY
              </p>
              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {["Community Hub", "DOOM Slayers Club"].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                NEWS
              </p>
              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {["Latest"].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                SHOP
              </p>
              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {["Digital Store", "Merchandise", "Redeem Code"].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                SUPPORT
              </p>
              <List
                sx={[
                  { padding: "0" },
                  {
                    "&:hover": {
                      cursor: "pointer",
                    },
                  },
                ]}
              >
                {["Service Status", "Help Site", "Manuals"].map((text) => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </ListColumn>
        </ListsContainer>
      </DrawerWrapper>

      <Box
        bgcolor="#f7f7f7"
        px={{ xs: 5, sm: 7 }}
        pt={{ xs: 5, sm: 10 }}
        pb={4}
      >
        <Footer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Download sx={{ marginRight: "3px" }} />
              {"Bethesda Launcher"}
            </div>
            <Button
              size="large"
              sx={{
                border: "1px solid black",
                borderRadius: "0",
                px: {
                  xs: 2,
                  sm: 2,
                  md: 5,
                },
              }}
            >
              DOWNLOAD
            </Button>
          </div>
          <p
            style={{
              fontSize: "9px",
              flex: "1",
              alignSelf: "center",
              paddingTop: "5px",
            }}
          >
            OS: Windows 7 / 8 / 8.1 / 10 Processor: 2.5Ghz Intel Pentium 4 / AMD
            Athlon 64 RAM: 1GB, Disk Space: 250MB
          </p>
        </Footer>
      </Box>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
      <AppBar position="fixed">
        <Toolbar color="primary">
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Bethessda
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
