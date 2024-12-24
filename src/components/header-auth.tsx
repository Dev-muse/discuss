"use client";

import * as actions from "@/actions";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <form action={actions.signOut}>
                <Button type="submit" variant="ghost" color="default">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" variant="bordered" color="secondary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" variant="flat" color="primary">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
