import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  message: yup.string().required("required"),
});

type InitialValuesProps = yup.InferType<typeof userSchema>;

const initialValues: InitialValuesProps = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  message: "",
};

const Contact = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: InitialValuesProps) => {
    console.log(values);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current){
      emailjs.sendForm('service_w8biny7', 'template_qax3n2q', form.current, 'tscPjhvax7KEwbxFe')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }
    alert("Thank you, your message has been received. We will reply to you.");
  };

  return (
    <Box m="20px"  style={{padding: "30px"}}>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
        }) => (
          <form ref={form} onSubmit={sendEmail}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
                marginTop: "20px",
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2"}}
              />
               <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4"}}
              />
               <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4"}}
              />
               <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                type="text"
                label="Message"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                name="message"
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}
                sx={{ gridColumn: "span 4"}}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" style={{backgroundColor: "var(--bg-dot)",}} variant="contained">
                Send
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
