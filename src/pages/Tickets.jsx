export default function Tickets() {
    return <>
        <div className="max-w-screen-lg pt-8 mx-auto text-zinc-900 dark:text-zinc-200">
            <h2>Tickets</h2>
            <table className="mt-5 table w-full border border-collapse border-zinc-500">
                <thead className="text-lg font-bold">
                    <td className="border border-zinc-500 p-3">Tickets</td>
                    <td className="border border-zinc-500 p-3">Price</td>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-zinc-500 py-2 px-3">
                            Single day ticket
                        </td>
                        <td className="border border-zinc-500 py-2 px-3">
                            $30
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-zinc-500 py-2 px-3">
                            7 day ticket
                        </td>
                        <td className="border border-zinc-500 py-2 px-3">
                            $100 
                        </td>
                    </tr>

                </tbody>
                <caption class="caption-bottom">Once they're gone they're gone!</caption>

            </table>
           

            <section className="rounded-tl-full rounded-br-full flex flex-col items-center justify-center px-10 py-40 bg-gradient-to-br from-cyan-500 to-rose-500">
            <div class="btn bg-[#000] text-zinc-200">
                Some button
            </div>

            </section>
        </div>
    </>;


}