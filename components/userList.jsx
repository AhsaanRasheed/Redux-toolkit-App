import React, { useEffect, useState } from 'react';
import {
    Text,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './reduxStore/actions';

function UserList() {

    const dispatch = useDispatch();
    const userList = useSelector((state)=>state.reducer);

    useEffect(()=>{
        dispatch(getUserList())
    },[])
    return (
        <View style={{flex:1}}>
            {
                userList.length?
                userList.map((item)=>(<Text>{item.age}</Text>)) 
                : <Text>{userList.length}</Text>
            }
        </View>
    );
}

export default UserList;
