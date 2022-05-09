import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import SectionCard from './SectionCard';
import { IProps as CardProps } from './SectionCard';

interface IProps extends CardProps {
  header?: {
    title: string;
    color: string;
    color2?: string;
    icon: JSX.Element;
  };
  data: Array<{
    id: string;
    category?: string;
    title: string;
    url: string;
  }>;
}

const Section: React.FC<IProps> = ({
  header,
  data,
  titleColor,
  backgroundColor,
}) => {
  return (
    <View style={styles.sectionContainer}>
      {header && (
        <View style={styles.header}>
          {header.icon}
          <LinearTextGradient
            style={[styles.sectionTitle, { color: header.color }]}
            colors={[header.color, header.color2 || header.color]}
          >
            <Text>{header.title}</Text>
          </LinearTextGradient>
        </View>
      )}

      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <SectionCard
              category={item.category}
              title={item.title}
              titleColor={titleColor}
              imageURL={item.url}
              backgroundColor={backgroundColor}
              customStyle={{ marginHorizontal: 5 }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10,
  },

  flatList: {
    paddingVertical: 5,
  },
});

export default Section;
