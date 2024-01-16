// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  status: String,
  adminId: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: String,
  gender: String,
  state: String,
  zipCode: String,
  country: String,
});

const Book = mongoose.model('Booking', bookingSchema);
export default Book;
