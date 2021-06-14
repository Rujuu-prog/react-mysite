export interface BlogType {
    id: number;
    img: string;
    text: string;
    title: string;
};

export interface HeaderType {
    id: number;
    text: string;
};

export interface CalendarDataType {
    id: number;
    data: Array<CalendarDatumType>;
};

export interface CalendarDatumType {
    id: number;
    datum: string;
};


