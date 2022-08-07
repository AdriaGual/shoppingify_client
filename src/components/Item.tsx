import { MdOutlineAdd } from "react-icons/md";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { addItemToList, findActiveList } from "../api/lists";
import toast, { Toaster } from "react-hot-toast";
import { itemStore } from "../store/ItemStore";

interface ItemParams {
  item: any;
}

function Item(props: ItemParams) {
  const { data: activeList, refetch } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  const { setId, setName, setCategory, setNote, setImage, setShowDetails } =
    itemStore();

  const queryClient = useQueryClient();

  const categories: any = queryClient.getQueryData(["categories"]);

  async function handleAddItemToList() {
    await addItemToList(props.item.id, activeList.id);
    toast.success(props.item.name + " is on " + activeList.name, {
      id: props.item.id.toString(),
    });
    refetch();
  }

  function showItemDetails() {
    setId(props.item.id);
    setName(props.item.name);
    const category = categories.find(
      (element: any) => element.id === props.item.category_id
    );
    setCategory(category.name);
    setNote(props.item.note);
    setImage(props.item.image);
    setShowDetails(1);
  }

  return (
    <div className="flex bg-white rounded-xl shadow-sm mt-4">
      <Toaster position="top-right" reverseOrder={false} />
      <button className="text-xl p-4 w-full" onClick={() => showItemDetails()}>
        {props.item.name}
      </button>
      <button
        className="hover:bg-mainYellow rounded-r-xl m-auto"
        onClick={() => handleAddItemToList()}
      >
        <div className="py-4 w-12 pl-2">
          <MdOutlineAdd size={28} color="gray"></MdOutlineAdd>
        </div>
      </button>
    </div>
  );
}

export default Item;
