export cont RECEIVE_USERS = "RECEIVE_USERS"

export function receiveUsers (users ) {
    return {
        type: RECEIVE_USER,
        users,
    }
}