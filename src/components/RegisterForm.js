import React from "react";
import { TextInput, Button, Text, View } from "react-native";


export default function RegisterForm() {


return ( 

    <View>
        <TextInput placeholder="Nombre" />
        <TextInput placeholder="Apellido" />
       
        <TextInput placeholder="Email" />
        <TextInput placeholder="Contraseña" />
        <Button title="Ingresar" onPress={() => console.log("Enviado")} />
    </View>
);

}