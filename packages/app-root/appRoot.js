import React from 'react';
import PropTypes from 'prop-types';

const AppRoot = ({UI}) => (
  <UI.View style={styles.container}>
    <UI.Text>Hello world</UI.Text>
  </UI.View>
);

InfoPanel.propTypes = {
  title: PropTypes.string.required
};

export default AppRoot;