import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./AppLayout.css";
import Loading from "./Loading";

const AppLayout = ({ setSearch }) => {
	const navigation = useNavigation();

	return (
		<>
			<Header setSearch={setSearch} />
			{navigation.state === "loading" ? <Loading /> : <Outlet />}
			<Footer />
		</>
	);
};

export default AppLayout;
