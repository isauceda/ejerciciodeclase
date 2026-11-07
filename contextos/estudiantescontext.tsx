
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Estudiante {
  id: string;
  name: string;
}

interface EstudiantesContextType {
  estudiantes: Estudiante[];
  agregarEstudiante: (nombre: string) => void;
}

const estudiantesIniciales: Estudiante[] = [
  { id: '1', name: 'Juan' },
  { id: '2', name: 'María' },
  { id: '3', name: 'Carlos' },
  { id: '4', name: 'Ana' },
  { id: '5', name: 'Pedro' },
  { id: '6', name: 'Lucía' },
  { id: '7', name: 'José' },
  { id: '8', name: 'Sofía' },
  { id: '9', name: 'Daniel' },
  { id: '10', name: 'Valeria' },
];

const EstudiantesContext = createContext<EstudiantesContextType | undefined>(undefined);

export const EstudiantesProvider = ({ children }: { children: ReactNode }) => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesIniciales);

  const agregarEstudiante = (nombre: string) => {
    setEstudiantes((actuales) => {
      const nuevoEstudiante: Estudiante = {
        id: (actuales.length + 1).toString(),
        name: nombre,
      };

      return [...actuales, nuevoEstudiante];
    });
  };

  return (
    <EstudiantesContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </EstudiantesContext.Provider>
  );
};

export const useEstudiantes = () => {
  const context = useContext(EstudiantesContext);

  if (!context) {
    throw new Error('useEstudiantes debe utilizarse dentro de EstudiantesProvider');
  }

  return context;
};
