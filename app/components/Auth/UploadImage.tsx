import {useEffect, useState} from "react";
import {supabase} from "~/components/supabaseClient";

type Props={
    name: { [key: string]: string };
    setImageError: (content: string) => void;
}

function    ImageUpload({name, setImageError} : Props) {
    const [image,setImage]=useState(null)

    useEffect(() => {
        const uploadImage = async () => {
            if (image) {
                const fileName = `${name}-image`;
                try {
                    const { data, error: uploadError } = await supabase.storage
                        .from('UsersImages')
                        .upload(fileName, image, {
                            cacheControl: '3600',
                            upsert: false,
                            contentType: image.type
                        });

                    if (uploadError) {
                        console.log(uploadError)
                        setImageError(uploadError.message)

                    }
                    else {
                        console.log(data)
                    }
                } catch (error) {
                    setImageError("please change the username")
                }
            }
        };

        uploadImage().catch(error => {
            console.error("Promise rejected:", error);
        });
    }, [image,name]);



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(file);
            }
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
            <input className="mt-[10px] text-white" type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </>
    );
}

export default ImageUpload;
