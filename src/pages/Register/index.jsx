import {
  Typography,
  Button,
  TextField,
  Container,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../components/Logo";
import BasicModal from "../../components/Modal";
import Popover from "../../components/Popover";

import api from "../../services";

function Register({ setId }) {
  let history = useHistory();

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // cadastro
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [course_module, setCourse_module] = useState("");

  const newUser = {
    name: name,
    email: email,
    bio: bio,
    contact: contact,
    password: password,
    course_module: course_module,
  };

  const handleClick = () => {
    api.post("/users", newUser).then(
      (response) => {
        setId(response.data.id);
        handleOpen();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // popover
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);

  const handlePopoverOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl1(null);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };
  const handlePopoverOpen3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handlePopoverClose3 = () => {
    setAnchorEl3(null);
  };
  const handlePopoverOpen4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handlePopoverClose4 = () => {
    setAnchorEl4(null);
  };

  const openPopover1 = Boolean(anchorEl1);
  const openPopover2 = Boolean(anchorEl2);
  const openPopover3 = Boolean(anchorEl3);
  const openPopover4 = Boolean(anchorEl4);

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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "600px",
          border: "1px solid",
          borderColor: "grey.0",
          mt: "10px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <Typography variant="body2">Selecionar módulo:</Typography>

        <ToggleButtonGroup
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            textTransform: "none",
          }}
          color="primary"
          value={course_module}
          exclusive
          onClick={(e) => setCourse_module(e.target.value)}
        >
          <ToggleButton
            value="primeiro"
            sx={{ textTransform: "none" }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen1}
            onMouseLeave={handlePopoverClose1}
          >
            Primeiro
            <Popover
              open={openPopover1}
              anchorEl={anchorEl1}
              handlePopoverClose={handlePopoverClose1}
            >
              <Typography variant="body1">Primeiro Módulo</Typography>
              <Typography variant="caption">
                (Introdução ao Frontend)
              </Typography>
            </Popover>
          </ToggleButton>

          <ToggleButton
            value="segundo"
            sx={{ textTransform: "none" }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen2}
            onMouseLeave={handlePopoverClose2}
          >
            Segundo
            <Popover
              open={openPopover2}
              anchorEl={anchorEl2}
              handlePopoverClose={handlePopoverClose2}
            >
              <Typography variant="body1">Segundo Módulo</Typography>
              <Typography variant="caption">(Frontend Avançado)</Typography>
            </Popover>
          </ToggleButton>
          <ToggleButton
            value="terceiro"
            sx={{ textTransform: "none" }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen3}
            onMouseLeave={handlePopoverClose3}
          >
            Terceiro
            <Popover
              open={openPopover3}
              anchorEl={anchorEl3}
              handlePopoverClose={handlePopoverClose3}
            >
              <Typography variant="body1">Terceiro Módulo</Typography>
              <Typography variant="caption">(Introdução ao Backend)</Typography>
            </Popover>
          </ToggleButton>
          <ToggleButton
            value="quarto"
            sx={{ textTransform: "none" }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen4}
            onMouseLeave={handlePopoverClose4}
          >
            Quarto
            <Popover
              open={openPopover4}
              anchorEl={anchorEl4}
              handlePopoverClose={handlePopoverClose4}
            >
              <Typography variant="body1">Quarto Módulo</Typography>
              <Typography variant="caption">(Backend Avançado)</Typography>
            </Popover>
          </ToggleButton>
        </ToggleButtonGroup>

        <TextField
          variant="outlined"
          id="outlined-basic"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <TextField
          variant="outlined"
          id="outlined-basic"
          label="Confirmar password"
          type="password"
        />
        <Button variant="purple" onClick={handleClick} type="submit">
          Cadastrar
        </Button>
      </Box>

      <BasicModal open={open} handleClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: "grey.0",
          }}
        >
          <Typography variant="h4" color="grey.100">
            Sucesso
          </Typography>
          <Typography
            onClick={handleClose}
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            x
          </Typography>
        </Box>
        <Typography variant="h1" color="grey.100">
          Yessss!
        </Typography>
        <Typography variant="body1" color="grey.50">
          Tudo certinho! Seu cadastro deu bom demais
        </Typography>
        <Typography variant="body2" color="grey.100">
          Agora basta fazer seu login e começar sua jornada...
        </Typography>

        <Button variant="green" onClick={() => history.push("/")}>
          Ir para login
        </Button>
      </BasicModal>
    </Container>
  );
}

export default Register;
