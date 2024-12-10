import { Outlet /*, useNavigation */} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import { useState, useEffect } from "react";

function RootLayout() {

    // const navigation = useNavigation();


    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
      setDarkMode(!darkMode);
    }

    useEffect(() => {
        let theme = '';
        if(darkMode) {
            theme = 'dark';
        }
        document.body.className = theme;
    
        return () => {
          document.body.className = ''; // Fjern klassen på opprydding
        };
      }, [darkMode]);

    return (
        <>
            <MainNavigation toggleDarkMode={toggleDarkMode}/>
            <main className="bg-zinc-200 dark:bg-zinc-900">
                {/*navigation.state === 'loading' && <p>Loading....</p>*/}
                <Outlet />
            </main>
           
        </>
    );
}

export default RootLayout;