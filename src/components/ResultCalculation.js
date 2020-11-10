import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultCalculation(props) {
    const{cantidad1, cantidad2, operaciones, total, ErrorMessage}=props;
    console.log(props);
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxContent}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult title={"Cantidad 1:"} value={`$ ${cantidad1}`}/>
                    <DataResult title={"Cantida 2:"} value={`${cantidad2}%`}/>
                    <DataResult title={"Operacion seleccionada:"} value={`${operaciones} `}/>
                    <DataResult title={"Resultado total:"} value={`$ ${total.res}`}/>
                    </View>
            )
            }
            <View>
    <Text style={styles.error}>{ErrorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {title, value}=props
    return(
        <View >
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    content:{
        marginTop: 10,
        marginHorizontal: 40,
    },
    boxContent:{
        padding: 30,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },

    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
})