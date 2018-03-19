import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless' };
    this.clicked=this.clicked.bind(this);
  }
  clicked() {
    alert(this.state.text);
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.clicked}
          title="Learn More"
          color="#841584" />
        <TextInput
          style={styles.button}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: { height: 40, width:60, borderColor: 'red', borderWidth: 1 }
});
