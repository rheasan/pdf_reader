import React, { SetStateAction } from "react";
import { useRef } from "react";
const Pdf_Upload = (props: { setPDF: React.Dispatch<SetStateAction<File>> ; setValid: React.Dispatch<SetStateAction<boolean>>}) => {
    const {setPDF, setValid} = props;
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <div className="flex flex-col bg-gray-900 border-black border-4 h-32 w-80 p-4 mx-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white gap-2 items-start">
            <label htmlFor="upload">Open a PDF File:</label>
            <input ref={inputRef} type="file" accept=".pdf" name="upload" />
            <button type="submit" onClick={handleSubmit}>Upload</button>
        </div>
    )
}

export default Pdf_Upload;