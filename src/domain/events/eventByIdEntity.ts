export interface EventByIDEntity {
    id:            string;
    createdAt:   string;
    flyerUrl:     string;
    initDate:    string;
    finishDate:  string;
    initHour:     string;
    finishHour:   string;
    visibility:    boolean;
    price:         number;
    isfree:        boolean;
    description:   string;
    location:      string[];
    capacity:      number;
    categoryId:   number;
    tags:          string[];
    videoUrl:     string;
    attendance:    number;
    eventName:    string;
    creatorId:    string;
    rating:        number;
    address:       string;
    addressSpace: string;
}
