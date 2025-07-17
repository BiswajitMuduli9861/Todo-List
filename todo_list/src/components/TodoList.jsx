// import React from 'react'
// import { IoCheckboxSharp, IoCodeWorking } from "react-icons/io5";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdModeEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import axios from 'axios';

// const TodoList = () => {
//     const [input, setInput] = React.useState("");
//     const [todos, setTodos] = React.useState([]);
//     // console.log(input)
//     // console.log(todos)
// const userId = '687731abb9c9f44d63f991f2'

// const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (input.trim() === "") {
//         alert("Please enter a todo item");
//         return;
//     }
    
    
//     try{
//             const res =await axios.post("http://localhost:5000/av1/addlist",{
//                     userId: userId,
//                     tasks: [
//                         {
//                         task: input,
//                         completed: false,
//                         }
//                     ]
//             })
//             // console.log(res.data)
//             const result= res.data;
//             if(res.status === 201){
//                 // console.log(result.data.tasks)
//                 setTodos(result.data.tasks)

//             }
        
//         }catch(error){
//             console.log(error)
//         }
//     }
//     return (
//         <>
//             <div className="h-screen">
//                 <div className="w-full h-full bg-amber-400 flex justify-center items-start p-5">
//                     <div className="bg-amber-50 w-full h-full sm:w-3/5 lg:w-2/4 p-2">
//                         <h1 className='text-center text-2xl mt-5'>TODO LIST</h1>
//                         <div className="w-full bg-amber-900 flex flex-col items-center mt-5 p-10">
//                             <div className="w-full h-15 mb-5 rounded-2xl">
//                                 <form onSubmit={handleSubmit} className='flex justify-between'>

//                                 <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='add List'  className="bg-amber-500 w-full rounded-s-2xl h-15 pl-7 placeholder:text-gray-500 placeholder:text-[20px]"/>
//                                 <button type="submit"  className='bg-indigo-500 w-[90px] rounded-e-2xl'>Add Item</button>
//                                 </form>
//                             </div>
//                             <ul className="bg-fuchsia-300 w-full mt-9 p-5 rounded-[10px]">
//                                 <li className='bg-lime-500 flex justify-between mb-2 p-3 rounded-[10px]'>

//                                     <div className="flex items-center">
//                                         <IoCheckboxSharp className='text-2xl'/>
//                                         <h3>HTML</h3>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="text-2xl bg-white p-1 rounded-[5px]">

//                                         <MdModeEdit />
//                                         </div>
//                                         <div className="text-2xl text-red-700 bg-white p-1 rounded-[5px] ms-2">

//                                         <MdDelete />
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className='bg-lime-500 flex justify-between p-3 rounded-[10px]'>

//                                     <div className="flex items-center">
//                                         <IoCheckboxSharp className='text-2xl'/>
//                                         <h3>CSS</h3>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="bg-white p-1 rounded-[5px]">
//                                         <MdModeEdit className='text-2xl'/>
//                                         </div>
//                                         <div className="text-2xl text-red-700 bg-white p-1 rounded-[5px] ms-2">
//                                         <MdDelete />
//                                         </div>

//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TodoList




// import React, { useEffect } from 'react'
// import { IoCheckboxSharp, IoCodeWorking } from "react-icons/io5";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdModeEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import axios from 'axios';

// const TodoList = () => {
//     const [input, setInput] = React.useState("");
//     const [todos, setTodos] = React.useState([]);
//     // console.log(input)
//     // console.log(todos)
// const userId = '687731abb9c9f44d63f991f2'

// const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (input.trim() === "") {
//         alert("Please enter a todo item");
//         return;
//     }    
//     try{
//             const res =await axios.post("http://localhost:5000/av1/addlist",{
//                     userId: userId,
//                     tasks: [
//                         {
//                         task: input,
//                         completed: false,
//                         }
//                     ]
//             })
//             // console.log(res.data)
//             const result= res.data;
//             if(res.status === 201){
//                 // console.log(result.data.tasks)
//                 alert("Todo added Sucessfully")
//                 // setTodos(result.data.tasks)
//                 fetchData()

//             }
        
//         }catch(error){
//             console.log(error)
//         }
//     }

//     const fetchData = async() =>{
//         const res = await axios.get(`http://localhost:5000/av1/readlist/${userId}`)
//         // console.log(res,153)
//         if(res.status === 200){
//             setTodos(res.data.data.tasks)
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])


//     const deleteTodo = async(taskId) =>{
//         // console.log(taskId)
//         try {
//             const res = await axios.delete(`http://localhost:5000/av1/deletelist/${userId}/${taskId}`)
//             if (res.status === 200) {
//             alert("Task deleted successfully");
//             fetchData(); // update list
//     }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (
//         <>
//             <div className="h-screen">
//                 <div className="w-full h-full bg-amber-400 flex justify-center items-start p-5">
//                     <div className="bg-amber-50 w-full h-full sm:w-3/5 lg:w-2/4 p-2">
//                         <h1 className='text-center text-2xl mt-5'>TODO LIST</h1>
//                         <div className="w-full bg-amber-900 flex flex-col items-center mt-5 p-10">
//                             <div className="w-full h-15 mb-5 rounded-2xl">
//                                 <form onSubmit={handleSubmit} className='flex justify-between'>

