/* eslint-disable react/prop-types */
import airline from 'airline-iata-code'
import airports from 'airport-codes'
import moment from 'moment'

function convertDuration(duration) {
    const durationInMinutes = moment.duration(duration);
    const formattedDuration = moment.utc(durationInMinutes.asMilliseconds()).format("HH[h] mm[m]");
    return formattedDuration;
}

function Card({ data }) {
    // Example usage


    const { arrival, departure, carrierCode, number, aircraft, duration, numberOfStops } = data.itineraries[0].segments[0]
    const airlines = airline(carrierCode)[0];//get air line details
    const { attributes: arrivalAirport } = airports.findWhere({ iata: arrival.iataCode });
    const { attributes: departureAirport } = airports.findWhere({ iata: departure.iataCode });
    const travelClass = data.travelerPricings[0].fareDetailsBySegment[0].cabin


    const convertedDuration = convertDuration(duration)
    const travelersCount = data.travelerPricings.length
    const price = data.price.grandTotal
    console.log(travelClass);
    return (

        <div className="group relative overflow-hidden bg-white shadow hover:shadow-md  hover:-mt-2 rounded-md transition-all duration-500 h-fit">
            <div className="px-4 ">
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white  rounded-md">
                        <img
                            src={airlines.logo}
                            className="h-14 w-14"
                            alt=""
                        />
                    </div>
                    <div className="ltr:ml-3 rtl:mr-3 cursor-pointer" >
                        <a
                            className="inline-block text-lg font-semibold hover:text-blue-600 transition-all duration-500 ltr:mr-1 rtl:ml-1"
                        >
                            {airlines.Airline}
                        </a>

                    </div>



                    <span className='absolute right-80'>Adults:{travelersCount}</span>


                    <span className='absolute right-7'>Total Price: {price}</span>
                </div>


                <div className="text-slate-400    grid grid-flow-col text-center">
                    <div className="h-full w-full ">
                        <p className="text-slate-600  font-semibold">From</p>
                        <p>{departureAirport.city}, {departureAirport.country}</p>
                        <p>{departureAirport.iata} - {departureAirport.name} </p>


                    </div>
                    <div className="h-full w-full ">
                        <div className="h-14 w-14 m-auto">
                            <img className="" src="https://www.pngitem.com/pimgs/m/107-1072568_plane-right-international-icon-for-airport-hd-png.png" alt="" />
                        </div>
                        <p>{numberOfStops} Stop</p>
                        <p>{convertedDuration}</p>
                    </div>
                    <div className="h-full w-full  ">
                        <p className="text-slate-600  font-semibold">TO</p>
                        <p>{arrivalAirport.city}, {arrivalAirport.country}</p>
                        <p>{arrivalAirport.iata} - {arrivalAirport.name}</p>
                    </div>

                </div>


                {/* <div>

                    <span className="bg-slate-100 inline-block text-slate-900 text-xs px-2.5 py-0.5 font-semibold rounded-full ltr:mr-1 rtl:ml-1">
                        gfdgsfd
                    </span>



                </div> */}
            </div>
            <div className="px-6 py-2 bg-slate-50  flex justify-between items-center">
                <div className='space-x-2 grid grid-flow-col'>


                    <span > <img src="https://cdn-icons-png.flaticon.com/512/951/951334.png" width={20} alt="" /></span>
                    <span className="inline-block ltr:mr-1 rtl:ml-1 font-semibold">
                        {travelClass}
                    </span>
                    <span className="inline-block ltr:mr-1 rtl:ml-1 text-slate-400">
                        <i className="uil uil-map-marker text-[18px] text-slate-900  ltr:mr-1 rtl:ml-1" />
                        {aircraft.code}-{number}
                    </span>
                    {/* <span>{travelClass}</span> */}
                </div>

                <div

                    className="cursor-pointer btn btn-sm text-sm px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                >
                   <a href="http://localhost:3000/confirmation" >Book Now</a>
                </div>


            </div>
            <a
                href="job-list-four.html"
                className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white absolute top-0 right-0 m-3"
            >
                <i data-feather="bookmark" className="h-4 w-4" />
            </a>
        </div >
    )
}

export default Card