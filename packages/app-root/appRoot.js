import React from 'react';
import PropTypes from 'prop-types';
import View from '@life-dashboard/ui-lib';

const AppRoot = () => (
  <View>
    Hello World
  </View>
);

InfoPanel.propTypes = {
  title: PropTypes.string.required
};

export default AppRoot;