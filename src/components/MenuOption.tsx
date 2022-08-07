import {
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdReplay,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import ReactTooltip from "react-tooltip";

interface IconSettings {
  icon: string;
}

function MenuOption(props: IconSettings) {
  const location = useLocation();
  var isMainMenuOption = props.icon === "MdFormatListBulleted";
  var isHistoryMenuOption = props.icon === "MdReplay";
  var isStatisticsMenuOption = props.icon === "MdInsertChartOutlined";

  var isMainRoute = location.pathname === "/";
  var isHistoryRoute = location.pathname === "/history";
  var isStatisticsRoute = location.pathname === "/statistics";

  var route = isMainMenuOption
    ? "/"
    : isHistoryMenuOption
    ? "/history"
    : "/statistics";

  var tooltipMessage = isMainMenuOption
    ? "items"
    : isHistoryMenuOption
    ? "history"
    : "statistics";

  var highlightIcon =
    (isMainRoute && isMainMenuOption) ||
    (isHistoryMenuOption && isHistoryRoute) ||
    (isStatisticsMenuOption && isStatisticsRoute);

  return (
    <li data-tip data-for={props.icon}>
      <Link to={route}>
        <div className="flex h-14 w-28">
          <div className="flex items-center space-x-8">
            <div
              className={
                highlightIcon ? "w-2 h-full bg-mainYellow rounded-r-lg" : "w-2"
              }
            ></div>
            <>
              {isMainMenuOption ? (
                <MdFormatListBulleted
                  size={30}
                  color="fullDark"
                ></MdFormatListBulleted>
              ) : isHistoryMenuOption ? (
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
      </Link>
      <ReactTooltip id={props.icon} place="right">
        {tooltipMessage}
      </ReactTooltip>
    </li>
  );
}

export default MenuOption;
