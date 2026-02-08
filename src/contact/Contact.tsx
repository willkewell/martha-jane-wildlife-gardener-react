import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import contactImage from "../assets/contact.png";

const Contact = () => {
  return (
    <Box id="contact" className="container">
      <Box
        className="container-background"
        sx={{
          bgcolor: "black",
        }}
      >
        <Box
          className="container-background-image"
          sx={{
            backgroundImage: `url(${contactImage})`,
            opacity: "50%",
          }}
        />
      </Box>
      <Box className="content-box">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            textAlign: "left",
            color: "white",
          }}
        >
          <Stack>
            <Typography
              fontFamily="Cormorant Garamond"
              fontWeight="400"
              variant="h1"
              marginBottom="2rem"
            >
              Get in touch
            </Typography>
            <Stack sx={{ gap: "1rem" }}>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
                marginRight="2rem"
              >
                <PhoneIcon sx={{ fontSize: "clamp(3rem, 5cqw, 5rem)" }} />
                <Typography
                  fontFamily="Questrial"
                  variant="h4"
                  fontSize="clamp(1rem, 4cqw, 2rem)"
                >
                  07437 924512
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
              >
                <EmailIcon sx={{ fontSize: "clamp(3rem, 5cqw, 5rem)" }} />
                <Typography
                  fontFamily="Questrial"
                  variant="h4"
                  fontSize="clamp(1rem, 4cqw, 2rem)"
                >
                  info@marthajanewildlifegardener
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
              >
                <InstagramIcon sx={{ fontSize: "clamp(3rem, 5cqw, 5rem)" }} />
                <Typography
                  fontFamily="Questrial"
                  variant="h4"
                  fontSize="clamp(1rem, 4cqw, 2rem)"
                >
                  @marthajanewildlifegardener
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="left"
                alignItems="center"
              >
                <FacebookIcon sx={{ fontSize: "clamp(3rem, 5cqw, 5rem)" }} />
                <Typography
                  fontFamily="Questrial"
                  variant="h4"
                  fontSize="clamp(1rem, 4cqw, 2rem)"
                >
                  Martha Jane Wildlife Gardener
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
