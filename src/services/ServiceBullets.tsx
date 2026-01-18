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
