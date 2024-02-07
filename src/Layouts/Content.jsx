import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  AbsoluteCenter,
  useDisclosure,
} from "@chakra-ui/react";
import FloatingNumberInput from "../Components/FloatingNumberInput";
import ResultModal from "../Components/ResultModal";

function Content() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalServiceInclVat, setTotalServiceInclVat] = useState(0);
  const [totalProductInclVat, setTotalProductInclVat] = useState(0);

  const handleCallback = (childData) => {
    console.log(childData);
    if(childData.type === "totalServiceInclVat") {
        setTotalServiceInclVat(childData.value);
    }
    if(childData.type === "totalProductInclVat") {
        setTotalProductInclVat(childData.value);
    }
  };
  return (
    <Box h="calc(100vh)">
      <AbsoluteCenter axis="both">
        <Card>
          <CardHeader>
            <Heading size="md">Two Third Vat Rule</Heading>
            <Text>
              This app is used to check if two third vat applies on a particular
              invoice or not.
            </Text>
          </CardHeader>
          <CardBody>
            <Stack spacing={8}>
              <FloatingNumberInput label="Product Total Incl Vat" type="totalProductInclVat" parentCallback={handleCallback}/>
              <FloatingNumberInput label="Services Total Incl Vat" type="totalServiceInclVat" parentCallback= {handleCallback}/>
              <Button size="lg" colorScheme="green" mt="24px" onClick={onOpen}>
                Calculate
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </AbsoluteCenter>
      <ResultModal isOpen={isOpen} onClose={onClose} totalServiceInclVat={totalServiceInclVat} totalProductInclVat={totalProductInclVat} />
    </Box>
  );
}

export default Content;
