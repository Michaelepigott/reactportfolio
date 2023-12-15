import { useRouteError } from 'react-router-dom';

//If there's an error, display an error page with the specific error.
export default function Error() {
    const error = useRouteError;
    

    return(
        <div id='errorPage'>
            <h1>ERROR</h1>
            <p>Things went wrong</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}