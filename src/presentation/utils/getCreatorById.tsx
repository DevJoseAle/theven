import { supabase } from '../../supabase-client';


export const getCreatorById = async(id: string) =>{

    try {
    const {data: user} = await supabase
    .from('producers')
    .select('id, username, email')
     .eq('id', id);
     if(user === null){return;}
    return user![0].username;
    } catch (error) {
      console.log('error en el creator by id',{error});
      return;
    }


};
