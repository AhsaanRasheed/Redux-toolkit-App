import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './reduxStore/actions';

function Product({item}){

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.reducer)
  const [itemIsAdded, setItemIsAdded] = useState(false)

  useEffect(()=>{
    let result = cartItems.filter((element)=>{
      return element.name === item.name
    })
    if(result.length) setItemIsAdded(true)
    else setItemIsAdded(false)
  },[cartItems])

  const handleAddToCart = (item)=>{
     dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item.name))
 }



  return (  
  <View 
  style={{
    alignItems:'center', 
    borderBottomColor:'orange',
    borderBottomWidth: 2,
    marginBottom:40,
    padding: 10
  }}
  >
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Image style={{width:100, height: 100}} source={{uri: item.image}} />
    {
      itemIsAdded ?
      <Button title='Remove Item' onPress={()=>handleRemoveFromCart(item)} /> :
      <Button title='Add to cart' onPress={()=>handleAddToCart(item)} />
    }
  </View>
  );
}

export default Product;
