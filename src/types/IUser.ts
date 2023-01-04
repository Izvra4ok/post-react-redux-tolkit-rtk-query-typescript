export interface IUserType {
    id: number,
    name: string,
    email: string,
}

export interface UserStateType {
    users: IUserType[],
    isLoading: boolean,
    error: string,
}