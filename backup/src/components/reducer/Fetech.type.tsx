export type PostDataType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type FetchState = {
    data: PostDataType[];
    laoding: boolean;
    error: string;
};

export type FetchActions = {
    type: "REQUEST" | "SUCCESS" | "ERROR";
    payload ?: PostDataType[]
};
