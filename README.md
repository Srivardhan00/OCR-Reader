# OCR Reader

OCR Reader is a React-based application that allows users to upload images and extract text from them using Optical Character Recognition (OCR) technology. This project leverages Tesseract.js for OCR and TensorFlow.js for image preprocessing.

**Visit the project [here](https://snap-to-text.vercel.app/)**

## Table of Contents

- [Features](#features)
- [Sample Images](#sample-images)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Image Upload**: Upload images directly from your device.
- **Text Extraction**: Extract text from uploaded images using Tesseract.js.
- **Image Preprocessing**: Convert images to grayscale using TensorFlow.js for better OCR accuracy (V2).
- **Image Conversion**: Convert the images to black & white for better text extraction (V3).

## Sample Images

- With V1
  ![With V1](/OCR-Reader/assets/image.png)

- With V2
  ![With V2](/OCR-Reader/assets/image-1.png)

- With V3
  ![With V3](/OCR-Reader/assets/image-2.png)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/OCR-Reader.git
   cd OCR-Reader
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Upload an image and see the extracted text.
4. Try with all the versions of the OCR Reader.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run preview`: Previews the production build.

## Project Structure

- **[`src/imageUpload.jsx`](OCR-Reader/src/imageUpload.jsx)**: Component for uploading images.
- **[`src/OCRReaderV1.jsx`](OCR-Reader/src/OCRReaderV1.jsx)**: Basic OCR reader component.
- **[`src/OCRReaderV2.jsx`](OCR-Reader/src/OCRReaderV2.jsx)**: OCR reader with image preprocessing using TensorFlow.js.
- **[`src/OCRReaderV3.jsx`](OCR-Reader/src/OCRReaderV3.jsx)**: OCR reader with image preprocessing using TensorFlow.js and conversion to black and white.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
