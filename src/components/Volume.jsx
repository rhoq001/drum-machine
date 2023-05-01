import React from 'react'
import { Button } from 'react-bootstrap';

const Volume = ({ setVol, incrementVol, decrementVol, volume }) => {
    return (
        <div className='bg-dark row justify-content-center border border-warning rounded border-5'>
            <h5 className='text-warning col-12 text-center mt-3'>Volume</h5>
            <div className='text-center col-5 mx-auto'>
                <Button onClick={incrementVol} className="w-100 btn-success btn-md btn-outline-dark mb-3 mt-3" >+</Button>
                <input onChange={(event) => setVol(event.target.value)} className='form-control text-center border border-warning rounded border-5' type="number" min="0" max="100" value={volume} />
                <Button onClick={decrementVol} className="w-100 btn-danger btn-md btn-outline-dark mb-3 mt-3" >-</Button>
            </div>
        </div>
    )
}

export default Volume