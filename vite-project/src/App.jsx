import React from "react";
import "./App.css";
import Card from "./Card";
function App() {
    const styles = {
        display: "flex",
        gap: "10px",
        flexwrap: "nowrap",
    };
return (
    <div style={styles}>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    );
}

export default App;