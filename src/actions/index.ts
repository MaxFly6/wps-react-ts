export const getUserInfo = <T,>(data: T) => {
    return {
        type: 'GET_USER_INFO',
        data
    } as const
}
