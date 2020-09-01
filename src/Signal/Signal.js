import React from 'react';

export default function Signal({signalStatus, signalId}) {
    return (
        <div style={{fontSize:'20px', padding:'15px', margin:'15px' }}>
            {`${signalId} is: `}
            <span style={{color:signalStatus }}>{signalStatus}</span>
        </div>
    )
}