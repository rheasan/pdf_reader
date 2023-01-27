// @ts-nocheck
import { useState , useRef} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Notebook = () => {

    const [data, setData] = useState("Start making notes...");
    const [showUpload, setShowUpload] = useState(false);
    const inputRef = useRef(null);

    const handleNotebookDownload = () => {
        const anchor = document.createElement("a");
        anchor.style.display = "hidden";
        anchor.download = "notebook.html";
        anchor.href = "data:text/plain;charset=utf-8," + encodeURIComponent(data);
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const handleNotebookUpload = async () => {
        const inputElem : HTMLInputElement = inputRef.current!;
        const files = inputElem.files;
        if(!files){
            alert("No valid files selected");
        }
        else if(files.length > 1){
            alert("Only select one file");
        }
        else{
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setData(String(reader.result));
            });
            reader.readAsText(files[0]);
            setShowUpload(false);
        }

    }

    return (
        <div className="h-full w-full">
            <div className="h-10 w-full flex flex-row justify-between text-white m-0 p-1">
                <h1 className="block" onClick={handleNotebookDownload}>Export Notebook</h1>
                {
                    showUpload 
                    ? 
                    <input type="file" accept=".html" onInput={handleNotebookUpload} ref={inputRef}/>
                    :
                    <h1 className="block" onClick={() => setShowUpload(true)}>Import existing Notebook</h1>
                }
            </div>
            <CKEditor
                id="main-editor"
                editor={ClassicEditor}
                data={data}
                onChange={(event, editor) => {
                    setData(editor.getData());
                }}
                className="h-full"
            />
        </div>
    );
}

export default Notebook;
