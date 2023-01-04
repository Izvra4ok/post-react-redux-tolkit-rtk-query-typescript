import React, {useEffect} from 'react';
import {postAPI} from "../services/postService";
import PostItem from "./PostItem";
import {IPosts} from "../types/IPosts";

const PostContainer: React.FC = () => {

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [upatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();


    const handleCreate = async () => {
        const title = prompt("Title post")
        const body = prompt("Message post")
        await createPost({title, body} as IPosts)
    };

    const handleRemove = (post: IPosts) => {
        deletePost(post)
    };

    const handleUpdate = (post: IPosts) => {
        upatePost(post)
    };

    useEffect(() => {

    }, [])

    return (
        <div>
            <h2>Post list:</h2>
            <div>enter in terminal: <b>npm i -g json-server
                <br/>
                json-server --watch db.json --port 5000</b>
            </div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h2>Loading</h2>}
            {error && <h2>Error</h2>}
            {posts && posts.map(post =>
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)}
        </div>
    );
};

export default PostContainer;