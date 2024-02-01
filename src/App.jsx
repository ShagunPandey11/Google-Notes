import React, { useState } from "react";
import Header from './Header'
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import './index.css'

const App=()=>{
    const [addItem,setItem]=useState([])

    const addNote=(note)=>{
        setItem((prevalue)=>{
            return [...prevalue,note];       
        })
    }

    const delNote=(index)=>{
       setItem((prevvalue)=>{
        return(
            prevvalue.filter((elem,id)=>{
                return index!=id
            })
        )
       })
    }

    return(
        <>
         <Header/>
         <CreateNote passNote={addNote}/>
         {addItem.map((val,index)=>{
                return(
                    <Note 
                        key={index}
                        id={index}
                        content={val.content}
                        title={val.title}
                        delItem={delNote}
                    />
                );
            })
         } 
         <Footer/>
        </>
    );
};

export default App;