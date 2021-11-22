import * as React from "react";
import { Popover, Typography } from "@mui/material";

export default function MouseOverPopover({
  children,
  open,
  anchorEl,
  handlePopoverClose,
}) {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1 }}>{children}</Typography>
    </Popover>
  );
}
