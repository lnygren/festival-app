import { Outlet /*, useNavigation */} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";



function RootLayout() {

    // const navigation = useNavigation();


    return (
        <>
            <MainNavigation />
            <main className="p-4">
                {/*navigation.state === 'loading' && <p>Loading....</p>*/}
                <Outlet />
            </main>
           
        </>
    );
}

export default RootLayout;