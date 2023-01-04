import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUsers} from "../Redux/reducers/ActionCreators";

const UsersList = () => {

    const dispatch = useAppDispatch();
    const {error, isLoading, users} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Users list:</h2>
            {users.map(user =>
                <div key={user.id} style={{border: "1px solid black", padding: "10px"}}>
                    {user.id}:<b>Name:</b> {user.name}-<br/><b>Email:</b> {user.email}
                </div>)}
        </div>
    );
};

export default UsersList;