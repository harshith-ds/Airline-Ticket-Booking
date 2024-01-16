import { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookings.css';
import NavBar from './NavBar';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/getbookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching recent bookings:', error.message);
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
        <NavBar />
        <div className="recent-bookings">
            <h2 style={{fontFamily: "serif", fontSize: '30px'}}>Recent Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Flight Details</th>
                            <th>Passenger Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((user, index) => (
                            <tr key={user._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td>
                                    <div>
                                        <p><strong>Flight Name:</strong> Emirates</p>
                                        <p><strong>Departure Time:</strong>18:00</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p><strong>First Name:</strong> {user.firstName}</p>
                                        <p><strong>Last Name:</strong> {user.lastName}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                                        <p><strong>Address:</strong> {user.address}</p>
                                        <p><strong>Gender:</strong> {user.gender}</p>
                                        <p><strong>State:</strong> {user.state}</p>
                                        <p><strong>Zip Code:</strong> {user.zipCode}</p>
                                        <p><strong>Country:</strong> {user.country}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    );
};

export default Bookings;
