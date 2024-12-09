import { useLoaderData } from "react-router-dom";

import TableWithPagination from "../components/TableWithPagination";
import { useTranslation } from 'react-i18next';

import { useRef, useState } from "react";


export default function Support() {
    const { t } = useTranslation();
    // https://jsonplaceholder.typicode.com/comments

    const comments = useLoaderData();

    const [nameColumnFilter, setNameColumnFilter] = useState([
        {
          id: 'name',
          value: 'labor'
        }
    ]);

    const ref = useRef();

    console.log('Response:' + JSON.stringify(comments));

    const columns = [
        {
            id: "postId", // Unik id
            accessorKey: "postId",
            header: <span>Id</span>, 
            size: "10%",
          },
          {
            id: "id", // Unik id
            accessorKey: "id",
            header: <span>Id</span>, 
            size: "10%",
          },
        {
          id: "name", // Unik id
          accessorKey: "name",
          header: <span>{t('name')}</span>, 
          size: "40%",
        },
        {
          id: "email", // Unik id
          accessorKey: "email",
          header: () => <span>E-mail</span>,
          size: "40%" ,
        },
      ];
    
    function setFilter() {
        setNameColumnFilter( [{
            id: 'name',
            value: ref.current.value
          }]);
    }
    

    const pageSize = 25;
    
    return <>
        Test
        <input onChange={setFilter} ref={ref}></input>
       <TableWithPagination columnFilters={nameColumnFilter} pageSize={pageSize} data={comments} columns={columns} classes="md:w-3/4 w-full"/>
    </>;


}

export async function loader() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  
    if (!response.ok) {
      //return {isError: true, message: "Error fetching events."}
  
      throw new Response(
        JSON.stringify({
          message: "Could not load events.",
        }),{ status: 500 
  
        });
        // throw json({message: 'Tester'}, {status: 500});
  
    } else {
      return response;
    }
}