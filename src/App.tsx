import React from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import PostContainer from "./components/PostContainer";

const App = () => {

    return (
        <div className="App">
            <PostContainer/>
            <hr/>
            <UsersList/>
        </div>
    );
}

export default App;
