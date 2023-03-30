import React from 'react'; 
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <div>Home page</div>
            <button onClick={() => navigate('/order-summary', { replace: true })}>Go to order summary</button>
        </>
    )
}

export default Home