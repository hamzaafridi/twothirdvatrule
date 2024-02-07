import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
  Box,
  Heading,
  HStack
} from "@chakra-ui/react";

import checkTwoThirdVAT from "../Utils/utils";
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useClipboard } from '@chakra-ui/react';

function ResultModal(props) {
  const { isOpen, onClose, totalProductInclVat, totalServiceInclVat } = props;
  const result = checkTwoThirdVAT(totalProductInclVat, totalServiceInclVat);
  const { onCopy, value, setValue, hasCopied } = useClipboard(result.message);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap={8}>
            <IconItem isValid={result.isTwoThirdValid} />
            <Box align="left">
              <Text>
                Total Product Incl Vat: <b>Euro {totalProductInclVat}</b>
              </Text>
              <Text>
                Total Service Incl Vat: <b>Euro {totalServiceInclVat}</b>
              </Text>
              <br></br>
              <Card> 
                <CardHeader>
                    <HStack justify={"space-between"}>
                        <Heading size='md' textTransform='uppercase'>Message To Send</Heading>
                        <Button colorScheme="blue" onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                    </HStack>
                </CardHeader>
                <CardBody whiteSpace="pre-line">{result.message}</CardBody>
                
              </Card>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function IconItem(prop) {
  if (prop.isValid) {
    return <CheckCircleIcon color="green.500" boxSize={10} />;
  } else {
    return <NotAllowedIcon color="red.500" boxSize={10} />;
  }
}

export default ResultModal;
