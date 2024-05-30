export interface EventSBResponse {
    id:            string;
    created_at:     string | null;
    flyer_url:     string | null;
    init_date:     string | null;
    finish_date:   string | null;
    init_hour:     string | null;
    finish_hour:   string | null;
    visibility:    boolean | null;
    price:         number | null;
    isfree:        boolean | null;
    description:   string | null;
    location:      string[] | null;
    capacity:      number | null;
    category_id:   number | null;
    tags:          string[] | null;
    video_url:     string | null;
    attendance:    number | null;
    event_name:    string | null;
    creator_id:    string | null;
    rating:        number | null;
    address:       string | null;
    address_space: string | null;
}

export interface EventByIDBResponse {
    id:            string;
    created_at:    string;
    flyer_url:     string;
    init_date:     string;
    finish_date:   string;
    init_hour:     string;
    finish_hour:   string;
    visibility:    boolean;
    price:         number;
    isfree:        boolean;
    description:   string;
    location:      string[];
    capacity:      number;
    category_id:   number;
    tags:          string[];
    video_url:     string;
    attendance:    number;
    event_name:    string;
    creator_id:    string;
    rating:        number;
    address:       string;
    address_space: string;
}
