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
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaCheck} from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const TodoList = () => {
    const [input, setInput] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [editIndex, setEditIndex] = React.useState(null);
    const [editInput, setEditInput] = React.useState("");

    const userId = localStorage.getItem('userId') 
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Please enter a todo item");
            return;
        }

        try {
            const res = await axios.post("https://todo-list-5jui.onrender.com/av1/addlist", {
                userId: userId,
                tasks: [
                    {
                        task: input,
                        completed: false,
                    }
                ]
            },{withCredentials: true});

            if (res.status === 201) {
                 toast.success("Added Successfully", {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                setInput(""); // clear input
                fetchData();
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
          navigate("/login")
        }
            console.log(error);
        }
    };

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://todo-list-5jui.onrender.com/av1/readlist/${userId}`,{withCredentials: true});
            if (res.status === 200) {
                setTodos(res.data.data.tasks);
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
          navigate("/login")
        }
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteTodo = async (taskId) => {
        try {
            const res = await axios.delete(`https://todo-list-5jui.onrender.com/av1/deletelist/${userId}/${taskId}`,{withCredentials: true});
            if (res.status === 200) {
                 toast.success("Delete Successfully", {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                fetchData();
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
          navigate("/login")
        }
            console.log(error);
        }
    };

    const clearAll = async () => {
     const res = await axios.delete(`https://todo-list-5jui.onrender.com/av1/todo/clear/${userId}`);
  if (res.status === 200) {
                 toast.success("Clear All List", {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                fetchData();
                            }
};


    const handleUpdate = async (taskId) => {

        try {
            const res = await axios.put(`https://todo-list-5jui.onrender.com/av1/updatelist/${userId}/${taskId}`, {
                newTask: editInput
            },{withCredentials: true});

            if (res.status === 200) {
                 toast.success("Updated Successfully", {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                setEditIndex(null);
                setEditInput("");
                fetchData();
            }
        } catch (error) {
            if(error.response && error.response.status === 401){
          navigate("/login")
        }
            console.log(error);
        }
    };


   const toggleCheckbox = async (taskId, completed) => {
    // console.log("Tooglge check box",completed,taskId)
  try {
    const res = await axios.put(`https://todo-list-5jui.onrender.com/av1/completed/${userId}/${taskId}`, {
      completed: !completed,
    },{withCredentials: true});
    if (res.status === 200) {
      fetchData(); // reload updated todos
    }
  } catch (error) {
    if(error.response && error.response.status === 401){
          navigate("/login")
        }
    console.log(error);
  }
};


    return (
        <div className="h-screen">
            <ToastContainer/>
            <div className="w-full h-full bg-[#212121] flex justify-center items-start p-5">
                <div className="bg-transparent w-full h-full sm:w-3/5 lg:w-2/4 p-2">
                    <h1 className='text-center text-2xl mt-5 text-gray-200 font-bold'>TODO LIST</h1>
                    <div className="w-full bg-[#303030] flex flex-col items-center mt-5 p-10 rounded-2xl">
                        <div className="w-full h-15 mb-5 rounded-2xl">
                            <form onSubmit={handleSubmit} className='flex justify-between'>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder='Enter Item'
                                    className="bg-amber-500 w-full rounded-s-2xl h-15 pl-7 placeholder:text-white placeholder:font-medium placeholder:text-[20px] outline-0 text-white text-[22px]"
                                />
                                <button type="submit" className='bg-indigo-500 w-[90px] rounded-e-2xl text-white font-medium cursor-pointer' >Add Item</button>
                            </form>
                        </div>
                        <ul className="bg-fuchsia-300 w-full mt-9 p-5 rounded-[10px] max-h-80 overflow-y-scroll hide-scrollbar">
                            {
                                [...todos].reverse().map((value, index) => (
                                    <li key={index} className='bg-lime-500 flex justify-between mb-2 p-3 rounded-[10px]  overflow-y-auto'>
                                        <div className="flex items-center">
                                            <button onClick={()=>{toggleCheckbox(value._id, value.completed)}}>
                                                 {value.completed ? (
                                                        <IoCheckboxSharp className="text-2xl text-green-700 cursor-pointer" />
                                                    ) : (
                                                        <MdCheckBoxOutlineBlank className="text-2xl text-gray-600 cursor-pointer" />
                                                    )}
                                            </button>
                                            {editIndex === index ? (
                                                <input
                                                    value={editInput}
                                                    onChange={(e) => setEditInput(e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") handleUpdate(value._id);
                                                    }}
                                                    className="ml-2 px-2 py-1 rounded-md w-[100%] xl:w-[350px] 2xl:w-[450px] outline-amber-700"
                                                    autoFocus
                                                />
                                            ) : (
                                                <h3 className={`${value.completed ? 'line-through text-gray-500' : ''} ml-2 text-[20px] text-white`}>{value.task}</h3>
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
                                                {/* <MdModeEdit className='cursor-pointer'/> */}
                                                {
                                                    editIndex === index ? <div onClick={()=>handleUpdate(value._id)}><FaCheck className='text-blue-600 cursor-pointer' /></div>: <MdModeEdit className='cursor-pointer'/>
                                                }
                                            </div>
                                            <div
                                                className="text-2xl text-red-700 bg-white p-1 rounded-[5px] ms-2"
                                                onClick={() => deleteTodo(value._id)}
                                            >
                                                <MdDelete className='cursor-pointer'/>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="bg-amber-300 mt-6 rounded-[5px] p-1 " onClick={clearAll}>
                            <button className='bg-amber-300 rounded-[5px] p-2 text-[20px] text-gray-50 cursor-pointer'>Clear all task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
