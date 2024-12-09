
import band1 from '../assets/images/band1.jpg';
import band2 from '../assets/images/band2.jpg';
import band3 from '../assets/images/band3.jpg';
import band4 from '../assets/images/band4.jpg';
import band5 from '../assets/images/band5.jpg';
import band6 from '../assets/images/band6.jpg';
import band7 from '../assets/images/band7.jpg';
import BandPanel from '../components/BandPanel';

import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


export default function Lineup() {
    const carouselRef = useRef();

    function scrollRight() {
        const itemWidth = carouselRef.current.getElementsByTagName("div")[0].clientWidth;
        carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - itemWidth;
    }

    function scrollLeft() {
        const itemWidth = carouselRef.current.getElementsByTagName("div")[0].clientWidth;
        carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + itemWidth;
    }

    return <>
       <div className="max-w-screen-lg mx-auto mt-20">
            <h2>
                Headliners
            </h2>
            <p>
                Experience the sonic delight from these made-up artists across 7 days that music fans are calling "one of the many gigs that will happen this year"
            </p>
            <div className="flex ">
                <div onClick={scrollRight} id="next" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8"><FontAwesomeIcon icon={faAngleLeft} /></div>
                <div ref={carouselRef} id="carousel" className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto relative -top-8">
                    <BandPanel image={band1} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band2} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band3} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band4} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band5} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band6} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel image={band7} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                </div>
                <div onClick={scrollLeft} id="previous" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8"><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
            
        </div>
    </>;


}