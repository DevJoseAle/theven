
export interface EventTimeLineEntity{
    id:            string | null;
    flyerUrl:       string | null;
    initDate:      string | null;
    finishDate:     string | null;
    initHour:      string | null;
    finishHour:     string | null;
    price:         number | null;
    isFree:        boolean | null;
    location:      string[] | null;
    capacity:      number | null;
    categoryId:    number | null;
    attendance:    number | null;
    eventName:     string | null;
    rating:        number | null;
    address:       string | null;
    addressSpace:  string | null;
}
