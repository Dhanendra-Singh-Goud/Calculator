import { StyleSheet, Text, View,ScrollView,  Pressable, } from 'react-native'
import React from 'react'
import styles from './MainScreenStyleSheet';
import { useState, useRef } from 'react';

const MainScreen = () => {
  const [value,setValue] = useState('0')
  const [bracketOpen,setBracketOpen] = useState(false)
  const scrollViewRef = useRef()
  const handlePress=(val) => {
    console.log("Pressed",val)
    if(val == 'AC') {
      setValue('0')
  }
  else if(val == '='){
    try{
      if ((value.match(/\(/g)||[]).length==(value.match(/\)/g)||
      []).length){
        if(value.slice(-1)=="+" || value.slice(-1)=='-' || 
        value.slice(-1)=='*' || value.slice(-1)=='/' ||
         value.slice(-1)=='%'){
          setValue(`${eval(value.replace('()','(0).slice(0,-1)'))}`)
         }

      
      else{
        setValue(`${eval(value.replace('()','(0)'))}`);

      }
    }
      else{
        console.log('Invalid')
      }
    }
    catch(e){
      setValue('Format Error')
    }
  }
  else if(val == '()'){
    if(value =='0'){
      setValue('(')
      setBracketOpen(true)
    }
    else if(
      value.slice(-1)=="+" || value.slice(-1)=='-' || value.slice(-1)=='*' 
      || value.slice(-1)=='/' || value.slice(-1)=='%'
    ){
      setValue(value + '(')
      setBracketOpen(true)
    }else{
      if(bracketOpen == true){
      setValue(value+')')
      setBracketOpen(false)
      }
      else{
        setValue(value+'(')
        setBracketOpen(true)
      }
    }
     

  }
  // "<" that is for back button//
  else if(val == '<'){
    setValue(value.slice(0,-1))

  }
  else{

    if(value == '0'){
      if(val == '+' || val == '*' || val == '-' || val == '/' || val == '%' || val == '.'){
        setValue(value+val)
      }
      else{
      setValue(val)
      }
    }
    else if(isNaN(val)){
      if(value.slice(-1)=="+" || value.slice(-1)=='-' || 
      value.slice(-1)=='*' || value.slice(-1)=='/' ||
       value.slice(-1)=='%')
       {
        setValue(value.slice(0,-1)+val)
       }
      else{
        setValue(value+val)
      }
    }
    else{
      setValue(value + val)
    }
  }
}
  return (
    <View  style = {styles.Displaycontent}>
      <ScrollView style = {styles.Display_uppertxt}
      ref={scrollViewRef}
      onContentSizeChange={()=>scrollViewRef.current.scrollToEnd({
        animated: true
      })}>
      <Text style = {styles.uppertxt_Input}>{value}</Text>
      </ScrollView>
      <View style = {styles.outer_dialerpad}>
      <View style = {styles.dailerpad_row}>
        <Pressable  onPress={()=>handlePress("AC")}>
         <View style = {styles.btn1}>
            <Text style = {styles.txt1}>
              AC
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>handlePress("()") }>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              ( )
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("%")} >
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              %
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("/")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              /
            </Text>
          </View>
        </ Pressable >
       </View>

  

       <View style = {styles.dailerpad_row}>
        < Pressable onPress={()=>handlePress("9")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              9
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("8")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              8
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("7")} >
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              7
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("*")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              *
            </Text>
          </View>
        </ Pressable >
       </View>

       <View style = {styles.dailerpad_row}>
        < Pressable onPress={()=>handlePress("6")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              6
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("5")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              5
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("4")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              4
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("-")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              -
            </Text>
          </View>
        </ Pressable >
       </View>       
      
       
       <View style = {styles.dailerpad_row}>
        < Pressable onPress={()=>handlePress("3")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              3
            </Text>
          </View>
        </ Pressable>
        < Pressable onPress={()=>handlePress("2")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              2
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("1")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              1
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("+")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              +
            </Text>
          </View>
        </ Pressable >
       </View>

       <View style = {styles.dailerpad_row}>
        < Pressable onPress={()=>handlePress(".")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              .
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("0")}>
         <View style = {styles.btn3}>
            <Text style = {styles.txt1}>
              0
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("<")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
            {"<"}
            </Text>
          </View>
        </ Pressable >
        < Pressable onPress={()=>handlePress("=")}>
         <View style = {styles.btn2}>
            <Text style = {styles.txt1}>
              =
            </Text>
          </View>
        </ Pressable >
       </View>


      </View>
      </View>
    
  )
}

export default MainScreen;

