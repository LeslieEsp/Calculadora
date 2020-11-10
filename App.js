import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, YellowBox, Button} from 'react-native';
import Forms from "./src/components/Forms"; 
import Footer from "./src/components/Footer";
import ResultCalculation from "./src/components/ResultCalculation";
import color from "./src/utils/colors";


YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App() {
  const [cantidad1, setCantidad1]= useState(null);
  const [cantidad2, setCantidad2] = useState(null);
  const [operaciones, setOperaciones] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(cantidad1 && cantidad2 && operaciones)calculate();
    else reset();

  }, [cantidad1, cantidad2, operaciones])

  const calculate=() =>{
    reset();
    if(!cantidad1){
      setError("Añade la primer cantidad.");
    }else if(!cantidad2){
      setError("Añade la segunda cantidad.");
    }else if(!operaciones){
      setError("Selecciona la operacion que quieras realizar.");
    }else{
      
      if (operaciones == "suma"){
         const i = (cantidad1 + cantidad2);
         
         setTotal({
            res: i,
          })
      }else if(operaciones == "resta"){
       const  i = (cantidad1 - cantidad2);
      
       setTotal({
          res: i,
        })
      }else if(operaciones == "multiplicacion"){
       const i = (cantidad1 * cantidad2);
       setTotal({
            res: i,
        })
      }else if(operacion == "division"){
       const i = (cantidad1 / cantidad2);

       setTotal({
            res: i,
         })
      }
    }

  }
 
  const reset = () =>{
    setErrorMessage ("");
    setTotal (null);
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
        <SafeAreaView style={[styles.safeArea, styles.content]}>
          <View style={styles.background}/>
          <Text style={styles.titleApp}>Calculadora</Text>
          <Forms 
            setCantidad1={setCantidad1}
            setCantidad2={setCantidad2}
            setOperaciones={setOperaciones}
          />
          <Result
            cantidad1={cantidad1}
            cantidad2={cantidad2}
            operaciones={operaciones}
            total={total} 
            errorMessage={errorMessage}
          />
        </SafeAreaView>
        
        <Footer calculate={calculate}/>
      </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: 'center',
  },

  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }


})