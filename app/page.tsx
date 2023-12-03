import React from "react"
import {
  Card,
  Container,
  Flex,
  Inset,
  Strong,
  Table,
  Text,
} from "@radix-ui/themes"

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from "@/components/radix-ui/themes"

const SampleSelect = () => {
  return (
    <SelectRoot defaultValue="apple">
      <SelectTrigger />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="grape" disabled>
            Grape
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  )
}

const SampleCard = () => {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Text as="p" size="3">
        <Strong>Typography</Strong> is the art and technique of arranging type
        to make written language legible, readable and appealing when displayed.
      </Text>
    </Card>
  )
}

const SampleTable = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}

export default function Home() {
  return (
    <Container size="4">
      <Flex pt="4" gap={"8"}>
        <Flex direction="column" gap="4">
          <SampleSelect />
          <Text>Overview</Text>
          <Text>Dashboard</Text>
          <Text>Playground</Text>
          <Text>Settings</Text>
        </Flex>
        <Flex direction="column" gap={"4"}>
          <Flex justify={"between"}>
            <Text>
              <Strong>Overview</Strong>
            </Text>
            <SampleSelect />
          </Flex>
          <Flex gap={"8"}>
            <SampleCard />
            <SampleCard />
            <SampleCard />
          </Flex>
          <Flex justify={"between"}>
            <Text>
              <Strong>Dashboard</Strong>
            </Text>
            <SampleSelect />
          </Flex>
          <SampleTable />
        </Flex>
      </Flex>
    </Container>
  )
}
