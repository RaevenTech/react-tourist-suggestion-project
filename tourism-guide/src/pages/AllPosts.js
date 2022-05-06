import React from "react";
import { useState, useEffect } from "react";
import PostList from "../components/posts/PostList";
import LoadingSpinner from "./spinner/LoadingSpinner";

export default function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedposts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://react-app-tourist-guide-default-rtdb.firebaseio.com/posts.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedposts(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <LoadingSpinner />
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
