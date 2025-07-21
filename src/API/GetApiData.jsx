const getApiData = async (API) => {
	try {
		const response = await fetch(API);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getApiData;
