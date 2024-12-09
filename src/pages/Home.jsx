import TableWithPagination from "../components/TableWithPagination";

import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    const data = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Diana", age: 28 },
        { name: "Ethan", age: 22 },
        { name: "Fiona", age: 32 },
        { name: "George", age: 29 },
        { name: "Hannah", age: 26 },
      ];
      
      const columns = [
        {
          id: "name", // Unik id
          accessorKey: "name",
          header: <span>{t('name')}</span>, 
          size: "50%",
        },
        {
          id: "age", // Unik id
          accessorKey: "age",
          header: () => <span>{t('age')}</span>,
          size: "50%" ,
        },
      ];

    return <div className="">
        <div className="text-2xl text-slate-500">{t('home')}</div>
      
        <div>
            <TableWithPagination data={data} columns={columns} />
        </div>
    </div>;


}