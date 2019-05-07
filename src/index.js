import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'

export default class Card extends React.PureComponent {
  render() {
    const { borderColor, backgroundColor, style, ...props } = this.props
    return (
      <View
        style={[
          styles.container,
          style,
          {
            borderColor,
            backgroundColor,
          }
        ]}
        {...props}
      />
    )
  }
}

Card.propTypes = {
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Card.defaultProps = {
  borderColor: '#a1a1a1',
  backgroundColor: '#fff',
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})
