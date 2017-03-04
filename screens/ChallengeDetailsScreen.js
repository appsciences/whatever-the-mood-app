import React from 'react';
import {
    connect,
} from 'react-redux';

import Actions from '../state/Actions';
import ChallengeDetails from '../components/ChallengeDetails';

@connect((data, props) => ChallengeDetailsScreen.getDataProps(data, props))
export default class ChallengeDetailsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  static getDataProps(data, props) {
    let itemId = props.route.params.itemId;
    console.log(`Item Id: ${itemId}`);
    let item = data.challenges.all.find(item => item.id === itemId);
    console.log(`Item: ${item}`);

    return {
      item,
    };
  }

  render() {
    return (
        <ChallengeDetails
            item={this.props.item}
            isVisited={this.props.isVisited}
            onToggleVisited={this._onToggleVisited}
        />

    );
  }
}
