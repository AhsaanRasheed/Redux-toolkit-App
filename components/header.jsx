import React, { useEffect, useState } from 'react';
import {
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';

function Header(){
  const [cartItem, setCartItem] = useState(0);
  const cartData = useSelector((state)=>state.reducer)

  useEffect(()=>{
    setCartItem(cartData.length)
  },[cartData])


  return (
    <View>
      <Text 
      style={{
        fontSize:30,
        textAlign:'right',
        padding:10,
        backgroundColor:'orange',
      }}>
        <View style={{backgroundColor:'yellow', borderRadius:20, height:40, width:40, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:25}}>{cartItem}</Text>
        </View>
      </Text>
    </View>
  );
}

export default Header;
