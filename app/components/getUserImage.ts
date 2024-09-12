import {supabase} from "~/components/supabaseClient";

export function getUserImage(user){
    console.log(user)
    const fileName = `${user.name}-image`;
    const { data, error } = supabase.storage
        .from('UsersImages')
        .getPublicUrl(fileName);

    if (error) {
        console.error(`Error fetching public URL: ${error.message}`);
    } else {
        const imageUrl = data.publicUrl;
        console.log(`Public Image URL: ${imageUrl}`);
    }
    return data.publicUrl
}