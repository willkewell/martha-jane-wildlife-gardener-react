import { Box, Stack, Typography } from "@mui/material";
import "./feedback.css";

const Feedback = () => {
  return (
    <Box id="feedback" className="container">
      <Box
        className="container-background"
        sx={{
          bgcolor: "#f1ebe6",
        }}
      />
      <Box
        className="content-box"
        sx={{
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
            fontSize="clamp(3rem, 6cqw, 8rem)"
            sx={{ marginBottom: "2rem" }}
            fontFamily="Cormorant Garamond"
            fontWeight={400}
          >
            Client feedback
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "45vh",
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <Box
              className="placeholder-feedback"
              sx={{
                height: "300px",
                width: "300px",
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
            </Box>
            <Box
              sx={{
                height: "300px",
                width: "300px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
                "@media (max-width: 600px)": {
                  width: "200px",
                  height: "200px",
                },
              }}
            >
              <Typography
                variant="h5"
                fontFamily="Questrial"
                fontWeight="500"
                marginBottom="2rem"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "1.1rem",
                  },
                }}
              >
                Hi Martha - just wanted to say thank you for today. After you
                left I kept looking and was so pleased with that you've done,
                you've given me my garden back! Thanks for that!
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Questrial"
                fontWeight="500"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "1.2rem",
                  },
                }}
              >
                ~ Marie
              </Typography>
            </Box>
            <Box
              className="placeholder-feedback"
              sx={{
                height: "300px",
                width: "300px",
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
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Feedback;
