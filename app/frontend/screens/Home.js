import React from 'react';
import { Flex, Text } from 'native-base';

// Components
import Card from '../components/Card/Card';

const HomeScreen = () => {
  return (
    <Flex>
      <Card title="Card Title 1">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Card>
      <Card title="Card Title 2">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Card>
    </Flex>
  );
};

export default HomeScreen;