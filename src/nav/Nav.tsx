import "./nav.css";
import { Grid } from "@mui/material";

const Nav = () => {
  return (
    <nav>
      <Grid
        container
        size={{ xs: 12 }}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <Grid size={2}>
          <a href="#about">
            <span className="nav-text">About me</span>
          </a>
        </Grid>
        <Grid size={2}>
          <a href="#services">
            <span className="nav-text">My services </span>
          </a>
        </Grid>
        <Grid size={2}>
          <a href="#feedback">
            <span className="nav-text">Testimonials </span>
          </a>
        </Grid>
        <Grid size={2}>
          <a href="#gallery">
            <span className="nav-text">Gallery </span>
          </a>
        </Grid>
        <Grid size={2}>
          <a href="#contact">
            <span className="nav-text">Get in touch </span>
          </a>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
