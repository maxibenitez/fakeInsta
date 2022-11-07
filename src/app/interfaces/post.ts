export interface Post {
    id: number;
    userId: number; //cambiar a number si se quiere usar con in-memory-data
    imageId: number;
}

export class NewPost{
    //id: number = 0;
    userId: string;
    imageId: number;

    constructor(userId: string, imageId: number) {
        this.userId = userId;
        this.imageId = imageId;
    }
}