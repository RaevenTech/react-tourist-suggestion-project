import React from "react";
import PostItems from "./PostItems";
import classes from "./PostList.module.css";

export default function PostList(props) {
    return (
        <ul className={classes.list}>
            {props.post.map((posts) => (
                <PostItems
                    key={posts.id}
                    id={posts.id}
                    image={posts.image}
                    title={posts.title}
                    address={posts.address}
                    description={posts.description}
                />
            ))}
        </ul>
    );
}
