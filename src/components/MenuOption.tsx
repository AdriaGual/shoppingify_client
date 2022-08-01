import React from "react";
import {
  MdFormatListBulleted,
  MdReplay,
  MdInsertChartOutlined,
} from "react-icons/md";
import ReactTooltip from "react-tooltip";

interface IconSettings {
  icon: string;
}

function MenuOption(props: IconSettings) {
  return (
    <li data-tip data-for={props.icon}>
      <div className="flex h-14">
        <div className="flex items-center space-x-8">
          <div
            className={
              props.icon === "MdFormatListBulleted"
                ? "w-2 h-full bg-mainYellow rounded-r-lg"
                : "w-2"
            }
          ></div>
          <>
            {props.icon === "MdFormatListBulleted" ? (
              <MdFormatListBulleted
                size={30}
                color="fullDark"
              ></MdFormatListBulleted>
            ) : props.icon === "MdReplay" ? (
              <MdReplay size={30} color="fullDark"></MdReplay>
            ) : (
              <MdInsertChartOutlined
                size={30}
                color="fullDark"
              ></MdInsertChartOutlined>
            )}
          </>
        </div>
      </div>
      <ReactTooltip id={props.icon} place="right">
        {props.icon === "MdFormatListBulleted"
          ? "items"
          : props.icon === "MdReplay"
          ? "history"
          : "statistics"}
      </ReactTooltip>
    </li>
  );
}

export default MenuOption;
