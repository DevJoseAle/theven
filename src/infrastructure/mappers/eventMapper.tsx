import { EventByIDEntity } from '../../domain/events/eventByIdEntity';
import { EventTimeLineEntity } from '../../domain/events/eventTimeLineEntity';
import { EventByIDBResponse, EventSBResponse } from '../interfaces/events';

export class EventMapper {

    static EventForTLMapper = (event: EventSBResponse):EventTimeLineEntity =>{
        return{
            id: event.id,
            flyerUrl: event.flyer_url,
            initDate: event.init_date,
            finishDate: event.finish_date,
            initHour: event.init_hour,
            finishHour: event.finish_hour,
            price: event.price,
            isFree: event.isfree,
            location: event.location,
            capacity: event.capacity,
            categoryId: event.category_id,
            attendance: event.attendance,
            eventName: event.event_name,
            rating: event.rating,
            address: event.address,
            addressSpace: event.address_space,
        };
    };

    static EventByIDMapper = (event: EventByIDBResponse): EventByIDEntity => {
        return {
            id: event.id ,
            createdAt: event.created_at ,
            flyerUrl: event.flyer_url ,
            initDate: event.init_date ,
            finishDate: event.finish_date ,
            initHour: event.init_hour ,
            finishHour: event.finish_hour ,
            visibility: event.visibility ,
            price: event.price ,
            isfree: event.isfree ,
            description: event.description ,
            location: event.location ,
            capacity: event.capacity ,
            categoryId: event.category_id ,
            tags: event.tags ,
            videoUrl: event.video_url ,
            attendance: event.attendance ,
            eventName: event.event_name ,
            creatorId: event.creator_id ,
            rating: event.rating ,
            address: event.address ,
            addressSpace: event.address_space ,

};
    };
}
