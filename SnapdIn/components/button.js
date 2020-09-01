import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export const Button = ({text, onPress, disabled}) => {
  return (
    <>
      {!disabled ?
      (
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.disabledButton}
          onPress={onPress}
          disabled={disabled}
        >
          <Text style={styles.disabledButtonText}>
            {text}
          </Text>
        </TouchableOpacity>
      )
      }
      </>
)
}
const styles = StyleSheet.create({
   button: {
     backgroundColor: '#5582b9',
     width: '100%',
     borderColor: '#c9c9c9',
     borderWidth: 1,
     borderRadius: 4,
     marginVertical: 10,
     height: 40,
     justifyContent: 'center'
   },
   disabledButton: {
     backgroundColor: '#ddd',
     width: '100%',
     borderColor: '#ccc',
     borderWidth: 1,
     borderRadius: 4,
     marginVertical: 10,
     height: 40,
     justifyContent: 'center'
   },
   buttonText: {
     color: '#fff',
     textAlign: 'center',
     fontWeight: '700'
   },
   disabledButtonText: {
     color: '#aaa',
     textAlign: 'center',
     fontWeight: '700'
   }
});
