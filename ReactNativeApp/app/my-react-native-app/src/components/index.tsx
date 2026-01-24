// src/components/index.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';

export const ButtonComponent = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

export const TextComponent = ({ text }) => (
  <View>
    <Text>{text}</Text>
  </View>
);

// Add more reusable components as needed