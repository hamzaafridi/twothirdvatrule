import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

import PropTypes from 'prop-types';

function FloatingNumberInput(props) {
    const {
        label = "default label", 
        defaultValue = 0, 
        min = 0, 
        step = 0.02, 
        focusBorderColor = "teal.400", 
        borderColor = "teal.400",
        type,
        parentCallback
    } = props;

    const handleChange = (value) => {
        parentCallback({type: type, value: value});
    };
  return (
    <Box>
      <Text>{label}</Text>
      <NumberInput onChange={handleChange}
        defaultValue={defaultValue}
        min={min}
        step={step}
        focusBorderColor={focusBorderColor}
        borderColor={borderColor}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
}

export default FloatingNumberInput;
