import React, { useState, useEffect } from 'react'
import CustomTable from '../../Components/Table'

var a;
export default function ExcelImporter() {

    const handleAdd = (e) => {
        console.log("e", e.target.files[0])
        console.log("URL.createObjectURL(e.target.files[0])", URL.createObjectURL(e.target.files[0]))
        let sourceAux = URL.createObjectURL(e.target.files[0])
        let audio = new Audio(sourceAux);
        console.log("audio",audio)
    }


    const [buttonName, setButtonName] = useState("Play");

    const [audio, setAudio] = useState();

    useEffect(() => {
        if (a) {
            a.pause();
            a = null;
            setButtonName("Play");
        }
        if (audio) {
            a = new Audio(audio);
            a.onended = () => {
                setButtonName("Play");
            };
        }
    }, [audio]);

    const handleClick = () => {
        if (buttonName === "Play") {
            a.play();
            setButtonName("Pause");
        } else {
            a.pause();
            setButtonName("Play");
        }
    };

    const addFile = (e) => {
        if (e.target.files[0]) {
            setAudio(URL.createObjectURL(e.target.files[0]));
        }
    };
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-12 text-center'>


                    <button onClick={handleClick}>{buttonName}</button>
                    <input type="file" onChange={addFile} />


                    <div className='btn btn-success'>
                        <input type="file" onChange={handleAdd} />
                    </div>
                </div>
                <div className='col-md-12 mt-5'>
                    <CustomTable />
                </div>
            </div>

        </div>
    )
}
