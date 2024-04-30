import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddFoodItem() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [halfPrice, setHalfPrice] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleAddNewItem(event) {
    event.preventDefault();

    const newItem = {
      CategoryName: category,
      name: name,
      img: image,
      options: [
        {
          half: halfPrice,
          full: fullPrice,
        },
      ],
      description,
    };

    const response = await fetch("http://localhost:5000/api/new_item", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newItem }),
    });
    navigate("/");
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <form className="container mt-3" onSubmit={handleAddNewItem}>
        <div className="m-3 d-inline">
          <label for="Category" className="form-label">
            Category
            <input
              type="text"
              placeholder="Biryani/Rice"
              className="form-control"
              id="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </label>
        </div>

        <div className="m-3 d-inline">
          <label for="Name" className="form-label">
            Name
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Chicken Biryani"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>

        <br />

        <div className="m-3 d-inline">
          <label for="Half Price" className="form-label">
            Half
            <input
              type="text"
              className="form-control"
              id="Half Price"
              placeholder="₹ 200"
              value={halfPrice}
              onChange={(event) => setHalfPrice(event.target.value)}
            />
          </label>
        </div>

        <div className="m-3 d-inline">
          <label for="Full Price" className="form-label">
            Full
            <input
              type="text"
              className="form-control"
              id="Full Price"
              placeholder="₹ 350"
              value={fullPrice}
              onChange={(event) => setFullPrice(event.target.value)}
            />
          </label>
        </div>

        <div className="m-3">
          <label for="Image" className="form-label">
            Image
            <input
              type="url"
              className="form-control"
              id="Image"
              placeholder="example.com/image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </label>
        </div>

        <div className="m-3">
          <label for="Description" className="form-label">
            Description
          </label>
          <textarea
            name="Description"
            id="Description"
            className="form-control"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Add
        </button>
      </form>

      <div>
        <Footer />
      </div>
    </div>
  );
}
