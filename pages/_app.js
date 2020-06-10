import App from "next/app";
import { ThemeProvider } from "styled-components";
import LoadFonts from "components/FontHelper";
import "./index.css";

const theme = {
  colors: {
    secondary: "#003049",
    primaryDark: "#D62828",
    primary: "#F77F00",
    primaryLight: "#FCBF49",
    context: "#EAE2B7",
    highlight: "#fffbe6",
  },
};

export default class MyApp extends App {
  componentDidMount() {
    LoadFonts();
    document.title = "Reštaurácia Pod Hruškou";
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
