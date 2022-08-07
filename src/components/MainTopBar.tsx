import { MdSearch } from "react-icons/md";

function MainTopBar() {
  return (
    <div className="flex">
      <span className="text-3xl font-semibold w-4/5">
        <span className="text-mainYellow">Shoppingify</span>
        <span> allows you take your shopping list wherever you go</span>
      </span>
      <div className="w-1/6"></div>
      <div className=" w-1/2 flex items-center relative mb-6">
        <MdSearch
          size={26}
          color="lightDark"
          className="absolute ml-2 w-10"
        ></MdSearch>
        <input
          placeholder="search items"
          className="shadow-sm rounded-xl p-4 w-full pl-14 outline-mainYellow"
        />
      </div>
    </div>
  );
}

export default MainTopBar;
