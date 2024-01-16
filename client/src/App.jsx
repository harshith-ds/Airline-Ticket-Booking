// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFoundPage from './Pages/NotFoundPage';
import UpdateProfile from './Pages/UpdateProfile';
import FlightOfferSearchPage from './Pages/FlightOfferSearchPage';
import PassengerDetailsForm from './Components/PassengerDetailsForm';
import Bookings from './Components/Bookings';
import ContactPage from './Components/contactPage';
import AboutUsPage from './Components/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
        <Route path='/offer-search' element={<FlightOfferSearchPage />} />
       <Route path='/confirmation' element={<PassengerDetailsForm />} />
      <Route path='/recent' element={<Bookings />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutUsPage />} />
        {/* <Route path='/user/*' element={<UserRoutes />} /> */}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;