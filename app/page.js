"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const page = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async () => {
        const response = await fetch("../api/addTask.js", {
            method: "POST",
        });
        console.log(response.message);
        setAllTasks([...allTasks, { title, description }]);
    };
    const handleEdit = (title) => {
        const task = allTasks.filter((task) => task.title === title);
        setTitle(task[0].title);
        setDescription(task[0].description);
        setAllTasks(allTasks.filter((task) => task.title !== title));
    };
    const handleDelete = (title) => {
        setAllTasks(allTasks.filter((task) => task.title !== title));
    };
    return (
        <main>
            <Header />
            <div style={{ height: "88vh" }}>
                <h1 className="text-center py-5 text-3xl font-semibold">Todo List App</h1>
                <div className="flex border-t border-slate-400 items-stretch " style={{ height: "90%" }}>
                    <div className="w-1/2 flex flex-col">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setTitle("");
                                setDescription("");
                            }}
                            className="flex flex-col flex-1 items-center justify-center"
                        >
                            <h2 className="text-lg mb-2">Enter Task Details</h2>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="py-1 px-4 border mb-2 border-slate-400 w-1/2 rounded"
                                type="text"
                                placeholder="Task Title"
                            />
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="py-1 px-4 border mb-4 border-slate-400 w-1/2 rounded"
                                type="text"
                                placeholder="Task Description"
                            />
                            <button className="py-1 px-6 border bg-slate-900 text-white rounded hover:bg-slate-800" onClick={handleSubmit}>
                                Add
                            </button>
                        </form>
                        <div className="h-20 bg-slate-900 text-white ">
                            <div className="text-center py-1">Contact Information</div>
                            <div className="flex justify-center gap-10 py-2">
                                <InstagramIcon /> <LinkedInIcon /> <FilePresentIcon /> <AlternateEmailIcon />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2  border-s border-slate-400">
                        <div>
                            <div className="text-center py-3 font-semibold">Task List</div>
                            <div>
                                {allTasks.length <= 0 ? (
                                    <div className="text-center">No Tasks to Display</div>
                                ) : (
                                    allTasks.map((task, i) => {
                                        return (
                                            <div key={i} className="bg-slate-200 border mb-2 py-2 px-6 ">
                                                <div className="flex justify-between mb-1">
                                                    <div>{task.title}</div>
                                                    <div className="flex gap-3">
                                                        <EditSharpIcon onClick={() => handleEdit(task.title)} className="hover:cursor-pointer" />
                                                        <DeleteSharpIcon onClick={() => handleDelete(task.title)} className="hover:cursor-pointer" />
                                                    </div>
                                                </div>
                                                <div>{task.description}</div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
