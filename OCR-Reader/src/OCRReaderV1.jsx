// OCRReader Component
import { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./imageUpload";

const OCRReaderV1 = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (imageData) => {
    setImage(imageData);
    processImage(imageData);
  };

  const processImage = async (imageData) => {
    try {
      // Perform OCR with Tesseract on the image
      const result = await Tesseract.recognize(imageData, "eng");
      setText(result.data.text);
    } catch (error) {
      console.error("Error recognizing image data:", error);
      // Optionally handle the error more explicitly, e.g., notify the user
    }
  };
  return (
    <div>
      <h2>OCR Reader V1</h2>
      <ImageUpload onImageChange={handleImageChange} />
      {image && <img src={image} />}
      {text != "" && <h3>Extracted Text :</h3>}
      <p>{text}</p>
    </div>
  );
};

export default OCRReaderV1;
