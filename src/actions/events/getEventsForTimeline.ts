import { EventTimeLineEntity } from '../../domain/events/eventTimeLineEntity';
import { EventMapper } from '../../infrastructure/mappers/eventMapper';
import { supabase } from '../../supabase-client';


export const getEventsForTimeline = async (): Promise<EventTimeLineEntity[] | undefined> => {
    try {
        const { data: events, error } = await supabase
            .from('events')
            .select('*');

        if (error) {
            console.error(error);
            return undefined;
        }
        const eventsMapped = events.map((event) => EventMapper.EventForTLMapper(event));
        return eventsMapped;
    } catch (error) {
        console.error(error);
        return undefined;
    }

};



