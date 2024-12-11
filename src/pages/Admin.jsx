import { useSelector } from "react-redux";

export default function Admin() {


    const authenticated = useSelector(state => state.authentication.authenticated); 

  console.log('authenticated ' + authenticated);

    if(!authenticated) {
        return  (<div className="max-w-screen-lg pt-8 mx-auto text-zinc-900 dark:text-zinc-200">
        <h2>Du må være logget inn for å bruke denne funksjonen.</h2>
        
        </div>);
    }

    return <>
        <div className="max-w-screen-lg pt-8 mx-auto text-zinc-900 dark:text-zinc-200">
            <h2>Admin</h2>
            
        </div>
    </>;


}