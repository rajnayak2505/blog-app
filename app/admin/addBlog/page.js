'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "",
        author: "Rajesh Nayak",
        authorImg: "/author_img.png"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
        console.log(data)
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);

        const response = await axios.post('/api/blog', formData);
        if (response.data.success) {
            toast.success(response.data.msg);
            setImage(null);
            setData({
                title: "",
                description: "",
                category: "",
                author: "Rajesh Nayak",
                authorImg: "/author_img.png"
            })

        } else {
            toast.error("Error")
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16 '>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor='image'>
                    <span className='text-8xl cursor-pointer'>🖼️</span>
                    {image && (
                        <Image
                            src={URL.createObjectURL(image)}
                            width={300}
                            height={200}
                            alt="Preview"
                        />
                    )}
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} name="image" accept="image/*" type='file' id="image" hidden required />
                <p className='text-xl mt-4'>Blog title</p>
                <input name="title" onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required />
                <p className='text-xl mt-4'>Blog description</p>
                <textarea name="description" onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Write content here' rows={6} required />
                <p className='text-xl mt-4'>Blog category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                    <option value='Start-up'>Start-up</option>
                    <option value='Tech'>Tech</option>
                    <option value='Lifestyle'>Lifestyle</option>
                    <option value='Business'>Business</option>
                </select>
                <br />
                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
            </form>
        </>
    )
}

export default page