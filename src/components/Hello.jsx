import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
{/* const children = props.childrenとして分割代入以外の書き方もある*/}
  const { children, bang, style } = props;;
return (
<View>
{/* 以下のstyles.textの部分はpropsという */}
    <Text style={[styles.text, style]}>
      {`Hello ${children}${bang ? '!' : ''}`}
    </Text>
</View>
);
}

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  }
});

export default Hello;















































