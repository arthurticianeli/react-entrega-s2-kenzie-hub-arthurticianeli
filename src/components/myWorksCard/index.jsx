import { Container, Typography, Box } from "@mui/material";

import MyWorks from "../../components/myWorks";

function myWorksCard({ handleOpenWork, handleChangeWork }) {
  return (
    <Container
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
        <Typography variant="h4">Meus Trabalhos</Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            width: "40px",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={handleOpenWork}
        >
          +
        </Typography>
      </Box>

      <MyWorks handleChangeWork={handleChangeWork} />
      <MyWorks handleChangeWork={handleChangeWork} />
      <MyWorks handleChangeWork={handleChangeWork} />
      <MyWorks handleChangeWork={handleChangeWork} />
      <MyWorks handleChangeWork={handleChangeWork} />
    </Container>
  );
}

export default myWorksCard;
