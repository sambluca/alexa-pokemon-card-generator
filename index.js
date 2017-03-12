'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('pokan');
var pokanGenerator = require('./pokan-battle');


app.intent('pokan', {
    'slots': {
      'pokanSlot': 'CHOICE'
    },
    'utterances': ['{pokan|battle}']
  },
  function (req, res) {
    //get the slot
    var pokanChoice = req.slot('pokanSlot');
    var reprompt = '.';
    if (_.isEmpty(pokanChoice)) {
      var prompt = 'I didn\'t hear you tell me to battle.';
      var card = pokanGenerator();
      res.say(`Pokemon Card for ${card.name} : health: ${card.health} : attack move: ${card.ability.moveName} with damage of: ${card.ability.damage}`).reprompt(reprompt).shouldEndSession(true);
      return true;
    } else if (!_.isEmpty(pokanChoice)) {
      var prompt = 'I heard you';
      var card = pokanGenerator();
      res.say(`Pokemon Card for ${card.name} : health: ${card.health} : attack move: ${card.ability.moveName} with damage of: ${card.ability.damage}`).reprompt(reprompt).shouldEndSession(true);
      return true;
    } 
  }
);

//hack to support custom utterances in utterance expansion string
var utterancesMethod = app.utterances;
app.utterances = function () {
return utterancesMethod().replace(/\{\-\|/g, '{');
};
module.exports = app;