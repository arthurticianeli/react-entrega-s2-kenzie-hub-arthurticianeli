import { Avatar, AppBar, Toolbar } from "@mui/material";
import Logo from "../../components/Logo";

function Header() {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        maxWidth: "90vw",
        margin: "auto",
      }}
      position="static"
    >
      <Toolbar>
        <Logo />
        <Avatar src="https://picsum.photos/200/300" alt="random" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
