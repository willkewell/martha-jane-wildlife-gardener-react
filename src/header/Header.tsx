import { Box, Grid, Stack, Typography } from "@mui/material";
import headerImage from "../assets/header.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Box
      id="header"
      sx={{
        position: "relative",
        margin: 0,
        padding: 0,
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "black",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${headerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            opacity: "50%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "calc(100% - 16rem)",
          height: "calc(100vh - 16rem)",
          margin: "8rem",
        }}
      >
        <Grid
          container
          size={{ xs: 12 }}
          sx={{ height: "100%", justifyContent: "space-between" }}
        >
          <Grid size={{ xs: 8 }} sx={{ height: "100%" }}>
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  height: "60%",
                  maxHeight: "60%",
                  // padding: "6rem 6rem 0 6rem",
                  marginRight: "2rem",
                  marginBottom: "2rem",
                  textAlign: "left",
                  fontSize: "8.4cqw",
                  fontFamily: "Cormorant Garamond",
                  fontWeight: "700",
                  lineHeight: "8cqw",
                  color: "#f7e8ca",
                }}
              >
                Wildlife-friendly gardening services
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  height: "40%",
                  padding: "1rem",
                  textAlign: "left",
                  fontSize: "2cqw",
                  color: "white",
                }}
              >
                Beautiful gardens created and cared for around the Bristol area.
                Make your space come alive with the buzz of local wildlife.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 3 }}>
            <Box
              sx={{
                position: "relative",
                width: "calc(100% - 4rem)",
                paddingTop: "40.2%",
                overflow: "hidden",
                margin: "0 2rem 0 2rem",
              }}
            >
              <img
                src={logo}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
