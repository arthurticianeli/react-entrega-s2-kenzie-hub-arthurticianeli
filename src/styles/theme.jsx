import { createTheme } from "@mui/material";

const primaryColor = "#403CAA";
const secondaryColor = "#11995E";
const grey0 = "#F5F5F5";
const grey50 = "#999999";
const grey100 = "#333333";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    grey: {
      0: grey0,
      50: grey50,
      100: grey100,
    },
  },

  shape: {
    borderRadius: 5,
  },

  typography: {
    fontFamily: "Inter, monospace",

    h1: {
      fontWeight: "bold",
      fontSize: "32px",
      color: grey100,
    },
    h2: {
      fontWeight: "bold",
      fontSize: "28px",
      color: grey100,
    },
    h3: {
      fontWeight: "bold",
      fontSize: "22px",
      color: grey100,
    },
    h4: {
      fontWeight: "bold",
      fontSize: "18px",
      color: grey100,
    },
    overline: {
      fontSize: "16px",
    },
    body1: {
      fontSize: "14px",
      color: grey50,
    },
    body2: {
      fontSize: "14px",
      fontWeight: "bold",
      color: grey100,
    },
    caption: {
      fontSize: "12px",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "60px",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--grey-0)",
          borderColor: "red",

          "&formControl": {
            color: "red",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 40px",

          width: "100%",
          height: "60px",

          textTransform: "none",

          fontSize: "16px",
          fontWeight: "bold",

          lineHeight: "normal",

          "&:hover": {
            border: "2px var(--grey-100) solid",
          },
        },
      },

      variants: [
        {
          props: {
            variant: "purple",
          },
          style: {
            background: primaryColor,
            border: `2px ${primaryColor} solid`,
            color: "white",
            "&:hover": {
              background: primaryColor,
            },
          },
        },
        {
          props: { variant: "green" },
          style: {
            background: secondaryColor,
            border: `2px ${secondaryColor} solid`,
            color: "white",
            "&:hover": {
              background: secondaryColor,
            },
          },
        },
        {
          props: { variant: "grey" },
          style: {
            background: grey0,
            border: `2px ${grey0} solid`,
            color: grey50,
            "&:hover": {
              background: grey0,
            },
          },
        },
        {
          props: { variant: "small" },
          style: {
            background: "white",
            color: primaryColor,

            width: "60px",
            height: "40px",

            fontSize: "14px",

            padding: "0px",

            "&:hover": {
              background: "rgba(64, 60, 170, 0.2)",
              border: 0,
            },
          },
        },
      ],
    },
  },
});
