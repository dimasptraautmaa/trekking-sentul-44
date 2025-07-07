import React from 'react';
import Context from '../../../utils/context';

const Dashborad = () => {

    const context = React.useContext(Context);
    
    React.useEffect(() => {
        if (!context.username) {
            window.location.href = '/login'
        }
    }, [])

    return (
        <div className='page'>
            
        </div>
    )
}

export default Dashborad