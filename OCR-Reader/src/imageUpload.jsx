import React from "react";

const ImageUpload = ({ onImageChange }) => {
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="uploader">
      <input type="file" onChange={handleImageUpload} accept="image/*"></input>
    </div>
  );
};

export default ImageUpload;
