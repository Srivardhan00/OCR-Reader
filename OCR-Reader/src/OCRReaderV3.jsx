import { useState } from "react";
import ImageUpload from "./imageUpload";
import Tesseract from "tesseract.js";
import * as tf from "@tensorflow/tfjs";

const OCRReaderV3 = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageChange = (imageData) => {
    setImage(imageData);
    processImage(imageData);
  };

  const processImage = async (imageData) => {
    const myImg = new Image();
    myImg.src = imageData;

    myImg.onload = async () => {
      try {
        const tensor = tf.browser.fromPixels(myImg);
        const processedTensor = tf.tidy(() => {
          const gray = tf.mean(tensor, 2).expandDims(-1);
          const contrastFactor = 3.5; // Reduced contrast factor for better detail preservation
          const mean = gray.mean();
          const adjustedContrast = gray
            .sub(mean)
            .mul(contrastFactor)
            .add(mean)
            .clipByValue(0, 1);
          return adjustedContrast;
        });

        const originalWidth = myImg.width;
        const originalHeight = myImg.height;
        const processedImageData = await tf.browser.toPixels(processedTensor);

        const canvas = document.createElement("canvas");
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        const ctx = canvas.getContext("2d");
        const imgData = ctx.createImageData(originalWidth, originalHeight);
        imgData.data.set(processedImageData);
        ctx.putImageData(imgData, 0, 0);
        const processedImageDataUrl = canvas.toDataURL();

        setProcessedImage(processedImageDataUrl);

        const result = await Tesseract.recognize(processedImageDataUrl, "eng");
        setText(result.data.text);

        tensor.dispose();
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
      <h2>OCR Reader V3</h2>
      <ImageUpload onImageChange={handleImageChange} />
      {image && (
        <div className="double">
          <div >
            <h5>Original Image : </h5>
            <img src={image} />
          </div>
          {processedImage && (
            <div>
              <h5>Processed Image : </h5>
              <img src={processedImage} alt="GrayScale" />
            </div>
          )}
        </div>
      )}
      {text != "" && <h3>Extracted Text :</h3>}
      <p>{text}</p>
    </div>
  );
};

export default OCRReaderV3;
