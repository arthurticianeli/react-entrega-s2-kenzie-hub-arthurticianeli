import { Typography, Button, TextField, Container, Box } from "@mui/material";
import { useHistory } from "react-router-dom";

import Logo from "../../components/Logo";

function Home() {
  let history = useHistory();

  const handleClickLogin = () => {
    history.push("/main");
  };
  const handleClickRegister = () => {
    history.push("/register");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Logo />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "400px",
          border: "1px solid",
          borderColor: "grey.0",
          mt: "10px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <TextField variant="outlined" id="outlined-basic" label="Login" />
        <TextField variant="outlined" id="outlined-basic" label="Senha" />
        <Button variant="purple" onClick={handleClickLogin}>
          Logar
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="grey.50">
            Criar uma Página para mostrar suas
          </Typography>
          <Typography variant="body2">
            habilidades, metas e progressos
          </Typography>
        </Box>
        <Button variant="grey" onClick={handleClickRegister}>
          Cadastrar
        </Button>
      </Container>
    </Container>
  );
}

export default Home;
