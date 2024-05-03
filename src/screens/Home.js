import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'><Title/></div>
      <div><Title/></div>
      <div><Title/></div>
      <div><Title/></div>
      <div><Footer /></div>
    </div>
    
  );
}
