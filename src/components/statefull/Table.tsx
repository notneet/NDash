"use client";

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TableActionButton } from "./Table-Action-Button";

export const TableView = () => {
  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Media Name</Th>
            <Th>Field Count</Th>
            <Th>Validation</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Media 1</Td>
            <Td>9</Td>
            <Td>
              <p className="text-green font-medium">Validate</p>
            </Td>
            <Td>
              <TableActionButton id={100} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
