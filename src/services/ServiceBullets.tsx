import { Box, Grid, Typography } from "@mui/material";

const ServiceBullets = ({ bullets }: { bullets: string[] }) => {
  return (
    <Box>
      <Grid container size={{ xs: 12 }}>
        {bullets.map((bullet) => (
          <Grid size={{ xs: 6 }}>
            <Typography
              sx={{
                marginBottom: "1rem",
                fontSize: "1.3cqw",
                "@media (max-width: 1300px)": {
                  fontSize: "0.85rem",
                },
                "@media (max-width: 600px)": {
                  fontSize: "0.7rem",
                },
              }}
            >
              {bullet}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceBullets;
