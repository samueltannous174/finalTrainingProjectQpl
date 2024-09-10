import {useState} from "react";

const ImageUploader = () => {
    const [ setImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input className="mt-[10px] text-white" type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </div>
    );
};

export default ImageUploader;
