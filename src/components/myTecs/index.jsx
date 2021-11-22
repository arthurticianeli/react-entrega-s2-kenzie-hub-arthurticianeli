import { ReactComponent as TecIcon } from "../../assets/tecIcon.svg";

import { Typography, Box } from "@mui/material";

function myTecs({ handleChangeTec }) {
  return (
    <Box
      sx={{ backgroundColor: "white", borderRadius: "5px", margin: "20px 0" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "470px",
          cursor: "pointer",
          "&:hover": {
            "& .bg": {
              backgroundColor: "secondary.main",
            },
            "& .TecIcon path": {
              stroke: "white",
            },
          },
        }}
        onClick={handleChangeTec}
      >
        {/* fazer um map para mostrar todas */}
        <Box
          className="bg"
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgba(17, 153, 94, 0.1)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: "20px",
            flexShrink: 0,
          }}
        >
          <TecIcon className="TecIcon" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4">Javascrpit</Typography>
          <Typography
            variant="body2"
            color="secondary.main"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px 15px",

              backgroundColor: "#E7F5EF",
            }}
          >
            Intermediário
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default myTecs;
