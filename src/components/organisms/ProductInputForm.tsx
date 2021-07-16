import React, { Dispatch } from "react";
import { Button, Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import {
  validateColor,
  validateEAN,
  validateName,
  validatePrice,
  validateQuantity,
  validateType,
  validateWeight,
} from "../../utils/functions/inputValidations";
import InputField from "../molecules/InputField";
import productTypes from "../../utils/data/products";
import colorNames from "../../utils/data/colors";
import { addProduct } from "../../store/slices/productSlice";
import { Product } from "../../store/types/productState";
import { PRODUCTS_LIST_PATH } from "../../utils/constants/paths";

interface FormInputValues {
  name: string;
  EAN: number;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
}

const ProductInputForm = (): JSX.Element => {
  const dispatch: Dispatch<
    AsyncThunkAction<Product, Product, { rejectValue: string }>
  > = useDispatch();
  const { push }: { push: (path: string) => void } = useHistory();
  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormInputValues>
  ) => {
    const newProduct: Product = {
      id: new Date().getTime(),
      name: values.name,
      EAN: values.EAN,
      type: values.type,
      weight: values.weight,
      color: values.color,
      isActive: values.active,
      quantity: values.quantity,
      price: values.price,
    };
    dispatch(addProduct(newProduct));
    setTimeout(() => {
      actions.setSubmitting(false);
      push(PRODUCTS_LIST_PATH);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        EAN: 0,
        type: "",
        weight: 0,
        color: "",
        active: false,
        quantity: 0,
      }}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }: { isSubmitting: boolean }) => (
        <Form>
          <InputField
            name="name"
            validateText={validateName}
            label="Name"
            placeholder="Product name"
            inputType="text"
          />
          <InputField
            name="EAN"
            validateNumber={validateEAN}
            label="EAN"
            placeholder="12 or 13 digits number"
            inputType="number"
          />
          <InputField
            name="type"
            validateText={validateType}
            label="Type"
            placeholder="Select product type"
            inputType="select"
            selectItems={productTypes}
          />
          <InputField
            name="weight"
            validateNumber={validateWeight}
            label="Weight"
            placeholder="Product weight"
            inputType="groupNumber"
            addon="(g)"
          />
          <InputField
            name="color"
            validateText={validateColor}
            label="Color"
            placeholder="Select product color"
            inputType="select"
            selectItems={colorNames}
          />
          <Field name="active">
            {({ field }: { field: any }) => (
              <FormControl pb={5} id="active">
                <FormLabel>Active</FormLabel>
                <Checkbox
                  {...field}
                  size="lg"
                  colorScheme="green"
                  defaultIsChecked={false}
                >
                  Is product active?
                </Checkbox>
              </FormControl>
            )}
          </Field>
          <InputField
            name="quantity"
            validateNumber={validateQuantity}
            label="Quantity"
            placeholder="Product quantity"
            inputType="number"
          />
          <InputField
            name="price"
            validateNumber={validatePrice}
            label="Price"
            placeholder="Product price"
            inputType="groupNumber"
            addon="(EUR)"
          />
          <Button
            isLoading={isSubmitting}
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
      )}
    </Formik>
  );
};

export default ProductInputForm;
