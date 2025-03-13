'use client'
import React from "react";

export default function InteractiveCard({children, contentName}:{children:React.ReactNode, contentName:string}) {

  function onVenueSelected() {
    alert("You selected" + contentName)
  }

  return (
    <div className='h-80 w-64 bg-white pt-2 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:bg-neutral-200' onClick={() => onVenueSelected()}>
      { children }
    </div>
  );
}