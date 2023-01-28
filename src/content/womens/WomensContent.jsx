import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import "../../css/elements.css";

export default function WomensContent() {
  const items = [
    {
      id: 1,
      sku: 12234,
      brand: "Maximos",
      details: "Primo Colorblock Modal & Cotton Sweater Polo",
      description: "",
      item: "Men's Shirt",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=225&h=300&fit=crop",
      price: "64.99",
      size: "",
      color: "",
    },
    {
      id: 2,
      brand: "BOSS",
      details: "Parlay Tipped Pocket Polo",
      description: "",
      item: "Men's Shirt",
      price: "94.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 3,
      brand: "Ted Baker London",
      details: "Galton Tipped Cotton Blend Polo",
      description: "",
      item: "Men's Shirt",
      price: "140.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 4,
      brand: "BOSS",
      details: "Men's Polston Zip Polo",
      description: "",
      item: "Men's Shirt",
      price: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 5,
      brand: "BOSS",
      details: "Parlay 119 Short Sleeve Polo",
      description: "",
      item: "Men's Shirt",
      price: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 6,
      brand: "Ahluwalia",
      details: "Men's Expression Long Sleeve Zip Polo",
      description: "",
      item: "Men's Shirt",
      price: "675.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 7,
      brand: "BOSS",
      details: "Men's Paddy 8 Regular Fit Cotton Polo",
      description: "",
      item: "Men's Shirt",
      price: "118.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 8,
      brand: "Nordstrom",
      details: "Tech-Smart Piqué Polo (Regular, Big & Tall)",
      description: "",
      item: "Men's Shirt",
      price: "94.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/arrul-lin-sYhUhse5uT8-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 9,
      brand: "Rhone",
      details: "Delta Short Sleeve Piqué Performance Polo",
      description: "",
      item: "Men's Shirt",
      price: "64.99",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/etty-fidele-l5rez6X2m8k-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 10,
      brand: "Reiss",
      details: "Charles Colorblack Wool Blend Zip Sweater Knit Polo",
      description: "",
      item: "Men's Shirt",
      price: "150.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/kenzie-kraft-9QW52RyBLao-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 11,
      brand: "NN07",
      details: "Men's Ryan Cotton & Linen Polo",
      description: "",
      item: "Men's Shirt",
      price: "145.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/nathan-mcdine-U5gkKo9ES2w-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 12,
      brand: "NN07",
      details: "Joey 3512 Long Sleeve Polo",
      description: "",
      item: "Men's Shirt",
      price: "165.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/phil-monte-4V4t0JcOM5E-unsplash.jpg?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 13,
      brand: "Reiss",
      details: "Maxwell Quarter Zip Merino Wool Polo",
      description: "",
      item: "Men's Shirt",
      price: "145.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 14,
      brand: "BOSS",
      details: "Hank Slim Fit Cotton Polo",
      description: "",
      item: "Men's Shirt",
      price: "168.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 13,
      brand: "Reiss",
      details: "Maxwell Quarter Zip Merino Wool Polo",
      description: "",
      item: "Men's Shirt",
      price: "145.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITStaticTrainingT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
    {
      id: 14,
      brand: "BOSS",
      details: "Hank Slim Fit Cotton Polo",
      description: "",
      item: "Men's Shirt",
      price: "168.00",
      img: "http://gcsecomie.imgix.net/catalog/men/shirts/Dri-FITRunDivisionRunningT-Shirt .webp?w=225&h=300&fit=crop",
      size: "",
      color: "",
    },
  ];

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto",
      }}
    >
      <Grid item>
        <Grid container justifyContent="center" spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}>
              <Paper
                sx={{
                  width: 250,
                  height: 500,
                  //   backgroundColor: "dark" ? "#1A2027" : "#fff",
                  padding: 2,
                }}
              >
                <img src={item.img} alt="" />
                <br />
                <br />
                <h3>
                  {" "}
                  <strong>{item.brand}</strong>{" "}
                </h3>
                <Link
                  href="#"
                  underline="none"
                  // textDecorationThickness="50px"
                  className="card-detail"
                  sx={{
                    color: "black",
                  }}
                >
                  {item.details}
                </Link>
                <br />
                <br />
                <h4>${item.price}</h4>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
