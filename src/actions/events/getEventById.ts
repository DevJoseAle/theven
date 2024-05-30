import { EventByIDEntity } from '../../domain/events/eventByIdEntity';
import { EventMapper } from '../../infrastructure/mappers/eventMapper';
import { supabase } from '../../supabase-client';

export const getEventById = async (id: string): Promise<EventByIDEntity | undefined> => {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();
    if (error) {return;}
    return EventMapper.EventByIDMapper(data);
};
