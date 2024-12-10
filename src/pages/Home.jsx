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


export default function Home() {
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
       <div className="max-w-screen-lg pt-8 mx-auto ">
            <h2 className="mb-5">
                <span className="text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text">Headliners</span>
            </h2>
            <p>
                Experience the sonic delight from these made-up artists across 7 days that music fans are calling "one of the many gigs that will happen this year"
            </p>
            <div className="flex mt-20 ">
                <div onClick={scrollRight} id="next" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8"><FontAwesomeIcon icon={faAngleLeft} /></div>
                <div ref={carouselRef} id="carousel" className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto relative -top-8">
                    <BandPanel link="/lineup/1" image={band1} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/2" image={band2} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/3" image={band3} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/4" image={band4} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/5" image={band5} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/6" image={band6} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                    <BandPanel link="/lineup/7" image={band7} name="Gary Corduroy" description="1st July 9pm - Main Stage" />
                </div>
                <div onClick={scrollLeft} id="previous" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8"><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>

            <p>
            <h3 className="mt-10  mb-5">Overview</h3>
Harmony Haven Festival is a three-day celebration of music, art, and nature, set against the breathtaking backdrop of Emerald Bay. This eco-conscious festival brings together world-class musicians, emerging artists, and nature lovers for an unforgettable weekend of immersive experiences.

<h3 className="mt-10  mb-5">Lineup</h3>
<p>
The lineup features over 50 acts spanning diverse genres:
</p>


Main Stage: Global icons like Aurora, The Lumineers, and ODESZA headline under the stars.
Indie Grove: Up-and-coming bands and acoustic sets in a serene forest setting.
Bass Lagoon: Electronic beats by DJs like Lane 8 and Kaytranada, with stunning light shows reflected on the water.
Folk Fireside: Intimate performances around a communal bonfire, featuring traditional folk and blues artists.

<h3 className="mt-10 mb-5">Activities</h3>
Harmony Haven offers more than just music:

Art Installations: Explore large-scale, interactive artworks scattered throughout the festival grounds.
Workshops: Join yoga sessions at sunrise, learn sustainable living practices, or participate in songwriting circles.
Nature Trails: Guided hikes to waterfalls and hidden beaches, perfect for recharging between sets.
Local Cuisine: Savor farm-to-table dishes, seafood delicacies, and vegan delights from over 30 food trucks.

<h3 className="mt-10  mb-5">Sustainability Focus</h3>

The festival is dedicated to preserving Emerald Bay's natural beauty. Efforts include:

Zero-waste policies with compostable materials.
A carbon-offset program to counter festival-related emissions.
Partnerships with local environmental organizations for beach cleanups and tree planting.

<h3 className="mt-10 mb-5">Tickets</h3>
General Admission: $250 – Access to all performances and activities.
VIP Pass: $500 – Exclusive viewing areas, backstage tours, and complimentary drinks.
Eco-Camper Package: $350 – Includes camping gear rental and access to eco-friendly showers.


<h3 className="mt-10 mb-5">Why Attend?</h3>

Harmony Haven Festival is more than just a music event—it's a transformative experience where music, community, and nature come together. Whether you're dancing by the lagoon, singing by the fire, or stargazing with new friends, this festival promises memories that will last a lifetime.

Website: harmonyhavenfest.com
Social Media: Follow us @HarmonyHavenFest for updates!


            </p>
            
        </div>
    </>;


}