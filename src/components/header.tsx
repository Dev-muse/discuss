import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import HeaderAuth from "./header-auth";

const Header = () => {
  return (
    <Navbar className="shadow mb-5">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{<HeaderAuth />}</NavbarContent>
    </Navbar>
  );
};

export default Header;
