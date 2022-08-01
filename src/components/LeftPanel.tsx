import React from "react";
import logo from "../images/logo.svg";
import MenuOption from "./MenuOption";
import { MdOutlineShoppingCart } from "react-icons/md";

function LeftPanel() {
  return (
    <div className="flex flex-col w-28 h-screen bg-white">
      <div className="flex flex-col flex-auto items-center">
        <img src={logo} alt="logo" className="bg-white mt-10 w-12"></img>
      </div>

      <div className="flex-auto items-center">
        <ul className="space-y-12">
          <MenuOption icon="MdFormatListBulleted"></MenuOption>
          <MenuOption icon="MdReplay"></MenuOption>
          <MenuOption icon="MdInsertChartOutlined"></MenuOption>
        </ul>
      </div>

      <div className="bg-mainYellow w-12 h-12 flex items-center justify-center rounded-full ml-8 mb-10">
        <MdOutlineShoppingCart size={28} color="white"></MdOutlineShoppingCart>
      </div>
    </div>
  );
}

export default LeftPanel;
