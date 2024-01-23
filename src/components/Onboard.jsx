import React, { useState } from "react";

import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { OnboardDoctor } from "../redux/action";
import { useNavigate } from "react-router-dom";

const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Psychiatrist",
];

const Onboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialization: "",
    experience: "",
    location: "",
    date: "",
    slots: "",
    fee: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(OnboardDoctor(formData));

    naviagte("/dashboard");
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography component="h1" variant="h5">
          Onboard Doctor
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Image URL"
                name="image"
                fullWidth
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Specialization</InputLabel>
                <Select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  {specialties.map((specialty) => (
                    <MenuItem key={specialty} value={specialty}>
                      {specialty}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Experience"
                name="experience"
                fullWidth
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                name="location"
                fullWidth
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                name="date"
                type="date"
                fullWidth
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Slots"
                name="slots"
                type="number"
                fullWidth
                value={formData.slots}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fee"
                name="fee"
                type="number"
                fullWidth
                value={formData.fee}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Onboard;
