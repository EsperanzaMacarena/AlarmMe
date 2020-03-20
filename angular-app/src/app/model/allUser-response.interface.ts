import { PictureResponse } from './picture.response.interface';

export interface AllUserResponse {
    role: string;
    enabled: boolean;
    _id: string;
    keywords: string[];
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    fullname: string;
    picture: PictureResponse;
}