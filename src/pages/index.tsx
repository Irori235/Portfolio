import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AboutPage from "./about";

const theme = createTheme({
	palette: {
		background: {
			default: "#F3F6F9",
		},
	},
});

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AboutPage />
		</ThemeProvider>
	);
};

export default Home;
