import { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        document.title = "Not Found";

        return () => { }

    }, []);

    return (
        <div className="app__flex" style={{
            width: "100%",
            height: "100vh",
        }}>
            <div>Page Not Found!</div>
        </div>
    )
}

export default NotFound;