import { useState, useEffect } from "react"
import Pdf_Upload from "./components/Pdf_Upload"
import Pdf_Render from "./components/Pdf_Render";
function App() {
    const [PDF, setPDF] = useState(new File([], "none"));
    const [valid, setValid] = useState(false);
    return (
        <div className="bg-slate-900 h-screen w-screen overflow-y-scroll">
            {
                valid ?
                    <Pdf_Render file={PDF} setValid={setValid}/>
                    :
                    <Pdf_Upload setPDF={setPDF} setValid={setValid} />
            }
        </div>
    )
}

export default App
