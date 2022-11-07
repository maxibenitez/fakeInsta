export interface Post {
    _id: number;
    userId: number;
    imageId: number;
    __v?: number;
}

export class NewPost implements Post{
    _id: number = 0;
    userId: number;
    imageId: number;

    constructor(id: number, userId: number, imageId: number) {
        this._id = id;
        this.userId = userId;
        this.imageId = imageId;
    }
}