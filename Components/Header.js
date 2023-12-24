import React, { useState } from "react";
import Link from "next/link";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={`flex items-center justify-between px-10 h-20 ${darkMode ? "bg-slate-900 text-white" : "bg-slate-200 text-black"}  text-xl`}>
            <div>Shivendra Jat</div>
            <div className="flex items-center gap-10">
                <div>
                    {darkMode ? <NightsStaySharpIcon onClick={() => setDarkMode(!darkMode)} /> : <LightModeSharpIcon onClick={() => setDarkMode(!darkMode)} />}
                </div>
                <Link href="">Portfolio</Link>
            </div>
        </div>
    );
};

export default Header;
