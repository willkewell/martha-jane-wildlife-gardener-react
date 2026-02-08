import { Box, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <Box id="gallery" className="container">
      <Box
        className="container-background"
        sx={{
          bgcolor: "#0e140f",
        }}
      />
      <Box className="content-box">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography
            fontFamily="Cormorant Garamond"
            variant="h1"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "4rem",
              },
            }}
          >
            GALLERY
          </Typography>
          <Typography
            fontFamily="Cormorant Garamond"
            variant="h1"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "4rem",
              },
            }}
          >
            COMING SOON
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
