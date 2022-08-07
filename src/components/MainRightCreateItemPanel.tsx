import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineArrowBack } from "react-icons/md";
import { getCategoriesWithItems } from "../api/categories";
import { createItem } from "../api/items";
import { itemStore } from "../store/ItemStore";

interface IFormInput {
  name: string;
  note: string;
  image: string;
  category: number;
}

function MainRightCreateItemPanel() {
  const { setId, setName, setCategory, setNote, setImage, setShowDetails } =
    itemStore();

  const { data: categories, refetch } = useQuery(
    ["categories"],
    getCategoriesWithItems
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => handleCreateItem(data);

  function resetItemDetails() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(0);
  }

  async function handleCreateItem(data: any) {
    await createItem(data);
    refetch();
    resetItemDetails();
  }

  return (
    <div className="w-1/5 flex bg-white py-8 px-10">
      <div className="space-y-4 w-full">
        <button className="flex space-x-2" onClick={() => resetItemDetails()}>
          <MdOutlineArrowBack className="text-mainYellow my-auto"></MdOutlineArrowBack>
          <div className="text-sm text-mainYellow font-semibold m-auto">
            back
          </div>
        </button>
        <div className="text-2xl font-bold">Add a new item</div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-bold">Name</div>
            <input
              {...register("name", { required: true })}
              placeholder="Enter a name"
              className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
            />
            {errors.name && (
              <p className="text-red text-sm font-bold">Name is required</p>
            )}
          </div>
          <div className="space-y-2">
            <div className="text-sm font-bold">Note (optional)</div>
            <textarea
              {...register("note", { required: false })}
              placeholder="Enter a note"
              rows={4}
              className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
            />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-bold">Image (optional)</div>
            <input
              {...register("image", { required: false })}
              placeholder="Enter an image url"
              className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
            />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-bold">Category</div>
            <select
              {...register("category", { required: true, min: 1 })}
              defaultValue={0}
              id="category"
              className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow appearance-none"
            >
              <option value={0}>Enter a category</option>
              {categories.map((category: any) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            {errors.category && (
              <p className="text-red text-sm font-bold">Category is required</p>
            )}
          </div>
          <div className="flex space-x-6 font-bold items-center justify-center">
            <button className="my-auto" onClick={() => resetItemDetails()}>
              cancel
            </button>
            <button
              type="submit"
              className="text-white bg-mainYellow py-4 px-6 rounded-xl m-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainRightCreateItemPanel;
