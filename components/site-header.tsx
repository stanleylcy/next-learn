import { Avatar, Container, Flex, Separator, Text } from "@radix-ui/themes"

export function SiteHeader() {
  return (
    <Container size="4">
      <Flex direction="column" gap="4" pt="4">
        <Flex justify="between">
          <Flex gap="4" align="center">
            <Avatar fallback></Avatar>
            <Text>Next-Learn</Text>
          </Flex>
          <Flex gap="4" align="center">
            <Text>API</Text>
            <Text>Support</Text>
            <Avatar fallback></Avatar>
          </Flex>
        </Flex>
        <Flex>
          <Flex gap="6">
            <Text>Overview</Text>
            <Text>Dashboard</Text>
            <Text>Playground</Text>
            <Text>Settings</Text>
          </Flex>
        </Flex>
        <Separator size="4" />
      </Flex>
    </Container>
  )
}
