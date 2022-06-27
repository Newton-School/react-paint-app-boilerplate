import React,  { useEffect, useRef, useState } from "react";
import "../styles/App.css";

function App() {
const boardRef = useRef(null);
const ctxRef = useRef(null);
const [isDrawing, setIsDrawing] = useState(false);
const [lineWidth, setLineWidth] = useState(5);
const [lineColor, setLineColor] = useState("black");
const [lineOpacity, setLineOpacity] = useState(0.1);

useEffect(() => {
	const board = boardRef.current;
	const ctx = board.getContext("2d");
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.globalAlpha = lineOpacity;
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	ctxRef.current = ctx;
}, [lineColor, lineOpacity, lineWidth]);


const startDrawing = (e) => {
	ctxRef.current.beginPath();
	ctxRef.current.moveTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	setIsDrawing(true);
};


const endDrawing = () => {
	ctxRef.current.closePath();
	setIsDrawing(false);
};

const draw = (e) => {
	if (!isDrawing) {
	return;
	}
	ctxRef.current.lineTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	
	ctxRef.current.stroke();
};

return (
	<div className="App">
	<h1>Paint App</h1>
	<div className="draw-area">
		<Menu
		setLineColor={setLineColor}
		setLineWidth={setLineWidth}
		setLineOpacity={setLineOpacity}
		/>
		<canvas
		id="board"
		onMouseDown={startDrawing}
		onMouseUp={endDrawing}
		onMouseMove={draw}
		ref={boardRef}
		width={`1280px`}
		height={`720px`}
		/>
	</div>
	</div>
);
}


const Menu = ({ setLineColor, setLineWidth,setLineOpacity }) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		type="color"
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
	    id="brush-width"
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		setLineOpacity(e.target.value / 100);
		}}
	/>
	<label>Eraser</label>
	<button
		onClick={(e) => {
		setLineColor('white')
		}}
	/>
	</div>
);
};

export default App ; 

