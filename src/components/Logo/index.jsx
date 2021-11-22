import { Box, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

function Logo() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Typography variant="h1" color="#333333">
        Kenzie
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: "white",
          backgroundColor: "#403CAA",
          marginLeft: "10px",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        HUB
      </Typography>
    </Box>
  );
}

export default Logo;
