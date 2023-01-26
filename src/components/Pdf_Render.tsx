import { SetStateAction, useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Pdf_Render = (props: { file: File; setValid: React.Dispatch<SetStateAction<boolean>> }) => {
    const { file, setValid } = props;
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const canvasRef = useRef(null);

    const onDocumentLoadSuccess = (pdf) => {
        setNumPages(pdf.numPages);
    }
    return (
        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
    )
}

export default Pdf_Render;