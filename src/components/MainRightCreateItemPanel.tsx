import React from "react";
import { MdOutlineArrowBack, MdClose } from "react-icons/md";
import { itemStore } from "../store/ItemStore";
import { getCategoriesWithItems } from "../api/categories";
import { useQuery } from "@tanstack/react-query";

function MainRightCreateItemPanel() {
  const {
    id,
    setId,
    name,
    setName,
    category,
    setCategory,
    note,
    setNote,
    image,
    setImage,
    setShowDetails,
  } = itemStore();

  const { data: categories } = useQuery(["categories"], getCategoriesWithItems);

  function resetItemDetails() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(0);
  }
  return (
    <div className="w-96 bg-white py-12 px-10 space-y-8">
      <button className="flex space-x-2" onClick={() => resetItemDetails()}>
        <MdOutlineArrowBack className="text-mainYellow my-auto"></MdOutlineArrowBack>
        <div className="text-sm text-mainYellow font-semibold m-auto">back</div>
      </button>
      <div className="text-2xl font-bold">Add a new item</div>
      <div className="space-y-2">
        <div className="text-sm font-bold">Name</div>
        <input
          placeholder="Enter a name"
          className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
        />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-bold">Note (optional)</div>
        <textarea
          placeholder="Enter a note"
          rows={4}
          className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
        />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-bold">Image (optional)</div>
        <input
          placeholder="Enter a name"
          className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
        />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-bold">Category</div>
        <select
          id="category"
          className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow appearance-none"
        >
          <option selected>Enter a category</option>
          {categories.map((category: any) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex space-x-6 font-bold items-center justify-center">
        <button className="my-auto" onClick={() => resetItemDetails()}>
          cancel
        </button>
        <button
          className="text-white bg-mainYellow py-4 px-6 rounded-xl m-auto"
          onClick={() => console.log("A")}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default MainRightCreateItemPanel;
