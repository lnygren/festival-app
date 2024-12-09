import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let message = 'Something went wrong.';


    if(error.status === 500 ) {
        message = JSON.parse(error.data).message;
    } 

    if(error.status === 404 ) {
        message = 'Page does not exist.'
    } 

    return <>
    <MainNavigation />
       <PageContent title="An error occurred.">
            <p>{message}</p>
            {/*JSON.stringify(error)*/}
        </PageContent>
    </>;

}