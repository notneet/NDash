"use client";

import { TableView } from "@/components/statefull/Table";
import { Input } from "@chakra-ui/react";
import { FormEventHandler } from "react";

export default function PatternPostPage() {
  const handleSearchMedia: FormEventHandler<HTMLInputElement> = (e) => {
    // if (String(e.currentTarget.value)?.length < 1) {
    //   console.log("show all data");
    // }
    // if (String(e.currentTarget.value)?.length < 3) return;
    // It will handle at API? TODO!!

    console.log(e.currentTarget.value);
  };

  return (
    <>
      <h3 className="text-2xl font-semibold mb-5">List Pattern Post</h3>
      <Input
        placeholder="Search media name"
        onChange={handleSearchMedia}
        className="mb-6"
      />
      <TableView />
    </>
  );
}
