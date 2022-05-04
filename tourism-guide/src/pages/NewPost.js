import React from "react";
import { useNavigate } from "react-router-dom";
import FormNewPost from "../components/posts/FormNewPost";

export default function NewPostPage() {
    const navigate = useNavigate();

    function addInputDataObjectHandler(inputDataObject) {
        fetch(
            "https://react-app-tourist-guide-default-rtdb.firebaseio.com/posts.json",
            {
                method: "POST",
                body: JSON.stringify(inputDataObject),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            navigate("/");
        });
    }

    return (
        <section>
            <h1>New Post Page</h1>
            <FormNewPost onAddPost={addInputDataObjectHandler} />
        </section>
    );
}
