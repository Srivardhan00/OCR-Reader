# OCR Reader

OCR Reader is a React-based application that allows users to upload images and extract text from them using Optical Character Recognition (OCR) technology. This project leverages Tesseract.js for OCR and TensorFlow.js for image preprocessing.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Image Upload**: Upload images directly from your device.
- **Text Extraction**: Extract text from uploaded images using Tesseract.js.
- **Image Preprocessing**: Convert images to grayscale using TensorFlow.js for better OCR accuracy (V2).
- **Image Conversion**: Convert the images to black & white for better text extraction (V3).

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
- **[`src/imageUpload.jsx`](src/imageUpload.jsx)**: Component for uploading images.
- **[`src/OCRReaderV1.jsx`](src/OCRReaderV1.jsx)**: Basic OCR reader component.
- **[`src/OCRReaderV2.jsx`](src/OCRReaderV2.jsx)**: OCR reader with image preprocessing using TensorFlow.js.
- **[`src/OCRReaderV3.jsx`](src/OCRReaderV3.jsx)**: Placeholder for future enhancements.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
