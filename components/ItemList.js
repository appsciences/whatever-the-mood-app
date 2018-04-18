import React from 'react';
import {
    Animated,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from '@expo/ex-navigation';

import ActivityListItem from './ActivityListItem';
import ChallengeListItem from './ChallengeListItem';
import CommunityListItem from './CommunityListItem';

function fromIds(all, ids) {
  return ids.map(id => all.find(a => a.id === id));
}

@withNavigation
@connect((data, props) => ItemList.getDataProps(data, props))
export default class ItemList extends React.Component {
  static getDataProps(data, props) {

    let { activities, challenges, community } = data;
    let { all: allActivities, nearby: nearbyActivities, visited: visitedActivities } = activities;
    let { all: allChallenges, nearby: nearbyChallenges, visited: visitedChallenges } = challenges;

    // console.log('stuffs');
    // console.log('data : ' + data);
    // console.log('data activities: ' + activities);
    // console.log('data activities All Activities: ' + allActivities);
    // console.log('data activities Visited Activities: ' + visitedActivities);
    // console.log('data activities Neerby Activities: ' + nearbyActivities);
    // console.log('----');
    //
    // console.log(visitedChallenges);
    // console.log(nearbyActivities);
    // console.log(nearbyChallenges);
    // console.log('/stuffs');
    console.log('Community: ' + community);


    if (props.nearby) {
      activities = fromIds(allActivities, nearbyActivities);
      challenges = allChallenges;

    } else if (props.visited) {
      activities = fromIds(allActivities, visitedActivities);
      challenges = fromIds(allChallenges, visitedChallenges);
    } else if (props.notVisited) {
      let allActivityIds = allActivities.map(a => a.id);
      let notVisitedActivities = allActivityIds.filter(id => !visitedActivities.includes(id));
      activities = fromIds(allActivities, notVisitedActivities);

      let allChallengeIds = allChallenges.map(b => b.id);
      let notVisitedChallenges = allChallengeIds.filter(id => !visitedChallenges.includes(id));
      challenges = fromIds(allChallenges, notVisitedChallenges);
    } else {
      activities = allActivities;
      challenges = allChallenges;
      community = community.all;
    }

    return {
      activities,
      challenges,
      community
    }
  }

  componentDidMount() {
    this.props.setRef && this.props.setRef(this);
  }

  componentDidUpdate() {
    this.props.setRef && this.props.setRef(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.breweries !== this.props.breweries;
  }

  scrollTo(opts) {
    this._scrollView._component.scrollTo(opts);
  }

  render() {
    return (
        <View onLayout={this.props.onLayout} style={styles.container}>
          <Animated.ScrollView
              ref={view => { this._scrollView = view; }}
              contentContainerStyle={this.props.contentContainerStyle}
              style={styles.container}
              onScroll={this.props.onScroll}
              onResponderRelease={this.props.onMomentumScrollEnd}
              onResponderTerminate={this.props.onMomentumScrollEnd}
              onMomentumScrollBegin={this.props.onMomentumScrollBegin}
              onMomentumScrollEnd={this.props.onMomentumScrollEnd}
              onScrollBeginDrag={this.props.onScrollBeginDrag}
              onScrollEndDrag={this.props.onScrollEndDrag}
              onContentSizeChange={this.props.onContentSizeChange}
              scrollEventThrottle={16}>
            {


              {
                'activity' :
                    this.props.activities.map((item, i) =>
                        <ActivityListItem
                            onPress={() => this._handlePressActivity(item) }
                            item={item}
                            key={item.name}
                            index={i}
                        />),

                'challenge' :
                    this.props.challenges.map((item, i) =>
                        <ChallengeListItem
                            onPress={() => this._handlePressChallenge(item) }
                            item={item}
                            key={item.name}
                            index={i}
                        />),
                'community' :
                    this.props.community.map((item, i) => <CommunityListItem
                        onPress={() => {}  }
                        item={item}
                        key={item.name}
                        index={i}
                    />)
              }[this.props.type]

            }

            <StatusBar barStyle="default" />
          </Animated.ScrollView>
        </View>
    );
  }

  _handlePressActivity = (item) => {
    this.props.navigator.push('activityDetails', {itemId: item.id});
  }

  _handlePressChallenge = (item) => {
    this.props.navigator.push('challengeDetails', {itemId: item.id});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
});
