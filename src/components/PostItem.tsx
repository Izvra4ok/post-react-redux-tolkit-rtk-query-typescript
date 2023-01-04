import React from 'react';
import {IPosts} from "../types/IPosts";

interface PropsType {
    post: IPosts
    remove: (post: IPosts) => void,
    update: (post: IPosts) => void,
}

const PostItem: React.FC<PropsType> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }
    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt("Title post") || "";
        const body = prompt("Body post") || "";
        update({...post, title, body})
    }

    return (
        <div onClick={handleUpdate} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid black",
            margin: "5px",
            padding: "5px"
        }}>
            <div
                 style={{margin: "5px"}}>
                <b>{post.id}:{post.title}</b>
                <br/>
                {post.body}</div>
            <div>
                <button onClick={handleRemove}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;