import { Heading, Text } from "@chakra-ui/react";
import React from "react";

function Name() {
  return (
    <div>
      <Heading fontSize={"18px"} marginBottom="10px" color="red">
        All time
      </Heading>

      <Text fontSize={"16px"} display="flex" alignItems="center" gap="10px">
        <b>Name:-</b>
        raj
      </Text>
      <Text fontSize={"16px"} display="flex" alignItems="center" gap="10px">
        <b>WPM:-</b>
        raj
      </Text>
      <Text fontSize={"16px"} display="flex" alignItems="center" gap="10px">
        <b>Accuracy:-</b>
        raj
      </Text>
    </div>
  );
}

export default Name;
