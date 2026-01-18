import { Box, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <Box
      id="gallery"
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
          bgcolor: "#0e140f",
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
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontFamily="Cormorant Garamond" variant="h1">
            GALLERY
          </Typography>
          <Typography fontFamily="Cormorant Garamond" variant="h1">
            COMING SOON
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
