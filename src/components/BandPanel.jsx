export default function BandPanel({image, name, description}) {

    return (
        <div className="min-w-[80%] md:min-w-[40%]">
            <div style={{ backgroundImage: `url(${image})` }} className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"></div>
            <div>
                <h5 className="mt-2">{name}</h5>
                <h6>{description}</h6>
            </div>
        </div>

    );


}