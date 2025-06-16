import { forwardRef } from 'react'
import { Box, Input, Text, Flex, InputProps } from '@chakra-ui/react'

type CustomFormFieldProps = {
  label: string
  placeholder: string
  gridArea?: { [key: string]: string }
  errors?: { message?: string }
}

type FormFieldProps = CustomFormFieldProps & InputProps

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const {
    label,
    placeholder,
    type = 'text',
    gridArea,
    errors,
    ...other
  } = props

  return (
    <Box gridArea={gridArea}>
      <Flex justify="space-between">
        <Box
          as="label"
          fontSize="0.75rem"
          fontWeight="bold"
          htmlFor={label}
          display="inline-block"
          mb={2}
          color={props['errors'] ? 'inputError' : 'black'}
        >
          {label}
        </Box>
        {errors && (
          <Text aria-live="polite" color="inputError" fontSize="0.75rem" mb={2}>
            {errors.message}
          </Text>
        )}
      </Flex>
      <Input
        ref={ref}
        {...other}
        type={type}
        placeholder={placeholder}
        border="1px solid"
        borderColor={props['errors'] ? 'inputError' : 'inputBorder'}
        id={label}
      />
    </Box>
  )
})

FormField.displayName = 'FormField'

export default FormField
