import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Reports = new Mongo.Collection("reports");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('reports', ()=>{
    return Reports.find({}, {sort: {postDate : -1}});
  });
}

Meteor.methods({
	'reports.postReport'({
        title,
        type,
        posterName,
        postDate,
        building,
        description
	}){
		Reports.insert({
			title:title,
			type:type,
			posterName:posterName,
			postDate:postDate,
			building:building,
			description:description
		});
	}
});