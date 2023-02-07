import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="red" onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {/* <TagLabel>Login</TagLabel> */}
            <DrawerHeader>Login</DrawerHeader>

            <Input marginTop={"20px"} placeholder="Enter Email..." />
            <Input marginTop={"20px"} placeholder="Enter Password..." />
            <Button marginTop={"20px"} bg="red">
              Login
            </Button>
          </DrawerBody>

          <DrawerBody>
            {/* <TagLabel>Sign up</TagLabel> */}
            <DrawerHeader>Sign up</DrawerHeader>

            <Input marginTop={"20px"} placeholder="Enter Name..." />
            <Input marginTop={"20px"} placeholder="Enter Email..." />
            <Input marginTop={"20px"} placeholder="Enter Password..." />
            <Button marginTop={"20px"} bg="red">
              Signup
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { DrawerExample };
