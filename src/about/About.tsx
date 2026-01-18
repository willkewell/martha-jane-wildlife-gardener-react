import { Box, Grid, Typography } from "@mui/material";
import aboutImage from "../assets/martha-jane.png";

const About = () => {
  return (
    <Box
      id="about"
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
          bgcolor: "#f1ebe6",
        }}
      />
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
        <Grid container size={{ xs: 12 }} sx={{ height: "100%" }}>
          <Grid size={{ xs: 4 }} sx={{ textAlign: "left" }}>
            <Typography
              fontFamily="Cormorant Garamond"
              fontWeight={400}
              variant="h2"
              sx={{ maxHeight: "20%", color: "black" }}
            >
              About me
            </Typography>
            <Box
              sx={{
                backgroundImage: `url(${aboutImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "80%",
                marginRight: "4rem",
                zIndex: 1030,
              }}
            ></Box>
          </Grid>
          <Grid
            size={{ xs: 8 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              fontFamily="Questrial"
              variant="h4"
              sx={{
                marginBottom: "2rem",
                fontSize: "1.7cqw",
                color: "black",
                textAlign: "start",
              }}
            >
              Since starting my career in horticulture I have worked in private
              gardens and organic plant nurseries alongside training with both
              the RHS and Avon Wildlife Trust. With this, I aim to bring my
              knowledge of plants and gardening to every job with wildlife and
              organic principles in mind. I love creating and caring for
              beautiful spaces that act as a haven for my clients and come alive
              with the buzz of local wildlife, helping you to connect with
              nature by bringing it right to your doorstep.
            </Typography>
            <Typography
              fontFamily="Questrial"
              variant="h4"
              sx={{
                fontSize: "1.7cqw",
                color: "black",
                textAlign: "start",
              }}
            >
              I also hold a passion for food growing and am always on the
              lookout for weird and wonderful foods to grow that you would never
              find in the supermarket. The joy and excitement of growing your
              own food is something I love to share through my veg growing and
              food forest services. I truly believe there is nothing better than
              fresh, nutritious produce that you can get creative with in the
              kitchen.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
