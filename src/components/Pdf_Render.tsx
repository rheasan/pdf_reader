import { SetStateAction, useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Notebook from "./Notebook";

const Pdf_Render = (props: { file: File; setValid: React.Dispatch<SetStateAction<boolean>> }) => {
    const { file, setValid } = props;
    const [numPages, setNumPages] = useState(0);

    const onDocumentLoadSuccess = (pdf: { numPages: SetStateAction<number>; }) => {
        setNumPages(pdf.numPages);
    }
    return (
        <div className="flex flex-row gap-1 h-full">
            <div className="w-fit">
                <div className="h-10 w-full flex flex-row justify-between text-white m-0 p-1">
                    <h1 className="block">{file.name}</h1>
                    <button className="w-fit m-0 basis-1 block" onClick={() => setValid(false)}>Close</button>
                </div>
                <div className="overflow-y-scroll h-full">
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} renderMode="svg" className="w-1/2">
                        {Array.from(new Array(numPages), (el, index) => (
                            <div key={index}>
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                <div className="h-2 bg-black m-0"></div>
                            </div>
                        ))}
                    </Document>
                </div>
            </div>
            <Notebook />
        </div>
    )
}

export default Pdf_Render;