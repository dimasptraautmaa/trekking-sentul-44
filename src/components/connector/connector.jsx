import React from 'react'

const Connector = ({ bg1, bg2 }) => {
    return (
        <div style={{ 
            height: '100px',
            background: `linear-gradient(to bottom, ${bg1}, ${bg2})`
        }}>Connector</div>
    )
}

export default Connector;