import PropTypes from 'prop-types';

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

ImageUpload.propTypes = {
  onImageChange: PropTypes.func.isRequired, // Validate that onImageChange is a function and required
};

export default ImageUpload;
