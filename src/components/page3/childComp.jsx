import SelectedType from "./selectedType/selectedType";
import Types from "./types/types";

const ChildComp = () => {
  return (
    <section className="flex flex-col bg-white">
      <Types />
      <SelectedType />
    </section>
  );
}

export default ChildComp;
