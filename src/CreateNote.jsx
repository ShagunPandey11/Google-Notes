import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note'

const CreateNote=(props)=>{
    const [note,setNote]=useState({
        title:'',
        content:''
    });

    const [expand,setExpand]=useState(false)
    
    const InputEvent=(event)=>{
        const value=event.target.value
        const name=event.target.name

        setNote((prevalue)=>{
            return{
                ...prevalue,
                [name]:value
            };
        })
    }
    
    const addEvent=()=>{
       if(!note.title.trim() && !note.content.trim()){
            alert('Note is empty')
            return;
       }
       props.passNote(note)
       setNote({
        title:'',
        content:''
       })
    }

    const showTitle=()=>{
        setExpand(true)
    }

    const srink=()=>{
        setExpand(false)
    }

    return(
        <>
         <div className="main_note" onDoubleClick={srink}>
            <form>
                {expand?<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="title" autoComplete="off"  ></input>:null}
                <textarea onClick={showTitle}  rows='' column='' name="content" value={note.content} onChange={InputEvent}  placeholder="Write a note..."  ></textarea>
                <Button onClick={addEvent} >
                    <AddIcon className="plus_sign"/>
                </Button>
            </form>
         </div>
        </>
    );
};

export default CreateNote;