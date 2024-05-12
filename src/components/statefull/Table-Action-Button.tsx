"use client";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MouseEventHandler } from "react";

interface ITableActionButtonProps {
  id: number;
}

export const TableActionButton = ({ id }: ITableActionButtonProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <span className="flex gap-x-2">
      <Button
        as={NextLink}
        href={`post/edit/${id}`}
        className="bg-yellow"
        //   width={"180px"}
      >
        Edit
      </Button>
      {/*  */}
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="red">Delete</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Are you sure want to delete?</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="red" onClick={handleDelete} value={id}>
                Yes, my mind is aware
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </span>
  );
};
