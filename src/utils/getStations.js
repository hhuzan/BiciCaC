export const getStations = async (setStations, setLoading) => {
	const url = "stationInformation?";
	try {
		const response = await fetch(
			url +
				new URLSearchParams({
					client_id: import.meta.env.VITE_CLIENT_ID,
					client_secret: import.meta.env.VITE_CLIENT_SECRET,
				})
		);
		const data = await response.json();
		setStations(data);
	} catch (error) {
		console.log(error);
	} finally {
		setLoading(false);
	}
};
