import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
    const [formData, setFormData] = useState({
        question: '',
        webpage: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/chat', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form type="post" onSubmit={handleSubmit}>
            <input type="text" name="question"  label="Question:" /><br></br>
            <input type="text" name="webpage"  label="Web Page to search:" /><br></br>
            <button type="submit">Submit</button>
        </form>
    );
};
export default PostForm;
