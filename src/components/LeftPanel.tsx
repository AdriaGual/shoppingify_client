import React from "react";
import logo from "../images/logo.svg";
import {
  MdFormatListBulleted,
  MdReplay,
  MdInsertChartOutlined,
} from "react-icons/md";
import ReactTooltip from "react-tooltip";
import MenuOption from "./MenuOption";

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
      <div className="flex-auto">3</div>
    </div>
  );
}

export default LeftPanel;
