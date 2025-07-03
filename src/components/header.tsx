import logo from "@/assets/images/logo.svg";
import { routers } from "@/router/routers";
import { Link } from "react-router";
import SearchInput from "./search-input";

export default function Header() {
  return (
    <div className="border-vapor-blue flex justify-center border bg-white pt-[34px] pb-[31px]">
      <div className="flex w-[var(--max-w-screen)] items-center justify-between">
        <div className="flex items-center justify-evenly gap-32">
          <Link to={routers.HOME}>
            <img src={logo} className="h-[45px] w-[92px]" />
          </Link>
          <SearchInput />
        </div>
        <div>Right Component</div>
      </div>
    </div>
  );
}
