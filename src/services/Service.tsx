import { Box, Stack, Typography } from "@mui/material";
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
            className="container-background"
            sx={{
              bgcolor: "#566327",
            }}
          />
          <Box className="content-box">
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                "@media (max-width: 1300px)": {
                  display: "unset",
                },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "60%",
                  "@media (max-width: 1300px)": {
                    width: "100%",
                  },
                }}
              >
                <Stack
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {intro && (
                    <Typography
                      fontFamily="Cormorant Garamond"
                      fontWeight={400}
                      variant={"h2"}
                      sx={{
                        height: "10%",
                        color: "white",
                        "@media (max-width: 600px)": {
                          fontSize: "2.5rem",
                          marginBottom: "0.5rem",
                        },
                      }}
                      marginBottom="1.5rem"
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
                      justifyContent="space-around"
                    >
                      <Typography
                        fontFamily="Questrial"
                        variant="h4"
                        sx={{
                          "@media (max-width: 1300px)": {
                            marginRight: "12rem",
                            marginBottom: "2rem",
                          },
                          "@media (max-width: 600px)": {
                            marginBottom: "0",
                          },
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontFamily="Questrial"
                        sx={{
                          fontSize: "1.3cqw",
                          "@media (max-width: 1300px)": {
                            fontSize: "1.2rem",
                            marginRight: "12rem",
                          },
                          "@media (max-width: 600px)": {
                            fontSize: "1rem",
                            marginRight: 0,
                          },
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
                            fontSize: "1.4cqw",
                            "@media (max-width: 1300px)": {
                              fontSize: "1.2rem",
                            },
                            "@media (max-width: 600px)": {
                              fontSize: "1.1rem",
                            },
                          }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  width: "40%",
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "2rem",
                  marginLeft: "2rem",
                  "@media (max-width: 1300px)": {
                    height: "15rem",
                    width: "unset",
                    aspectRatio: "1",
                    borderRadius: "15rem",
                    position: "absolute",
                    top: "-4rem",
                    right: "-2rem",
                    marginLeft: "0",
                  },
                  "@media (max-width: 600px)": {
                    height: "10rem",
                    top: "-3rem",
                    right: "-1rem",
                  },
                }}
              ></Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            className="container-background"
            sx={{
              bgcolor: "#dae59f",
            }}
          />
          <Box className="content-box">
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                "@media (max-width: 1300px)": {
                  display: "unset",
                },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "40%",
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "2rem",
                  marginRight: "2rem",
                  "@media (max-width: 1300px)": {
                    height: "15rem",
                    width: "unset",
                    aspectRatio: "1",
                    borderRadius: "15rem",
                    position: "absolute",
                    top: "-4rem",
                    right: "-2rem",
                    marginRight: "0",
                  },
                  "@media (max-width: 600px)": {
                    height: "10rem",
                    top: "-3rem",
                    right: "-1rem",
                  },
                }}
              ></Box>
              <Box
                sx={{
                  height: "100%",
                  width: "60%",
                  "@media (max-width: 1300px)": {
                    width: "100%",
                  },
                }}
              >
                <Stack
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {intro && (
                    <Typography
                      fontFamily="Cormorant Garamond"
                      fontWeight={400}
                      variant={"h2"}
                      sx={{
                        height: "10%",
                        color: "white",
                        "@media (max-width: 600px)": {
                          fontSize: "2.5rem",
                          marginBottom: "0.5rem",
                        },
                      }}
                      marginBottom="1.5rem"
                    >
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
                      justifyContent="space-around"
                    >
                      <Typography
                        fontFamily="Questrial"
                        variant="h4"
                        sx={{
                          "@media (max-width: 1300px)": {
                            marginRight: "12rem",
                            marginBottom: "2rem",
                          },
                          "@media (max-width: 600px)": {
                            marginBottom: "0",
                          },
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontFamily="Questrial"
                        sx={{
                          fontSize: "1.3cqw",
                          "@media (max-width: 1300px)": {
                            fontSize: "1.2rem",
                            marginRight: "12rem",
                          },
                          "@media (max-width: 600px)": {
                            fontSize: "1rem",
                            marginRight: 0,
                          },
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
                            fontSize: "1.4cqw",
                            "@media (max-width: 1300px)": {
                              fontSize: "1.2rem",
                            },
                            "@media (max-width: 600px)": {
                              fontSize: "1.1rem",
                            },
                          }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Service;
