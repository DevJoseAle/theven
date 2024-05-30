import { supabase } from '../../supabase-client';


export const getCategories = async () => {

    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) {return;}

    return data;
};
