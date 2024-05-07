import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const MUIWrapperContext = createContext({
	toggleColorMode: () => {},
});

export const MUIWrapper = ({ children }) => {
	const [mode, setMode] = useState("dark");
	const muiWrapperUtils = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<MUIWrapperContext.Provider value={muiWrapperUtils}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</MUIWrapperContext.Provider>
	);
};
