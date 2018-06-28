import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: props.album.thumbnail_image }}
        />
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </CardSection>
   </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null,
    },
});

export default AlbumDetail;
