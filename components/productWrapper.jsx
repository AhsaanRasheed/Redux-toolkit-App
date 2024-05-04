
import React from 'react';
import {
  Text,
  View, Image,
  Button,
  ScrollView
} from 'react-native';
import Header from './header';
import Product from './product';

function ProductWrapper({navigation}){
  const product = [
    {
      name:'Samsung',
      color: 'Black',
      price: '12000',
      image: 'https://media.istockphoto.com/id/1199870378/vector/smartphone-blank-screen-phone-mockup-template-for-infographics-or-presentation-ui-design.jpg?s=612x612&w=0&k=20&c=BSqe2vQi7_oD-4YoSg_fr4zLOdPjx1x2uiar1nADoFI='
    },
    {
      name:'Apple',
      color: 'white',
      price: '12000',
      image: 'https://media.istockphoto.com/id/1199870378/vector/smartphone-blank-screen-phone-mockup-template-for-infographics-or-presentation-ui-design.jpg?s=612x612&w=0&k=20&c=BSqe2vQi7_oD-4YoSg_fr4zLOdPjx1x2uiar1nADoFI='
    },
    {
      name:'Nokia',
      color: 'Blue',
      price: '12000',
      image: 'https://media.istockphoto.com/id/1199870378/vector/smartphone-blank-screen-phone-mockup-template-for-infographics-or-presentation-ui-design.jpg?s=612x612&w=0&k=20&c=BSqe2vQi7_oD-4YoSg_fr4zLOdPjx1x2uiar1nADoFI='
    },
    {
      name:'Nokia',
      color: 'Blue',
      price: '12000',
      image: 'https://media.istockphoto.com/id/1199870378/vector/smartphone-blank-screen-phone-mockup-template-for-infographics-or-presentation-ui-design.jpg?s=612x612&w=0&k=20&c=BSqe2vQi7_oD-4YoSg_fr4zLOdPjx1x2uiar1nADoFI='
    },
  ]

  return (
    <View>
        <Button title='Go to user list' onPress={()=>navigation.navigate('User  ')}/>
      <Header />
      <ScrollView>
        {
          product.map((item)=> <Product item={item} /> )
        }
      </ScrollView>
    </View>
  );
}

export default ProductWrapper;
