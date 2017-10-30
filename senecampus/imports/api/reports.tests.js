import { Meteor } from 'meteor/meteor';

import { assert } from 'meteor/practicalmeteor:chai';

import Reports from './reports.js';

if(Meteor.isServer){
	describe('reports', function () {
	  describe('reports.postReport', function () {

	    it('it should post a report to database', function(){
	    	var datep = Date.now();
	    	Meteor.call("reports.postReport", {
		        title:'Use the stairs',
		        type:'dangerous',
		        posterName:'Samuel',
		        postDate:datep,
		        building:'ML',
		        description:'The elevator # 3 is broken use the stairs to go up or down from the first floor.'
			});

	    	let newReport = Reports.findOne({posterName:'Samuel'});

			assert.equals({
		        title:'Use the stairs',
		        type:'dangerous',
		        posterName:'Samuel',
		        postDate:datep,
		        building:'ML',
		        description:'The elevator # 3 is broken use the stairs to go up or down from the first floor.'
			}, newReport);
	    });
	  });
	});	
}
