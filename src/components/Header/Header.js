import React from "react";
import "./Header.css";

export default function Header({ showHomeScreen, showAboutScreen }) {
    function handleOnClickHome() {
        showHomeScreen();
    }
    function handleOnClickAbout() {
        showAboutScreen();
    }
    return (
        <div className={"headerContainer"}>
            <div className={"headerLabel"}>TO DO LIST</div>
            <label className={"headerButton"} onClick={handleOnClickHome}>
                Home
            </label>
            <label className={"headerButton"} onClick={handleOnClickAbout}>
                About
            </label>
        </div>
    );
}
