import { Box, Stack, Typography } from "@mui/material";
import headerImage from "../assets/header.png";
import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <Box id="header" className="container">
      <Box
        className="container-background"
        sx={{
          bgcolor: "black",
        }}
      >
        <Box
          className="container-background-image"
          sx={{
            backgroundImage: `url(${headerImage})`,
            opacity: "50%",
          }}
        />
      </Box>
      <Box
        className="content-box"
        display="flex"
        justifyContent="space-between"
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column-reverse",
            justifyContent: "start",
          },
        }}
      >
        <Stack
          sx={{
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              marginRight: "1rem",
              textAlign: "left",
              fontFamily: "Cormorant Garamond",
              fontWeight: "700",
              color: "#f7e8ca",
              fontSize: "clamp(2rem, 9vw, 11rem)",
              lineHeight: "clamp(1.8rem, 8vw, 10rem)",
              "@media (max-width: 600px)": {
                fontSize: "3rem",
                lineHeight: "3rem",
              },
            }}
          >
            Wildlife-friendly gardening services
          </Typography>
          <Typography
            variant="h3"
            sx={{
              height: "40%",
              textAlign: "left",
              fontSize: "clamp(0.2rem, 2.5vw, 2.8rem)",
              color: "white",
              "@media (max-width: 600px)": {
                fontSize: "1rem",
              },
            }}
          >
            Beautiful gardens created and cared for around the Bristol area.
            Make your space come alive with the buzz of local wildlife.
          </Typography>
        </Stack>
        <Box
          sx={{
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "end",
              marginBottom: "4rem",
            },
          }}
        >
          <Box
            sx={{
              top: "1rem",
              right: "1rem",
              maxWidth: "375px",
              height: "200px",
              paddingLeft: "1rem",
              overflow: "hidden",
              "@media (max-width: 600px)": {
                maxWidth: "100px",
                height: "40px",
              },
            }}
          >
            <img
              src={logo}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
