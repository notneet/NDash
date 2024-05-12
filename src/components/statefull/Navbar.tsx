"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export default function Navbar() {
  const router = useRouter();
  const handleLogOut: MouseEventHandler<HTMLButtonElement> | undefined = (
    e
  ) => {
    console.log("Log Out!");

    router.push("/");
  };

  return (
    <nav className="bg-foreground/10 h-screen w-1/6  text-center flex flex-col justify-between p-8">
      <div>
        <ul className="flex flex-col space-y-2 mt-8">
          <li>
            <Button
              as={NextLink}
              href="/home"
              className="bg-background"
              width={"180px"}
            >
              Home
            </Button>
          </li>
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                width={"180px"}
              >
                Pattern
              </MenuButton>
              <MenuList>
                <MenuItem as={NextLink} href="/patterns/post">
                  Anime Post
                </MenuItem>
                <MenuItem as={NextLink} href="/patterns/detail">
                  Anime Detail
                </MenuItem>
                <MenuItem as={NextLink} href="/patterns/episode">
                  Anime Episode
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                width={"180px"}
              >
                Source
              </MenuButton>
              <MenuList>
                <MenuItem as={NextLink} href="/sources/medias">
                  List Media
                </MenuItem>
                <MenuItem as={NextLink} href="/sources/crawls">
                  List Crawl Page
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
      {/*  */}
      <div>
        <ul className="flex flex-col space-y-2 mt-8">
          <div className="mb-2">
            <Avatar name="Hanivan Rizky S" bg={"#FCFAF1"} />
          </div>
          <li>
            <Button
              as={NextLink}
              href="/settings"
              className="bg-background"
              width={"180px"}
            >
              Settings
            </Button>
          </li>
          <li>
            <Button
              as={NextLink}
              href="/"
              className="bg-background"
              width={"180px"}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
