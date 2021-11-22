import Header from "../../components/Header";

import {
  Grid,
  Box,
  TextField,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import MyPerfil from "../../components/myPerfil";
import MyTecsCard from "../../components/myTecsCard";
import MyWorksCard from "../../components/myWorksCard";
import MouseOverPopover from "../../components/Popover";
import BasicModal from "../../components/Modal";

function Main() {
  let history = useHistory();

  const handleClickLogout = () => {
    history.push("/");
  };

  // MODAL TECH
  const [openTec, setOpenTec] = useState(false);
  const handleOpenTec = () => setOpenTec(true);
  const handleCloseTec = () => setOpenTec(false);

  // MODAL CHANGE TECH
  const [changeTec, setChangeTec] = useState(false);
  const handleChangeTec = () => setChangeTec(true);
  const handleCloseChangeTec = () => setChangeTec(false);

  // MODAL WORK
  const [openWork, setOpenWork] = useState(false);
  const handleOpenWork = () => setOpenWork(true);
  const handleCloseWork = () => setOpenWork(false);

  // MODAL WORK
  const [changeWork, setChangeWork] = useState(false);
  const handleChangeWork = () => setChangeWork(true);
  const handleCloseChangeWork = () => setChangeWork(false);

  const [nivel, setNivel] = useState("");
  const handleNivel = (e) => {
    setNivel(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "90vw",
        margin: "auto",
      }}
    >
      <Header />
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="flex-start"
        flexWrap="wrap"
        marginTop="0"
      >
        <Grid item xs={12} sm={4}>
          <MyTecsCard
            handleOpenTec={handleOpenTec}
            handleChangeTec={handleChangeTec}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MyWorksCard
            handleOpenWork={handleOpenWork}
            handleChangeWork={handleChangeWork}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MyPerfil handleClick={handleClickLogout} />
        </Grid>
      </Grid>

      {/* MODAL TECH */}
      <BasicModal open={openTec} handleClose={handleCloseTec}>
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
            Cadastrar Tecnologia
          </Typography>
          <Typography
            onClick={handleCloseTec}
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            x
          </Typography>
        </Box>
        <TextField label="Nome da Tech" />
        <Typography variant="body2">Selecionar status:</Typography>
        <ToggleButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            textTransform: "none",
          }}
          color="primary"
          value={nivel}
          exclusive
          onChange={handleNivel}
        >
          <ToggleButton value="iniciante" sx={{ textTransform: "none" }}>
            Iniciante
          </ToggleButton>
          <ToggleButton value="intermediario" sx={{ textTransform: "none" }}>
            Intermediário
          </ToggleButton>
          <ToggleButton value="avancado" sx={{ textTransform: "none" }}>
            Avançado
          </ToggleButton>
        </ToggleButtonGroup>
        <Button variant="purple">Cadastrar</Button>
      </BasicModal>

      {/* MODAL CHANGE TECH */}
      <BasicModal open={changeTec} handleClose={handleCloseChangeTec}>
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
            Cadastrar Tecnologia
          </Typography>
          <Typography
            onClick={handleCloseChangeTec}
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            x
          </Typography>
        </Box>
        <TextField color="secondary" label="Nome da Tech" />
        <Typography variant="body2">Selecionar status:</Typography>
        <ToggleButtonGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            textTransform: "none",
          }}
          color="secondary"
          value={nivel}
          exclusive
          onChange={handleNivel}
        >
          <ToggleButton value="iniciante" sx={{ textTransform: "none" }}>
            Iniciante
          </ToggleButton>
          <ToggleButton value="intermediario" sx={{ textTransform: "none" }}>
            Intermediário
          </ToggleButton>
          <ToggleButton value="avancado" sx={{ textTransform: "none" }}>
            Avançado
          </ToggleButton>
        </ToggleButtonGroup>

        <Box sx={{ display: "flex" }}>
          <Button variant="green">Salvar Alterações</Button>
          <Button variant="grey">Excluir</Button>
        </Box>
      </BasicModal>

      {/* MODAL WORK */}
      <BasicModal open={openWork} handleClose={handleCloseWork}>
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
            Cadastrar Trabalho
          </Typography>
          <Typography
            onClick={handleCloseWork}
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            x
          </Typography>
        </Box>
        <TextField label="Nome do Trabalho" />
        <TextField
          multiline
          rows={3}
          rowsmax={3}
          label="Descrição do Trabalho"
        />

        <Button variant="purple" sx={{ mt: "40px" }}>
          Cadastrar
        </Button>
      </BasicModal>

      {/* MODAL CHANGE WORK */}
      <BasicModal open={changeWork} handleClose={handleCloseChangeWork}>
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
            Cadastrar Trabalho
          </Typography>
          <Typography
            onClick={handleCloseChangeWork}
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            x
          </Typography>
        </Box>
        <TextField color="secondary" label="Nome do Trabalho" />
        <TextField
          color="secondary"
          multiline
          rows={3}
          rowsmax={3}
          label="Descrição do Trabalho"
        />

        <Box sx={{ display: "flex", mt: "40px" }}>
          <Button variant="green">Salvar Alterações</Button>
          <Button variant="grey">Excluir</Button>
        </Box>
      </BasicModal>

      <MouseOverPopover />
    </Box>
  );
}

export default Main;
