import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Button, Stack } from "@chakra-ui/react"
import MyTextInput from "./shared/MyInput.jsx"
import MySelect from "./shared/MySelect.jsx"

export default function CustomerForm({ initialValues, onFormSubmit }) {
    return (
        <>
            <Formik
                validateOnMount={true}
                initialValues={initialValues}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    age: Yup.number()
                        .min(18, "Must be 18 years or older")
                        .max(100, "Must be 100 years or younger")
                        .required("Required"),
                    gender: Yup.string()
                        .oneOf(["male", "female"], "Invalid Gender")
                        .required("Required"),
                })}
                onSubmit={onFormSubmit}
            >
                {({ isValid, isSubmitting }) => (
                    <Form>
                        <Stack spacing={"24px"}>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Jane"
                            />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="jane@gmail.com"
                            />

                            <MyTextInput
                                label="Age"
                                name="age"
                                type="number"
                                placeholder="21"
                            />

                            <MySelect label="Gender" name="gender">
                                <option value="">Select a gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </MySelect>

                            <Button
                                type="submit"
                                isDisabled={isSubmitting || !isValid}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    )
}
