import React from 'react';
import { EstudiantesProvider } from './contextos/estudiantescontext';
import PantallaEstudiantes from './pages/PantallaEstudiantes';

export default function App() {
  return (
    <EstudiantesProvider>
      <PantallaEstudiantes />
    </EstudiantesProvider>
  );
}