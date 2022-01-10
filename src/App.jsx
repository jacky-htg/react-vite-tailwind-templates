import { BrowserRouter, Routes, Route } from "react-router-dom";
import env from './env';
import {black, other} from './templates'; 

const templates = {
  black,
  other
};

const template = templates[env.template];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<template.Dashboard />} />
        <Route path="/hello-world" element={<template.Hello />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
