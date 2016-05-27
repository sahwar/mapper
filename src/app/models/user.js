'use strict';

import mongoose from 'mongoose';

// create new schema
const schema = new mongoose.Schema({
  user: String
});
// virtual date attribute
schema.virtual('date').get(function() {
  return this._id.getTimestamp();
});
// assign schema to 'User'
mongoose.model('User', schema);
