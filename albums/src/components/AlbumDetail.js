import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image } = props.album;
  const { thumbnailStyle, headerContentStyle, headerTextStyle,
          thumbnailContainerStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
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
