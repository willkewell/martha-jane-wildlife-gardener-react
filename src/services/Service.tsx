import { Box, Grid, Stack, Typography } from "@mui/material";
import "./Service.css";
import ServiceBullets from "./ServiceBullets";

const Service = ({
  flipped,
  title,
  text,
  bullets,
  price,
  image,
  intro,
}: {
  flipped: boolean;
  title: string;
  text: string;
  bullets?: string[];
  price: string[];
  image: string;
  intro?: boolean;
}) => {
  return (
    <Box sx={{ height: "100vh", position: "relative", textAlign: "left" }}>
      {!flipped ? (
        <>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#566327",
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
              <Grid size={{ xs: 7 }}>
                <Stack sx={{ height: "100%" }}>
                  {intro && (
                    <Typography
                      fontFamily="Cormorant Garamond"
                      fontWeight={400}
                      variant={"h2"}
                      sx={{ height: "10%" }}
                      marginBottom="1rem"
                    >
                      My Services
                    </Typography>
                  )}
                  <Box
                    sx={{
                      height: intro ? "90%" : "100%",
                      bgcolor: "#dae59f",
                      borderRadius: "2rem",
                      padding: "2rem 1rem 2rem 1rem",
                      color: "black",
                    }}
                  >
                    <Stack
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Typography
                        fontFamily="Questrial"
                        variant="h4"
                        sx={{ marginBottom: "1rem" }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontFamily="Questrial"
                        sx={{
                          marginBottom: "1rem",
                          fontSize: "1.3cqw",
                        }}
                      >
                        {text}
                      </Typography>
                      {bullets && <ServiceBullets bullets={bullets} />}
                      {price.map((p) => (
                        <Typography
                          fontFamily="Cormorant Garamond"
                          fontWeight={700}
                          sx={{
                            marginBottom: "1rem",
                            fontSize: "1.4cqw",
                          }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
              <Grid size={{ xs: 5 }}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "2rem",
                    marginLeft: "2rem",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              bgcolor: "#dae59f",
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
              <Grid size={{ xs: 5 }}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "2rem",
                    marginRight: "2rem",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 7 }}>
                <Stack sx={{ height: "100%" }}>
                  {intro && (
                    <Typography variant={"h3"} sx={{ height: "10%" }}>
                      My Services
                    </Typography>
                  )}
                  <Box
                    sx={{
                      height: intro ? "90%" : "100%",
                      bgcolor: "#77566a",
                      borderRadius: "2rem",
                      padding: "2rem 1rem 2rem 1rem",
                      color: "white",
                    }}
                  >
                    <Stack
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Typography
                        fontFamily="Questrial"
                        variant="h4"
                        sx={{ marginBottom: "1rem" }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontFamily="Questrial"
                        sx={{
                          marginBottom: "1rem",
                          fontSize: "1.3cqw",
                        }}
                      >
                        {text}
                      </Typography>
                      {bullets && <ServiceBullets bullets={bullets} />}
                      {price.map((p) => (
                        <Typography
                          fontFamily="Cormorant Garamond"
                          fontWeight={700}
                          sx={{
                            marginBottom: "1rem",
                            fontSize: "1.4cqw",
                          }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Service;
