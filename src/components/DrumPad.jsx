import React, { useRef, useEffect } from 'react'
import './Drum.css'
import { Button } from 'react-bootstrap';


const DrumPad = ({ drum_id, audio_file, pressed, volume }) => {

    const audioRef = useRef(null)

    const buttonTrigger = () => {
        pressed();
        audioRef.current.volume = (volume/100);
        audioRef.current.play();

        setTimeout(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }, 500); // 1000 milliseconds = 1 second
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === `Key${drum_id}`) { // replace "KeyA" with the specific key you want to trigger the button press
            buttonTrigger();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); 

    return (
        <Button className="btn-info btn-lg btn-outline-dark col-auto mb-3" onClick={buttonTrigger} id={drum_id}>
            {drum_id}<audio className='d-none' id={`audio ${drum_id}`} ref={audioRef} src={audio_file} controls></audio>
        </Button>
    )
}

export default DrumPad