import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Buttons = new Mongo.Collection("buttons");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('buttons', ()=>{
    return Buttons.find();
  });
}

Meteor.methods({
	
});