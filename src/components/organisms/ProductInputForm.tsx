import React, { FC } from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    NumberInput,
    NumberInputField,
    Select
} from '@chakra-ui/react';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import {
    validateColor,
    validateEAN,
    validateName,
    validatePrice,
    validateQuantity,
    validateType,
    validateWeight
} from '../../utils/functions/validations';
import { colorNames } from '../../utils/data/colors';
import { productTypes } from '../../utils/data/products';

interface FormInputValues {
    name: string;
    EAN: number;
    type: string;
    weight: number;
    color: string;
    active: boolean;
    quantity: number;
}

export const ProductInputForm: FC = (): JSX.Element => {
    const handleSubmit = (values: FormikValues, actions: FormikHelpers<FormInputValues>) => {
        actions.setSubmitting(false);
        console.log(JSON.stringify(values));
    };

    return (
        <Formik
            initialValues={{ name: '', EAN: 0, type: '', weight: 0, color: '', active: false, quantity: 0 }}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
            {
                (props) => (
                    <Form>
                        <Field name="name" validate={validateName}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        {...field}
                                        id="name"
                                        placeholder="Product name"
                                    />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="EAN" validate={validateEAN}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.EAN && form.touched.EAN}>
                                    <FormLabel>EAN</FormLabel>
                                    <NumberInput
                                        onChange={(valueAsString, valueAsNumber) => form.setFieldValue(field.name, valueAsNumber)}
                                        onBlur={() => form.setFieldTouched(field.name)}
                                        id="EAN"
                                    >
                                        <NumberInputField placeholder="12 or 13 digits number" />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.EAN}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="type" validate={validateType}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.type && form.touched.type}>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        {...field}
                                        id="type"
                                        placeholder="Select product type"
                                    >
                                        {productTypes.map((name: string, index) => <option key={index}>{name}</option>)}
                                    </Select>
                                    <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="weight" validate={validateWeight}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.weight && form.touched.weight}>
                                    <FormLabel>Weight</FormLabel>
                                    <InputGroup>
                                        <NumberInput
                                            onChange={(valueAsString, valueAsNumber) => form.setFieldValue(field.name, valueAsNumber)}
                                            onBlur={() => form.setFieldTouched(field.name)}
                                            id="weight"
                                        >
                                            <NumberInputField placeholder="Product weight" />
                                        </NumberInput>
                                        <InputRightAddon children="(g)" />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="color" validate={validateColor}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.color && form.touched.color}>
                                    <FormLabel>Color</FormLabel>
                                    <Select
                                        {...field}
                                        id="color"
                                        placeholder="Select product color"
                                    >
                                        {colorNames.map((name: string, index) => <option key={index}>{name}</option>)}
                                    </Select>
                                    <FormErrorMessage>{form.errors.color}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="active">
                            {({ field }: { field: any }) => (
                                <FormControl pb={5} id="active">
                                    <FormLabel>Active</FormLabel>
                                    <Checkbox
                                        {...field}
                                        size="lg"
                                        colorScheme="green"
                                        defaultIsChecked
                                    >
                                        Is product active?
                                    </Checkbox>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="quantity" validate={validateQuantity}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired
                                             isInvalid={form.errors.quantity && form.touched.quantity}>
                                    <FormLabel>Quantity</FormLabel>
                                    <NumberInput
                                        onChange={(valueAsString, valueAsNumber) => form.setFieldValue(field.name, valueAsNumber)}
                                        onBlur={() => form.setFieldTouched(field.name)}
                                        id="quantity"
                                    >
                                        <NumberInputField />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="price" validate={validatePrice}>
                            {({ field, form }: { field: any, form: any }) => (
                                <FormControl pb={5} isRequired isInvalid={form.errors.price && form.touched.price}>
                                    <FormLabel>Price</FormLabel>
                                    <InputGroup>
                                        <NumberInput
                                            onChange={(valueAsString, valueAsNumber) => form.setFieldValue(field.name, valueAsNumber)}
                                            onBlur={() => form.setFieldTouched(field.name)}
                                            id="price"
                                        >
                                            <NumberInputField placeholder="Product price" />
                                        </NumberInput>
                                        <InputRightAddon children="(EUR)" />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            isLoading={props.isSubmitting}
                            type="submit"
                            minW="100px"
                            colorScheme="green"
                            variant="outline"
                            width="100%"
                            marginY={5}
                        >
                            Save
                        </Button>
                    </Form>
                )
            }
        </Formik>
    )
};
