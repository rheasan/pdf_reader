

import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';
const Notebook = () => {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current!.getContent());
     }
   };
    return (
        <div className="border-3 border-white text-white grow h-full">
            
    <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
        height: 500,
        menubar: true,
        plugins: [
           'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
           'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
           'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
        ],
        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
    />
    <button onClick={log}>Log editor content</button>
    
        </div>
    )
}

export default Notebook;