import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./imageUpload";
import * as tf from "@tensorflow/tfjs";

const OCRReaderV2 = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [greyscaleImage, setGreyscaleImage] = useState(null);

  const handleImageChange = (imageData) => {
    setImage(imageData);
    processImage(imageData);
  };

  const processImage = async (imageData) => {
    const myImg = new Image();
    myImg.src = imageData;

    myImg.onload = async () => {
      try {
        const originalWidth = myImg.width;
        const originalHeight = myImg.height;

        // Convert image to tensors and preprocess to grayscale
        const tensor = tf.browser.fromPixels(myImg);
        const processedTensor = tf.tidy(() => {
          let grey = tf.mean(tensor, 2).expandDims(-1).div(tf.scalar(255));
          return grey;
        });

        // Convert tensor back to image data for display
        const greyImage = await tf.browser.toPixels(processedTensor);
        const canvas = document.createElement("canvas");
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        const ctx = canvas.getContext("2d");
        const imgData = ctx.createImageData(originalWidth, originalHeight);
        imgData.data.set(greyImage);
        ctx.putImageData(imgData, 0, 0);
        const greyImageDataURL = canvas.toDataURL();
        setGreyscaleImage(greyImageDataURL);

        // Perform OCR with Tesseract on the grayscale image
        const result = await Tesseract.recognize(greyImageDataURL, "eng");
        setText(result.data.text);

        // Clean up tensors to free memory
        processedTensor.dispose();
      } catch (error) {
        console.error("Error processing the image:", error);
      }
    };

    myImg.onerror = () => {
      console.error("Failed to load image.");
    };
  };
  return (
    <div>
      <h2>OCR Reader V2</h2>
      <ImageUpload onImageChange={handleImageChange} />
      {image && (
        <div>
          <p>Original Image :</p>
          <img src={image} />
        </div>
      )}

      {greyscaleImage && (
        <div>
          <p>Grayscale Image :</p>
          <img src={greyscaleImage} />
        </div>
      )}
      {text != "" && <h3>Extracted Text :</h3>}
      <p>{text}</p>
    </div>
  );
};

export default OCRReaderV2;
