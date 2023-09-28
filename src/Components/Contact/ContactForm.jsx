import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  OutlinedInput,
  InputLabel,
  Button,
} from "@mui/material";
import Spinner from "../Spinner/Spinner.jsx";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { SetMealOutlined } from "@mui/icons-material";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sending, setSending] = useState(false);
  const handleUserData = async (data) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      alert("Please provide a valid email!!");
      return;
    }
    try {
      setSending(true);
      const response = await emailjs.send(
        "",
        "",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        ""
      );
      alert("message successfully sent!");
    } catch (error) {
      alert("Error: Please try again!");
    }
    setSending(false);
  };

  return sending ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  ) : (
    <Box
      component="form"
      onSubmit={handleSubmit(handleUserData)}
      sx={{
        padding: 3,
        elevation: 3,
        height: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <InputLabel htmlFor="Name">
            <Typography
              variant="body1"
              mb={1}
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              Name
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what is your Name?"
            id="Name"
            {...register("name", { required: "Name can't be empty" })}
          />
          {errors.name ? (
            <Typography color="error" variant="h7">
              {errors.name.message}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Email">
            <Typography
              variant="body1"
              mb={1}
              mt={2}
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              Email
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what is your Email?"
            id="Email"
            {...register("email", { required: "Email can't be empty" })}
          />
          {errors.email ? (
            <Typography color="error" variant="h7">
              {errors.email.message}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Message">
            <Typography
              variant="body1"
              mb={1}
              mt={2}
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              Message
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what do you want to say?"
            id="Message"
            multiline
            rows={4}
            {...register("message", { required: "Message can't be empty" })}
          />
          {errors.message ? (
            <Typography color="error" variant="h7">
              {errors.message.message}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
      <Button
        sx={{ marginTop: 3 }}
        variant="contained"
        // color="primary"

        startIcon={<AiOutlineSend />}
        type="submit"
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
