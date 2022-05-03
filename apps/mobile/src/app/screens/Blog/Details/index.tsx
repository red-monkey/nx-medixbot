import React from 'react';
import ScreenSkeleton from '../../../commun/ScreenSkeleton';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { style } from 'styled-system';

const BlogDetails = () => {
  return (
    <ScreenSkeleton>
      <View style={styles.container}>
        <Text style={[styles.mainTitle, styles.verticalSpace]}>
          Metabolic Health
        </Text>
        <Text style={[styles.paragraphTitle, styles.verticalSpace]}>
          What is metabolic health?
        </Text>
        <Image
          style={[styles.image, styles.verticalSpace]}
          source={{ uri: 'https://i.ibb.co/dpFyQMt/illustration.png' }}
        />
        <Text style={[styles.paragraph, styles.verticalSpace]}>
          What is the first thing that comes to your mind when you think about
          metabolism? One might relate it to weight gain or appearance. It's
          more than that. To put it simply, human metabolism equals all the
          chemical reactions that take part in transforming food into energy and
          building blocks for our bodies. The energy and building blocks are
          then used for three important actions:
        </Text>
        <FlatList
          data={[
            'Destroy old cells',
            'Maintain living cells',
            'Produce new cells',
          ]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <Text
                style={[styles.paragraph, styles.verticalSpace]}
              >{`\u2022 ${item}`}</Text>
            );
          }}
        />
        <Text style={[styles.paragraph, styles.verticalSpace]}>
          Metabolism isn’t something that you can jump start or magically reset.
        </Text>
        <Text style={[styles.paragraphTitle, styles.verticalSpace]}>
          What does it actually mean to have a healthy metabolism?{' '}
        </Text>
        <Text style={[styles.paragraph, styles.verticalSpace]}>
          In a healthy state, the human body is a very smart machine that has a
          lot of flexibility when it comes to metabolism. If you keep thinking
          about metabolism being an engine, healthy metabolism is very much
          about efficient fuel utilisation - and for us humans, that fuel is
          food.
        </Text>
      </View>
    </ScreenSkeleton>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  mainTitle: {
    color: '#414042',
    opacity: 0.5,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  paragraphTitle: {
    color: '#41416E',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
  paragraph: {
    color: '#41416E',
    fontFamily: 'Lora-Regular',
    lineHeight: 20,
  },

  image: {
    width: '100%',
    height: 200,
  },

  verticalSpace: {
    marginBottom: 10,
  },
});

export default BlogDetails;
