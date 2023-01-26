import React, { SetStateAction } from "react";
import { useRef } from "react";
const Pdf_Upload = (props: { setPDF: React.Dispatch<SetStateAction<File>> ; setValid: React.Dispatch<SetStateAction<boolean>>}) => {
    const {setPDF, setValid} = props;
    const inputRef = useRef(null);
    const handleSubmit = () => {
        const inputElem : HTMLInputElement = inputRef.current!;
        const files = inputElem.files;
        if(!files){
            alert("No valid files selected");
            setValid(false);
        }
        else if(files.length > 1){
            alert("Only select one file");
            setValid(false);
        }
        else{
            const pdf = files[0];
            setPDF(files[0]);
            setValid(true);
        }
    }
    return (
        <div className="flex flex-col bg-slate-600 border-black border-2 h-32 w-80 m-auto p-1">
            <form onSubmit={handleSubmit}>
                <label htmlFor="upload">Open a PDF File:</label>
                <input ref={inputRef} type="file" accept=".pdf" name="upload" />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default Pdf_Upload;