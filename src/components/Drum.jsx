import React from 'react'
import DrumPad from './DrumPad'
import { useState } from 'react'

const Drum = ({ audio_files, volume }) => {
    const [drumpad, setDrumpad] = useState('')
    return (
        <div className='row bg-dark border border-success border-5 rounded'>
            <div className='container col-10 p-4 text-center' id="drum-machine">
                <div className='row' id="display">
                    <h5 className='container text-primary bg-dark text-5 mb-1 p-2 text-center'>Sound Playing: </h5>
                    <h5 className={drumpad === '' || 'container rounded-pill text-info bg-dark text-5 border border-success border-5 rounded mb-5 p-2 text-center'}>{drumpad}</h5>
                    {audio_files.map((audio_content) => 
                        <div className='col-4'>
                            <DrumPad volume={volume} pressed={() => setDrumpad(audio_content.description)} drum_id={audio_content.id} audio_file={audio_content.audio} />
                        </div>
                    )}
                </div>
            </div>
        </div>
       
    )
}

export default Drum