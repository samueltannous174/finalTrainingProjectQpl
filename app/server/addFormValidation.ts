type Form = {
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
};

export const validate = (formData: Form)=> {
    const newErrors: Record<string, string> = {};

    if (!formData.title) {
        newErrors.title = "Title is required";
    } else if (formData.title.length < 5) {
        newErrors.title = "Title must be at least 5 characters long";
    } else if (formData.title === 'Title') {
        newErrors.title = "Please change the title from 'Title'";
    }

    if (!formData.paragraph) {
        newErrors.paragraph = "Content is required";
    } else if (formData.paragraph.length < 20) {
        newErrors.paragraph = "Content must be at least 20 characters long";
    }

    if (!formData.image) {
        newErrors.image = "Image is required";
    }


    if (Object.keys(newErrors).length > 0) {
        throw newErrors;
    }

    return newErrors;
};
