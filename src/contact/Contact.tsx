import { Box, Grid, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import contactImage from "../assets/contact.png";

const Contact = () => {
  return (
    <Box
      id="contact"
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
            backgroundImage: `url(${contactImage})`,
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
          sx={{ height: "100%", textAlign: "left", color: "white" }}
        >
          <Grid size={{ xs: 6 }} sx={{ height: "100%" }}>
            <Stack>
              <Typography
                fontFamily="Cormorant Garamond"
                fontWeight="400"
                variant="h1"
                marginBottom="2rem"
              >
                Get in touch
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
                marginBottom="1rem"
              >
                <PhoneIcon sx={{ fontSize: "5rem" }} />
                <Typography fontFamily="Questrial" variant="h4">
                  07437 924512
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
                marginBottom="1rem"
              >
                <EmailIcon sx={{ fontSize: "5rem" }} />
                <Typography fontFamily="Questrial" variant="h4">
                  info@marthajanewildlifegardener
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
                marginBottom="1rem"
              >
                <InstagramIcon sx={{ fontSize: "5rem" }} />
                <Typography fontFamily="Questrial" variant="h4">
                  @marthajanewildlifegardener
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
                marginBottom="1rem"
              >
                <FacebookIcon sx={{ fontSize: "5rem" }} />
                <Typography fontFamily="Questrial" variant="h4">
                  Martha Jane Wildlife Gardener
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
