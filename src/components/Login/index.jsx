import { Typography, Button, TextField, Container, Box } from "@mui/material";

function Login() {
  return (
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
      <Button variant="purple"> Logar </Button>
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
        <Typography variant="body2">habilidades, metas e progressos</Typography>
      </Box>
      <Button variant="grey"> Cadastrar </Button>
    </Container>
  );
}

export default Login;
