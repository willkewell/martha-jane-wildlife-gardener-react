import { Box } from "@mui/material";
import Service from "./Service";
import maintenanceImage from "../assets/services/garden-maintenance.png";
import plansImage from "../assets/services/planting-plans.png";
import plantingImage from "../assets/services/planting-and-soft-landscaping.png";
import consultationImage from "../assets/services/garden-consultation.png";

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        margin: 0,
        padding: 0,
        minWidth: "100%",
        height: "400vh",
      }}
    >
      <Service
        flipped={false}
        intro={true}
        image={maintenanceImage}
        title="Garden Maintenance"
        text={
          "Whether you’re looking for regular maintenance or a one off job, I offer skilled garden maintenance around the Bristol area with organic principles and wildlife in mind. This can be for anything from a traditional garden to meadow maintenance and vegetable beds. I always like to come out and see your garden and chat about your wants and needs beforehand so please do get in touch to arrange a free consultation."
        }
        price={[
          "Full day - £170",
          "Half Day - £85",
          "For small jobs please get in touch for a quote",
        ]}
      />
      <Service
        flipped={true}
        image={plansImage}
        title="Planting Plans"
        text={
          "If you want some help planning your beds and borders, I offer personalised planting plans specializing in wildlife gardens, naturalistic planting styles and food forests and vegetable beds. I will come out for an initial consultation with you around the garden to talk about your wants, ideas and inspirations, followed by a site survey. I will then follow up with mood boards for each season and a plant list to give you an idea of the final result, at this stage anything can be tweaked if needed. After this I will produce a plant schedule, a sketch for plant positioning and a year round maintenance plan. If you desire, I am always more than happy to do the planting as well at my garden maintenance rate. This service can also be combined with my soft landscaping service if you're looking to add a new area to your garden or reshape your beds."
        }
        price={["From £300"]}
      />
      <Service
        flipped={false}
        image={plantingImage}
        title="Planting and Soft Landscaping"
        text={
          "If you're looking to add a mini meadow, create a pond, or no longer need your lawn space and want to turn it into beds I offer soft landscaping and planting services. This service is well suited to smaller projects that you may not have the time or ability to do yourself which I am more than happy to help with. I always like to come and see your space beforehand and have a chat with you about your wants and ideas so please do get in touch for a free consultation. Services include:"
        }
        bullets={[
          "•	Meadows and floral lawns",
          "•	Wildlife ponds and bog gardens",
          "•	Turf laying",
          "•	Tree and hedge planting",
          "•	Gravel and rock gardens",
          "•	Bed/border creation and planting",
          "•	Free-draining and woodchip paths",
        ]}
        price={["Priced per project from £85"]}
      />
      <Service
        flipped={true}
        image={consultationImage}
        title="Garden Consultations"
        text={
          "If you're looking for some inspiration but don't want to commit to a full planting plan or just want some pointers on how to manage your garden I offer a garden consultation service. This begins with a 1-2 hour consultation where I will come and visit you in your garden to talk about your wants and ideas, problem areas and tips on managing your space to help reach its full potential. I will then follow this up with a summary of the points mentioned during the consultation and steps moving forward. I always aim for this to inspire you to take on your garden yourself but equally this consultation can be developed into a planting plan or maintenance services from myself if you desire."
        }
        price={["1-2 hour consultation - £90"]}
      />
    </Box>
  );
};

export default Services;
