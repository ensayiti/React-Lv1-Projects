import React from "react";
import {MdDeleteForever} from "react-icons/md";
import {FcApproval} from "react-icons/fc";

function Todo({id,text,date,handleDelete}) {
  return (
    <div className="note">
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>

        <FcApproval size={30} onclick={()=>handleDelete(id)} className="delete-icon" />
      </div>
    </div>
  )
}

export default Todo