import { useQuery } from "@tanstack/react-query";
import { getCategoriesWithItems } from "../api/categories";
import { itemStore } from "../store/ItemStore";
import Error from "./Error";
import LeftPanel from "./LeftPanel";
import Loading from "./Loading";
import MainItems from "./MainItems";
import MainRightCreateItemPanel from "./MainRightCreateItemPanel";
import MainRightDetailsPanel from "./MainRightDetailsPanel";
import MainRightPanel from "./MainRightPanel";
import MainTopBar from "./MainTopBar";

function MainScreen() {
  const { error, isLoading } = useQuery(["categories"], getCategoriesWithItems);
  const { showDetails } = itemStore();

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="flex">
      <LeftPanel></LeftPanel>

      <div className="mt-10 mx-20 space-y-12 w-2/3">
        <MainTopBar></MainTopBar>
        <MainItems></MainItems>
      </div>
      {showDetails === 1 ? (
        <MainRightDetailsPanel></MainRightDetailsPanel>
      ) : showDetails === 0 ? (
        <MainRightPanel></MainRightPanel>
      ) : (
        <MainRightCreateItemPanel></MainRightCreateItemPanel>
      )}
    </div>
  );
}

export default MainScreen;
