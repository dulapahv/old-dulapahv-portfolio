import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main, NotFound } from "./pages";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
