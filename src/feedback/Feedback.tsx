import { Box, Grid, Stack, Typography } from "@mui/material";

const Feedback = () => {
  return (
    <Box
      id="feedback"
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <Stack>
          <Typography
            variant="h2"
            fontSize="6cqw"
            sx={{ marginBottom: "2rem" }}
            fontFamily="Cormorant Garamond"
            fontWeight={400}
          >
            Client feedback
          </Typography>
          <Grid
            container
            size={{ xs: 12 }}
            columnSpacing={4}
            sx={{ width: "100%", height: "45vh" }}
          >
            <Grid
              size={{ xs: 4 }}
              sx={{
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h3"
                fontFamily="Questrial"
                fontWeight="500"
                marginBottom="2rem"
              >
                ...
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 4 }}
              sx={{
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h5"
                fontFamily="Questrial"
                fontWeight="500"
                marginBottom="2rem"
              >
                Hi Martha - just wanted to say thank you for today. After you
                left I kept looking and was so pleased with that you've done,
                you've given me my garden back! Thanks for that!
              </Typography>
              <Typography variant="h6" fontFamily="Questrial" fontWeight="500">
                ~ Marie
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 4 }}
              sx={{
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Typography
                variant="h3"
                fontFamily="Questrial"
                fontWeight="500"
                marginBottom="2rem"
              >
                ...
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Feedback;
