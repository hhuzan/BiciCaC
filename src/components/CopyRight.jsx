import { Typography, Link } from "@mui/material";

export function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"React - TP Final - "}
			<Link color="inherit" href="https://buenosaires.gob.ar/educacion/codo-codo-40://mui.com/">
				Codo a Codo 4.0
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
