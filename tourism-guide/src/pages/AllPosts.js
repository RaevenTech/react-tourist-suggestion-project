import React from "react";
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
    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {DUMMY_DATA.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}
