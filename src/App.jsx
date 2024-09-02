import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./views/NotFoundPage";
import Certificates from "./views/Certificates";
import Projects from "./views/Projects";

function App() {
	return (
		<div className="body-containe w-full h-screen">
			<div className="container mx-auto">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/certificates" element={<Certificates />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
