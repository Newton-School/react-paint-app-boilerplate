import React from "react";
import "../styles/App.css";

function App() {


const startDrawing = (e) => {

};


const endDrawing = () => {

};

const draw = (e) => {


};

return (
	<div className="App">
	<h1>Paint App</h1>
	<div className="draw-area">
		<Menu
		
		/>
		<canvas
		id="board"


		width={`1280px`}
		height={`720px`}
		/>
	</div>
	</div>
);
}


const Menu = ({  }) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		type="color"
		onChange={(e) => {

		}}
	/>
	<label>Brush Width </label>
	<input
	    id="brush-width"
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		
		}}
	/>
	<label>Eraser</label>
	<button
		onClick={(e) => {
	
		}}
	/>
	</div>
);
};

export default App ; 

