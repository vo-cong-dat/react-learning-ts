import { SearchIcon } from "./icons";
import { Input } from "./input";

export default function SearchInput() {
  return (
    <div className="relative">
      <Input placeholder="Search" className="peer text-center" />
      <SearchIcon className="text-grey-200 absolute top-1/2 left-[calc(50%-44px)] size-5 -translate-y-1/2" />
    </div>
  );
}
