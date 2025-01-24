import { EventModel } from "../models/event-model";


export class EventService{

    async create(data: {name: string, description: string | null, date: Date, location: string, partner_id: number}){
        const { name, description, date, location, partner_id } = data;
        
        const event = await EventModel.create(
            {name, description, date, location, partner_id});

        return{
            id: event.id, 
            name, 
            description, 
            date, 
            location, 
            created_at: event.created_at, 
            partner_id: event.partner_id,
        }
    }

    async findAll(partnerId?: number){
        return EventModel.findAll({
            where: { partiner_id: partnerId },
        });  
    }

    async findById(eventId: number){
        return EventModel.findById(eventId);
    }
}