import React from "react";
import { useState } from "react";
import PostList from "../components/posts/PostList";

const DUMMY_DATA = [
    {
        id: "m1",
        title: "This is a first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
        id: "m2",
        title: "This is a second meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
];

export default function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedposts] = useState([]);

    fetch(
        "https://react-app-tourist-guide-default-rtdb.firebaseio.com/posts.json"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setIsLoading(false);
            setLoadedposts(data);
        });

    if (isLoading) {
        return (
            <section>
                <p> Loading... </p>
            </section>
        );
    }

    return (
        <div>
            <h1>All Posts</h1>
            <PostList post={loadedPosts} />
        </div>
    );
}
