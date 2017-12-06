import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
// to call an action creator
import { CardSection } from './common';
import * as actions from '../actions';
// .. is up 1 directory
// * as actions is to import all different actions to use it on all different components
// import all from actions file and assign it to variable => actions

class ListItem extends Component {
  // responsible for showing single library

  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  // helper method, why not const ....?
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
    // flex to wrap text up
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    // console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  // ownProps is props passed to component we're wrapping -> ListItem
  // ownProps = this.props to ListItem
  // move all logic from component to here
  const expanded = state.selectedLibraryId === ownProps.library.id;
  // same true, else false

  return { expanded };
  // ES6: { expanded: expanded } can be condensed to { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);
  // connect helper always modify first () data to be shown as props in second ()
  // first argument => MapstateToProps
  // second argument is to bind Action Creators to this component
  // not wanting MapstateToProps => null
  // take all the action creator in actions, mutate the dumb function so that the return will automatically dispatched to redux store
  // pass this actions to ListItems as props
