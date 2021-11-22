import { Avatar, Box, Button, Typography } from "@mui/material";

import { ReactComponent as Cel } from "../../assets/cel.svg";
import { ReactComponent as Email } from "../../assets/email.svg";

function myPerfil({ handleClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

        backgroundColor: "white",
        borderRadius: "5px 5px 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary.main",
          borderRadius: "5px 5px 0 0",
          padding: "20px",
        }}
      >
        <Avatar
          src="https://picsum.photos/200/300"
          alt="random"
          sx={{
            width: "60px",
            height: "60px",
          }}
        />
        <Box sx={{ ml: "20px" }}>
          <Typography variant="h4" color="white">
            Samuel Leao
          </Typography>
          <Typography variant="body1" color="white">
            Primeiro modulo
          </Typography>
          <Typography variant="caption">(Introducao ao frontend)</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px",
        }}
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            backgroundColor: "rgba(64, 60, 170, 0.1)",
            border: "2px solid rgba(64, 60, 170, 0.1)",
            padding: "20px",
            borderRadius: "5px",
            height: "unset",
            mb: "20px",
            "&:hover": {
              border: "2px solid rgba(64, 60, 170, 0.1)",
            },
          }}
        >
          <Box
            sx={{
              width: "70px",
              height: "50px",
              backgroundColor: "primary.main",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: "20px",
              flexShrink: 0,
            }}
          >
            <Cel />
          </Box>
          <Box
            sx={{
              textOverflow: "hidden",
              overflow: "hidden",
            }}
          >
            <Typography variant="h4">Ligar agora</Typography>
            <Typography variant="body1">+55 (84) 98899-8888</Typography>
          </Box>
        </Button>

        <Button
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            backgroundColor: "rgba(17, 153, 94, 0.1)",
            border: "2px solid rgba(17, 153, 94, 0.1)",
            padding: "20px",
            borderRadius: "5px",
            height: "unset",
            mb: "20px",
            "&:hover": {
              border: "2px solid rgba(17, 153, 94, 0.1)",
            },
          }}
        >
          <Box
            sx={{
              width: "70px",
              height: "50px",
              backgroundColor: "secondary.main",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: "20px",
              flexShrink: 0,
            }}
          >
            <Email />
          </Box>
          <Box
            sx={{
              textOverflow: "hidden",
              overflow: "hidden",
            }}
          >
            <Typography variant="h4">Enviar email</Typography>
            <Typography variant="body1">samuel@kenzie.com.br</Typography>
          </Box>
        </Button>
        <Button variant="grey" onClick={handleClick}>
          Sair
        </Button>
      </Box>
    </Box>
  );
}

export default myPerfil;
