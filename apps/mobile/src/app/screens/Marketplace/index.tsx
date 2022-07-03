import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Header from '../../components/CommunHeader';
import styles from '../../styles/MarketPlaceStyles';
import UserCartSection from './components/UserCartSection';
import SearchBar from './components/SearchBar';
import SalesCard from './components/SalesCard';
import Category from './components/Category';
import MarketPlaceStyles from '../../styles/MarketPlaceStyles';
import ProductCard from './components/ProductCard';
import { colors } from '../../variables/colors';

type Props = {};

const MarketPlace = (props: Props) => {
  return (
    <ScrollView contentContainerStyle={[styles.Container]} scrollEnabled>
      <StatusBar  translucent={false}  backgroundColor={colors.backgroundColor} barStyle="dark-content" />
      <Header />
      <View style={styles.MarketPlacePlace}>
        <UserCartSection />
        <SearchBar />
        <SalesCard />
        <View style={MarketPlaceStyles.categoriesWrapper}>
          <Text style={MarketPlaceStyles.categoriesText}>Categories</Text>
          <View>
            <Category />
          </View>
        </View>
        <View style={MarketPlaceStyles.container}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </View>
      </View>
    </ScrollView>
  );
};

export default MarketPlace;
