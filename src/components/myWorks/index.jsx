import { ReactComponent as WorkIcon } from "../../assets/workIcon.svg";

import { Typography, Box } from "@mui/material";

function myTecs({ handleChangeWork }) {
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
              backgroundColor: "primary.main",
            },
            "& .WorkIcon path": {
              stroke: "white",
            },
          },
        }}
        onClick={handleChangeWork}
      >
        <Box
          className="bg"
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "rgba(64, 60, 170, 0.1)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: "20px",
            flexShrink: 0,
          }}
        >
          <WorkIcon className="WorkIcon" />
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
          <Typography variant="h4">KenzieShop</Typography>

          <Typography
            variant="body1"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Varias empresas e sites conhecidos utilizam JAvaScript na parte de
            front-end...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default myTecs;
