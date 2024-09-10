

    export type User={
    id:number;
    email:string;
    image: string
    name:string;
}
export type Comment={
    content: string;
    createdAt: number;
    blogId: number;
    authorId:number;
    author: User
}

export type Blog= {
    id: number
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
    author:User;
    comment: Comment
}

export  type CredentialsLogin={
    id: number
    email:string;
    password:string;
}
