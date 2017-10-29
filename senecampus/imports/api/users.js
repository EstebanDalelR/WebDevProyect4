import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
 
// Generate user initials after Facebook login
Accounts.onCreateUser((options, user) => {
  user.name=user.username;
  user.reports = 0;
  if (options.profile) {
    user.profile = options.profile;
  }
  return user;
});

Meteor.publish('user',
  function () {
    return Meteor.users.find(this.userId,
      {fields: {name: 1,email: 1,reports: 1}});
  }
);

Meteor.methods({
  'users.reports'({ userEmail }) {
    new SimpleSchema({
      userEmail: { type: String }
    }).validate({ userId });
    const user = Meteor.users.findOne(userEmail);
    const reports = user.reports +1
    Meteor.users.update(user.userId, {
      $set: { reports: resports }
    });
  }
});