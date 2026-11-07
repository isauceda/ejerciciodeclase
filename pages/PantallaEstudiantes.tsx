
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useEstudiantes } from '../contextos/estudiantescontext';
import FormularioEstudiante from '../componentes/FormularioEstudiante';

export default function PantallaEstudiantes() {
  const { estudiantes } = useEstudiantes();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Lista de estudiantes
      </Text>

      <FormularioEstudiante />

      <Text style={styles.subtitulo}>
        Total de estudiantes: {estudiantes.length}
      </Text>

      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.nombre}>
              {item.id}. {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 17,
    color: '#222',
  },
});
