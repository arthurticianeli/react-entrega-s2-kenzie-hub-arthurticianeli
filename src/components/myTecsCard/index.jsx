import { Typography, Box } from "@mui/material";
import MyTecs from "../myTecs";

function myTecsCard({ handleOpenTec, handleChangeTec }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "470px",
        }}
      >
        <Typography variant="h4">Minhas Tecnologias</Typography>

        <Typography
          variant="h3"
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
            width: "40px",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={handleOpenTec}
        >
          +
        </Typography>
      </Box>

      <MyTecs handleChangeTec={handleChangeTec} />
      <MyTecs handleChangeTec={handleChangeTec} />
      <MyTecs handleChangeTec={handleChangeTec} />
      <MyTecs handleChangeTec={handleChangeTec} />
    </Box>
  );
}

export default myTecsCard;
