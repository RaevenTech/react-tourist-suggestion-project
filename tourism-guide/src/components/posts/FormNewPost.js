import React from "react";
import Card from "../Ui/Card";
import classes from "./FormNewPost.module.css";

export default function FormNewPost() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Post Title</label>
                    <input
                        type="text"
                        id="title"
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
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Address..."
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows="5"
                        placeholder="Description..."
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
