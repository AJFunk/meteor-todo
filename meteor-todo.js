// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Steven" },
      { text: "AJ" },
      { text: "Your mom" }
    ]
  });
}