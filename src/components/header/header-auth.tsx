"use client";

import {
  Navbar,
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import * as actions from "@/actions";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session?.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session?.data.user.image || ""} />
        </PopoverTrigger>

        <PopoverContent>
          <Navbar>
            <NavbarItem>
              <form action={actions.signOut}>
                <Button type="submit" variant="flat">
                  Sign Out
                </Button>
              </form>
            </NavbarItem>
          </Navbar>
        </PopoverContent>
      </Popover>
    );
  } else if (session?.status === "loading") {
    authContent = null;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
