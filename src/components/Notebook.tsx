import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Notebook = () => {

    const [data, setData] = useState("");

    const handleNotebookDownload = () => {
        const anchor = document.createElement("a");
        anchor.style.display = "hidden";
        anchor.download = "notebook.html";
        anchor.href = "data:text/plain;charset=utf-8," + encodeURIComponent(data);
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return (
        <div className="h-full w-full">
            <div className="h-10 w-full flex flex-row justify-between text-white m-0 p-1">
                <h1 className="block" onClick={handleNotebookDownload}>Export Notebook</h1>
            </div>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onChange={(event, editor) => {
                    setData(editor.getData());
                }}
                className="h-full"
            />
        </div>
    );
}

export default Notebook;
