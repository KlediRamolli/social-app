import React from "react";
import { Controller } from "react-hook-form";
import { Input, Text, Box } from "native-base";

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Box borderColor={error ? "red" : "#e8e8e8"}>
            <Input
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              mb={error ? 0 : 2}
            />
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }} pb={2}>
                {error.message || "Error"}
              </Text>
            )}
          </Box>
        </>
      )}
    />
  );
};

export default CustomInput;
