import { useState } from "react";
import axios from "axios";

function CarUploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [comment, setComment] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Capture selected image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send the image to the backend
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("username", username);
    formData.append("year", year);
    formData.append("model", model);
    formData.append("brand", brand);
    formData.append("comment", comment);
    formData.append("userId", "");


    try {
      // Make POST request to upload the image
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      // Get the image URL from the response and store it in the state
      setImageUrl(response.data.imageUrl);
      console.log("Image uploaded successfully:", response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="comment">Comment:</label>
            <input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="image">Upload a Car Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Upload Car</button>
      </form>

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={`http://localhost:3000${imageUrl}`} alt="Uploaded Car" width="300" />
        </div>
      )}
    </div>
  );
}

export default CarUploadForm;
