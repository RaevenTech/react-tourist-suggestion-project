import React from "react";
import Card from "../Ui/Card";
import { useRef } from "react";
import classes from "./FormNewPost.module.css";

export default function FormNewPost(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const userTitleInput = titleInputRef.current.value;
        const userImageInput = imageInputRef.current.value;
        const userAddressInput = addressInputRef.current.value;
        const userDescriptionInput = descriptionInputRef.current.value;

        const inputDataObject = {
            title: userTitleInput,
            image: userImageInput,
            address: userAddressInput,
            description: userDescriptionInput,
        };
        props.onAddPost(inputDataObject);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Post Title</label>
                    <input
                        type="text"
                        id="title"
                        ref={titleInputRef}
                        placeholder="Title..."
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Post Image</label>
                    <input
                        type="url"
                        id="image"
                        placeholder="Url..."
                        ref={imageInputRef}
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Address..."
                        ref={addressInputRef}
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows="5"
                        placeholder="Description..."
                        ref={descriptionInputRef}
                        required
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Post</button>
                </div>
            </form>
        </Card>
    );
}
