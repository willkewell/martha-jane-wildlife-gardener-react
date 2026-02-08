import { Box, Stack, Typography } from "@mui/material";
import aboutImage from "../assets/martha-jane.png";

const About = () => {
  return (
    <Box id="about" className="container">
      <Box
        className="container-background"
        sx={{
          bgcolor: "#f1ebe6",
        }}
      />
      <Box
        className="content-box"
        sx={{
          textAlign: "start",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily="Cormorant Garamond"
            fontWeight={400}
            variant="h2"
            sx={{
              color: "black",
              width: "100%",
              "@media (max-width: 600px)": {
                textAlign: "center",
                marginTop: "2rem",
              },
            }}
          >
            About me
          </Typography>
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 600px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  maxWidth: "400px",
                  minWidth: "250px",
                  height: "fit-content",
                  // height: "100%",
                  marginRight: "2rem",
                  // marginBottom: "4rem",
                  "@media (max-width: 600px)": {
                    maxWidth: "250px",
                    minWidth: "150px",
                    marginBottom: "2rem",
                    marginRight: 0,
                  },
                }}
              >
                <img
                  src={aboutImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Stack
              display="flex"
              justifyContent="center"
              sx={{ height: "100%", maxWidth: "1100px" }}
            >
              <Typography
                fontFamily="Questrial"
                variant="h4"
                sx={{
                  marginBottom: "2rem",
                  fontSize: "1.7cqw",
                  color: "black",
                  textAlign: "start",
                  "@media (max-width: 600px)": {
                    fontSize: "0.8rem",
                    textAlign: "center",
                  },
                }}
              >
                Since starting my career in horticulture I have worked in
                private gardens and organic plant nurseries alongside training
                with both the RHS and Avon Wildlife Trust. With this, I aim to
                bring my knowledge of plants and gardening to every job with
                wildlife and organic principles in mind. I love creating and
                caring for beautiful spaces that act as a haven for my clients
                and come alive with the buzz of local wildlife, helping you to
                connect with nature by bringing it right to your doorstep.
              </Typography>
              <Typography
                fontFamily="Questrial"
                variant="h4"
                sx={{
                  fontSize: "1.7cqw",
                  color: "black",
                  textAlign: "start",
                  "@media (max-width: 600px)": {
                    fontSize: "0.8rem",
                    textAlign: "center",
                  },
                }}
              >
                I also hold a passion for food growing and am always on the
                lookout for weird and wonderful foods to grow that you would
                never find in the supermarket. The joy and excitement of growing
                your own food is something I love to share through my veg
                growing and food forest services. I truly believe there is
                nothing better than fresh, nutritious produce that you can get
                creative with in the kitchen.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
