import React from 'react';
import {
  connect,
} from 'react-redux';

import Actions from '../state/Actions';
import ActivityDetails from '../components/ActivityDetails';

@connect((data, props) => ActivityDetailsScreen.getDataProps(data, props))
export default class ActivityDetailsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  static getDataProps(data, props) {
    let itemId = props.route.params.itemId;
    console.log(`Item Id: ${itemId}`);
    let item = data.activities.all.find(item => item.id === itemId);
    console.log(`Item: ${item}`);

    return {
      item,
    };
  }

  render() {
    return (
      <ActivityDetails
        item={this.props.item}
        isVisited={this.props.isVisited}
        onToggleVisited={this._onToggleVisited}
      />

    );
  }
}