//                                 <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='add List'  className="bg-amber-500 w-full rounded-s-2xl h-15 pl-7 placeholder:text-gray-500 placeholder:text-[20px]"/>
//                                 <button type="submit"  className='bg-indigo-500 w-[90px] rounded-e-2xl'>Add Item</button>
//                                 </form>
//                             </div>
//                             <ul className="bg-fuchsia-300 w-full mt-9 p-5 rounded-[10px]">
//                                 {
//                                     todos.map((value, index)=>{
//                                         return(

//                                             <li key={index} className='bg-lime-500 flex justify-between mb-2 p-3 rounded-[10px]'>

//                                     <div className="flex items-center">
//                                         <IoCheckboxSharp className='text-2xl'/>
//                                         <h3>{value.task}</h3>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="text-2xl bg-white p-1 rounded-[5px]">

//                                         <MdModeEdit />
//                                         </div>
//                                         <div className="text-2xl text-red-700 bg-white p-1 rounded-[5px] ms-2" onClick={()=>deleteTodo(index)}>

//                                         <MdDelete />
//                                         </div>
//                                     </div>
//                                 </li>
//                                         )
//                                     })
//                                 }
                                
                               
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TodoList






import React, { useEffect } from 'react';
import { IoCheckboxSharp } from "react-icons/io5";
import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from 'axios';

const TodoList = () => {
    const [input, setInput] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [editIndex, setEditIndex] = React.useState(null);
    const [editInput, setEditInput] = React.useState("");

    const userId = '687731abb9c9f44d63f991f2';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Please enter a todo item");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/av1/addlist", {
                userId: userId,
                tasks: [
                    {
                        task: input,
                        completed: false,
                    }
                ]
            });

            if (res.status === 201) {
                alert("Todo added successfully");
                setInput(""); // clear input
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/av1/readlist/${userId}`);
            if (res.status === 200) {
                setTodos(res.data.data.tasks);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteTodo = async (taskId) => {
        try {
            const res = await axios.delete(`http://localhost:5000/av1/deletelist/${userId}/${taskId}`);
            if (res.status === 200) {
                alert("Task deleted successfully");
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (taskId) => {
        // const taskId = todos[index]._id;

        try {
            const res = await axios.put(`http://localhost:5000/av1/updatelist/${userId}/${taskId}`, {
                newTask: editInput
            });

            if (res.status === 200) {
                alert("Task updated successfully");
                setEditIndex(null);
                setEditInput("");
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-screen">
            <div className="w-full h-full bg-amber-400 flex justify-center items-start p-5">
                <div className="bg-amber-50 w-full h-full sm:w-3/5 lg:w-2/4 p-2">
                    <h1 className='text-center text-2xl mt-5'>TODO LIST</h1>
                    <div className="w-full bg-amber-900 flex flex-col items-center mt-5 p-10">
                        <div className="w-full h-15 mb-5 rounded-2xl">
                            <form onSubmit={handleSubmit} className='flex justify-between'>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder='add List'
                                    className="bg-amber-500 w-full rounded-s-2xl h-15 pl-7 placeholder:text-gray-500 placeholder:text-[20px]"
                                />
                                <button type="submit" className='bg-indigo-500 w-[90px] rounded-e-2xl'>Add Item</button>
                            </form>
                        </div>
                        <ul className="bg-fuchsia-300 w-full mt-9 p-5 rounded-[10px]">
                            {
                                todos.map((value, index) => (
                                    <li key={index} className='bg-lime-500 flex justify-between mb-2 p-3 rounded-[10px]'>
                                        <div className="flex items-center">
                                            <IoCheckboxSharp className='text-2xl' />
                                            {editIndex === index ? (
                                                <input
                                                    value={editInput}
                                                    onChange={(e) => setEditInput(e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") handleUpdate(index);
                                                    }}
                                                    className="ml-2 px-2 py-1 rounded-md"
                                                    autoFocus
                                                />
                                            ) : (
                                                <h3 className="ml-2">{value.task}</h3>
                                            )}
                                        </div>
                                        <div className="flex items-center">
                                            <div
                                                className="text-2xl bg-white p-1 rounded-[5px]"
                                                onClick={() => {
                                                    setEditIndex(index);
                                                    setEditInput(value.task);
                                                }}
                                            >
                                                <MdModeEdit />
                                            </div>
                                            <div
                                                className="text-2xl text-red-700 bg-white p-1 rounded-[5px] ms-2"
                                                onClick={() => deleteTodo(value._id)}
                                            >
                                                <MdDelete />
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
