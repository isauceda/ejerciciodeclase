
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useEstudiantes } from '../contextos/estudiantescontext';

export default function FormularioEstudiante() {
  const [nombre, setNombre] = useState('');
  const { agregarEstudiante } = useEstudiantes();

  const guardarEstudiante = () => {
    if (nombre.trim() === '') {
      return;
    }

    agregarEstudiante(nombre.trim());
    setNombre('');
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del estudiante"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button
        title="Agregar estudiante"
        onPress={guardarEstudiante}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});
