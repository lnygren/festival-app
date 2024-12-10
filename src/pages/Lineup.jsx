

export default function Lineup() {



    return <>
       <div className="max-w-screen-lg mx-auto py-20">
            <h2>
                Headliners
            </h2>
            <p> 
                Follow the timetable and stage to ensure you don't miss your favorite artists.
            </p>
            <div className=" rounded-lg relative mt-5 bg-zinc-800 py-4 px-2 text-zinc-200">
                <div className="absolute top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-sky-900 via-cyan-900  to-teal-900">
                <div className="sticky top-1/2">
                    <div className="realtive size-4">
                        <div className="absolute size-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
                        <div className="bg-rose-500 size-4 rounded-full relative"></div>
                    </div>
                </div>
                </div>
             
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="p-2 bg-zinc-900 rounded-lg my-4">1st July </h4>
                    </div>
                    <div></div>
                    <div className="text-right">
                        <div className="font-bold">Jackie Chaston</div>
                        <div className="text-zinc-400">6pm - Sage Stage</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="text-left">
                        <div className="font-bold">Jackie Chaston</div>
                        <div className="text-zinc-400">6pm - Sage Stage</div>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="p-2 bg-zinc-900 rounded-lg my-4">2nd July </h4>
                    </div>
                    <div></div>
                    <div className="text-right">
                        <div className="font-bold">Jackie Chaston</div>
                        <div className="text-zinc-400">6pm - Sage Stage</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="text-left">
                        <div className="font-bold">Jackie Chaston</div>
                        <div className="text-zinc-400">6pm - Sage Stage</div>
                    </div>

                </div>
            </div>
            
        </div>
    </>;


}