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
const menuItems = {
  Salad: [
    { name: "Tuna Salad", ingredient: "", price: "600" },
    { name: "Tomato Salad", ingredient: "", price: "500" },
    { name: "Lentil and Avocado Salad", ingredient: "", price: "600" },
    { name: "Ethiopian Salad", ingredient: "", price: "550" },
    { name: "Cucumber Salad", ingredient: "", price: "550" },
    { name: "Chicken Salad", ingredient: "", price: "600" },
    { name: "Mixed Salad", ingredient: "", price: "600" },
    { name: "Beans Salad", ingredient: "", price: "00" },
    { name: "White House Special Salad", ingredient: "", price: "1000" },
    { name: "Potato Salad", ingredient: "", price: "500" },
  ],
  Juice: [
    { name: "Fruit Punch", ingredient: "", price: "600" },
    { name: "Papaye Juice", ingredient: "", price: "300" },
    { name: "Special Juice", ingredient: "", price: "350" },
    { name: "Watermelon and Ginger Juice", ingredient: "", price: "250" },
    { name: "Apple Juice", ingredient: "", price: "250" },
    { name: "Avocado Juice", ingredient: "", price: "250" },
  ],
  Lunch: [
    { name: "Conbo Fasting", ingredient: "", price: "600" },
    { name: "Grilled Chicken Breast", ingredient: "", price: "1000" },
    { name: "Chiken Couttlet", ingredient: "", price: "1100" },
    { name: "Half Roasted Chicken", ingredient: "", price: "1500" },
    { name: "Veal Couttlet", ingredient: "", price: "1200" },
    { name: "Fill Steak", ingredient: "", price: "1200" },
    { name: "Fill Goulash", ingredient: "", price: "1000" },
    { name: "Yebeg Tibs(የበግ ጥብስ)", ingredient: "", price: "800" },
  ],
  Pizza: [
    { name: "Meat Lover Pizza", ingredient: "", price: "700" },
    { name: "Vegetable Pizza", ingredient: "", price: "600" },
    { name: "Margarita Pizza", ingredient: "", price: "650" },
    { name: "Tuna Pizza", ingredient: "", price: "700" },
    { name: "Chicken Pizza", ingredient: "", price: "700" },
    { name: "Special Pizza", ingredient: "", price: "800" },
    { name: "Shawerma with Chicken", ingredient: "", price: "700" },
  ],
  Burger: [
    { name: "Beef Burger(Normal)", ingredient: "", price: "850" },
    { name: "Cheese Burger", ingredient: "", price: "1000" },
    { name: "Special Burger", ingredient: "", price: "1200" },
    { name: "Chicken Burger", ingredient: "", price: "1300" },
    { name: "Club Sandwich", ingredient: "", price: "1500" },
    { name: "Fasting Burger (fekafl Burger)", ingredient: "", price: "700" },
    { name: "Fish Sandwich", ingredient: "", price: "800" },
  ],
  Fish: [
    { name: "Fish Couttlet", ingredient: "", price: "500" },
    { name: "Fish Goulash", ingredient: "", price: "550" },
    { name: "Grilled Nile Perch", ingredient: "", price: "750" },
    { name: "Shish Kebab", ingredient: "", price: "550" },
    { name: "Baked Fish", ingredient: "", price: "700" },
  ],
  Soup: [
    { name: "Chicken Cream Soup", ingredient: "", price: "450" },
    { name: "Vegetable Soup", ingredient: "", price: "350" },
    { name: "Minstroni Soup", ingredient: "", price: "350" },
  ],
  Breakfast: [
    { name: "Omelette with Tea", ingredient: "", price: "400" },
    { name: "Special Omelette", ingredient: "", price: "450" },
    { name: "Scramble Egg", ingredient: "", price: "400" },
    { name: "Cabbage Egg", ingredient: "", price: "400" },
    { name: "Pan Cake", ingredient: "", price: "315" },
    { name: "Toast Bread with Jam", ingredient: "", price: "300" },
    { name: "Fried Egg", ingredient: "", price: "350" },
    { name: "Tomato with Egg", ingredient: "", price: "400" },
    { name: "French Toast", ingredient: "", price: "400" },
  ],
  "Local Breakfast": [
    { name: "Fasting Firfir", ingredient: "", price: "450" },
    { name: "Special Ful", ingredient: "", price: "450" },
    { name: "Dulet", ingredient: "", price: "450" },
    { name: "Chechebsa", ingredient: "", price: "450" },
    { name: "Special Chechebsa", ingredient: "", price: "500" },
  ],
};
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
              <ListItemText primary={category} sx={{color: "black"}} />
            </MenuItem>
          ))}
        </Menu>

        <Grid container spacing={2}>
          {selectedCategory
            ? menuItems[selectedCategory].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={3}
                    variant="outlined"
                    sx={{ p: 2, borderRadius: 3 }}
                  >
                    <Typography variant="h6" gutterBottom color="#000000">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      {item?.ingredient || "ingredient"}
                    </Typography>
                    <Typography variant="h6" color="#000000">
                      {item.price}
                    </Typography>
                  </Paper>
                </Grid>
              ))
            : categories.map((category) =>
                menuItems[category].map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                      <Typography variant="h6" gutterBottom color="#000000">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        gutterBottom
                      >
                        {item?.ingredient || "ingredient"}
                      </Typography>
                      <Typography variant="h6" color="#000000">
                        {item.price}
                      </Typography>
                    </Paper>
                  </Grid>
                ))
              )}
        </Grid>
      </Container>
    </div>
  );
};

export default index;
