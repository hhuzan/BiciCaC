import { Typography, Link } from "@mui/material";

export function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"React - TP Final - "}
			<Link color="inherit" target="_blank" href="https://buenosaires.gob.ar/educacion/codo-codo-40">
				Codo a Codo 4.0
			</Link>{" "}
			{" - "}
			<Link color="inherit" target="_blank" href="https://api-transporte.buenosaires.gob.ar/console">
				APIs
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
