import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
	// let isSingle = true;
	const [isSingle, setIsSingle] = useState(true);
	const [showSidebar, setShowSidebar] = useState(false);
	const [data, setData] = useState([
		{
			title: "title one",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sequi necessitatibus quidem adipisci repellat ea, ipsam officia odit voluptate distinctio eius facilis accusantium eos, aut fugit voluptatum. Ad, quo perspiciatis.",
		},
		{
			title: "title two",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sequi necessitatibus quidem adipisci repellat ea, ipsam officia odit voluptate distinctio eius facilis accusantium eos, aut fugit voluptatum. Ad, quo perspiciatis.",
		},
		{
			title: "title three",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sequi necessitatibus quidem adipisci repellat ea, ipsam officia odit voluptate distinctio eius facilis accusantium eos, aut fugit voluptatum. Ad, quo perspiciatis.",
		},
	]);

	const handleStatus = () => {
		// isSingle = !isSingle;
		// console.log(isSingle);
		// setIsSingle(false);
		setIsSingle(!isSingle);
	};

	const handleSideBar = () => setShowSidebar(!showSidebar);
	// const handleData = () => {
	// 	setData();
	// };

	return (
		<div>
			<h1>test</h1>
			{isSingle ? <p>saya single</p> : <p>saya sudah menikah</p>}
			<button onClick={handleStatus}>change status</button>
			{/* button icon harus dinamis kalo belum kebuka ||| kalo sudah terbuka X */}
			<button onClick={handleSideBar}>{showSidebar ? "X" : "|||"}</button>
			{/* {showSidebar && <Sidebar />} */}
			{showSidebar ? <Sidebar /> : null}
			<br />
			{/* {data.map((item) => {
				return (
					<div>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				);
			})} */}
			{data.map((item, key) => (
				<div key={key}>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
				</div>
			))}
			{/* <button onClick={handleData}>show data</button> */}
		</div>
	);
};

export default App;
