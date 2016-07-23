/**
 * Created by Hey on 2016/7/15.
 */
import React from "react";
import {Text, View} from "react-native";
const RadioButton = require('martian-ui').MtRadioButton;
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');


/*exports.title  = 'MtRadioButton';
exports.description = 'multiple options, only one option can be selected at a given time';
exports.examples = [
  {
    title: 'Default RadioButton',
    render: function () {

      return (
        <View style={{ paddingTop: 20}}>
        <RadioButton
          options = {['option8', 'option2','option3']}
          onSelection = {setSelection}
        >
        </RadioButton>
          <Text style={{marginTop:20}}>
            {`your choice is: ${selected.name}`}
          </Text>
        </View>
      );
    }
  },

];*/

const RadioButtonExample = React.createClass({
  statics: {
    title: 'MtRadioButton',
    description: 'multiple options, only one option can be selected at a given time',
  },

  getInitialState: function() {
    return {
      selected1: null,
      selected2: null,
    };
  },

  render() {
    return (
      <UIExplorerPage title="MtRadioButton">
        <UIExplorerBlock title="Default RadioButton">
          <View style={{ paddingTop: 20}}>
            <RadioButton
              options = {['option1', 'option2','option3']}
              selectedOption={ this.state.selected1 }
              onSelect = {this.setSelectedValue.bind(this, 'selected1')}
            >
            </RadioButton>
            <Text style={{marginTop:20}}>
              {`your choice is: ${this.state.selected1}`}
            </Text>
          </View>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  },

  setSelectedValue(key,value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }
});

module.exports = RadioButtonExample;