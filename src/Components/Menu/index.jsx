import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryIcon from "@mui/icons-material/Category";
import menuImg from "../../assets/menu.jpg";

const categories = [
  "Salad",
  "Juice",
  "Lunch",
  "Pizza",
  "Burger",
  "Fish",
  "Soup",
  "Breakfast",
  "Local Breakfast",
];
const items = [
  { name: "Classic Caesar Salad", category: "Salad", price: "$8.99" },
  { name: "Freshly Squeezed Orange Juice", category: "Juice", price: "$3.99" },
  { name: "Chicken Fajitas", category: "Lunch", price: "$12.99" },
  { name: "Margherita Pizza", category: "Pizza", price: "$10.99" },
  { name: "BBQ Bacon Burger", category: "Burger", price: "$9.99" },
  { name: "Grilled Salmon", category: "Fish", price: "$14.99" },
  { name: "Tomato Basil Soup", category: "Soup", price: "$5.99" },
  { name: "Full English Breakfast", category: "Breakfast", price: "$7.99" },
  {
    name: "Local Breakfast Special",
    category: "Local Breakfast",
    price: "$6.99",
  },
];

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setAnchorEl(null);
  };

  const filterItems = (category) => {
    setSelectedCategory(category);
    handleCategoryClose();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        backgroundImage: `url(${menuImg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          Our Delicious Menu
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <IconButton aria-label="Filter" onClick={handleCategoryClick}>
            <FilterListIcon sx={{ color: "white" }} />
          </IconButton>
          <Chip
            sx={{ color: "white" }}
            icon={<CategoryIcon style={{ color: "white" }} />}
            label={selectedCategory || "All"}
            onDelete={() => filterItems(null)}
          />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCategoryClose}
        >
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => filterItems(category)}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Menu>

        <Grid container spacing={2}>
          {items
            .filter(
              (item) => !selectedCategory || item.category === selectedCategory
            )
            .map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 3 }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.category}
                  </Typography>
                  <Typography variant="h6">{item.price}</Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default index;
