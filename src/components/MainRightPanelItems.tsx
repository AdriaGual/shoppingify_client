import MainRightPanelItemButton from "./MainRightPanelItemButton";

interface CategoryParams {
  id: number;
  name: string;
  items: any;
}

function MainRightPanelItems(props: CategoryParams) {
  return (
    <div key={props.id} className="font-semibold">
      <div className="text-darkGray text-sm mb-6">{props.name}</div>
      <div className="space-y-4">
        {props.items.map((item) => {
          return (
            <div key={item.id} className="flex text-xl">
              <div className="w-full">{item.name}</div>
              <MainRightPanelItemButton
                id={item.id}
                quantity={item.pivot.quantity}
              ></MainRightPanelItemButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainRightPanelItems;
