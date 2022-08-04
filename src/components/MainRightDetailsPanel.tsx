import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { itemStore } from "../store/ItemStore";
import { addItemToList, findActiveList } from "../api/lists";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { deleteItem } from "../api/items";
import { getCategoriesWithItems } from "../api/categories";

function MainRightDetailsPanel() {
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

  const { data: activeList, refetch: activeListRefetch } = useQuery(
    ["active_list"],
    () => findActiveList(localStorage.getItem("user_id"))
  );
  const { refetch: categoriesRefetch } = useQuery(
    ["categories"],
    getCategoriesWithItems
  );

  function resetItemDetails() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(false);
  }

  async function handleAddItemToList() {
    await addItemToList(id, activeList.id);
    toast.success(name + " is on " + activeList.name, {
      id: id.toString(),
    });
    activeListRefetch();
    resetItemDetails();
  }

  async function handleDeleteItem() {
    await deleteItem(id);
    toast.success(name + " has been deleted");
    activeListRefetch();
    categoriesRefetch();
    resetItemDetails();
  }

  return (
    <div className="w-96 bg-white py-4 px-10 space-y-8">
      <Toaster position="top-right" reverseOrder={false} />
      <button className="flex space-x-2" onClick={() => resetItemDetails()}>
        <MdOutlineArrowBack className="text-mainYellow my-auto"></MdOutlineArrowBack>
        <div className="text-sm text-mainYellow font-semibold m-auto">back</div>
      </button>
      <img className="rounded-2xl" src={image} alt="Logo" />
      <div>
        <div className="text-sm font-semibold text-gray">name</div>
        <div className="text-2xl font-semibold">{name}</div>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray">category</div>
        <div className="text-2xl font-semibold">{category}</div>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray">note</div>
        <div className="text-2xl font-semibold">{note}</div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="font-bold my-auto"
          onClick={() => handleDeleteItem()}
        >
          delete
        </button>
        <button
          className="text-white py-4 px-6 bg-mainYellow rounded-xl font-bold"
          onClick={() => handleAddItemToList()}
        >
          Add to list
        </button>
      </div>
    </div>
  );
}

export default MainRightDetailsPanel;
