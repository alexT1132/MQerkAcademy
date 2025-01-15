import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { EeauProvider } from "./context/EeauContext";
import { CounterProvider } from "./context/CounterContext";
import { ResultProvider } from "./context/ResultContext";

import IndexPage from "./pages/Index";
import Login from "./pages/Login";
import RegistroEstudiante from "./pages/RegisterEst";

import ColabInfoPers from "./pages/Colab/Documents/01-InfoPers";        //Pagina de bienvenida e ingreso de informacion
import ColabInfoAcad from "./pages/Colab/Documents/02-InfoAcad";


import Colab from "./pages/Colab/Inicio";
import WelcomeColab from "./pages/Colab/Welcome";
import Prueba from "./pages/Colab/Prueba";
import ResultadosColab from "./pages/Colab/Resultados";
import RegisterColab from "./pages/Colab/Register";

import Cursos from "./pages/Est/Cursos";

import FormEeau from "./pages/Est/Form_EEAU";

import DashboardEst from "./pages/Est/Dashboard";

import EEAU from "./pages/EEAU/Eeau";
import Actividadeseeau from "./pages/EEAU/Actividades";
import Calendarioeeau from "./pages/EEAU/Calendario";
import Pagoseeau from "./pages/EEAU/Pagos";

import Profile from "./pages/EEAU/Profile";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
        <EeauProvider>
          <ResultProvider>
            <CounterProvider>
                <AuthProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<IndexPage />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/registro_Est" element={<RegistroEstudiante />} />
                      
                      <Route path="/colab-info-pers" element={<ColabInfoPers />} />
                      <Route path="/colab-info-acad" element={<ColabInfoAcad />} />

                      <Route path="/colab" element={<Colab />} />
                      <Route path="/welcome-colab" element={<WelcomeColab />} />
                      <Route path="/pruebas" element={<Prueba />} />
                      <Route path="/Resultados-colab" element={<ResultadosColab />} />
                      <Route path="/Register-colab" element={<RegisterColab />} />

                      <Route element={<ProtectedRoute />}>

                        <Route path="/dashboard" element={<Dashboard />} />   

                        <Route path="/cursos" element={<Cursos />} />   

                        <Route path="/formulario-eeau" element={<FormEeau />} />   

                        <Route path="/dashboard_est" element={<DashboardEst />} />  

                        <Route path="/entrenamiento_examen_admision_universidad" element={<EEAU />} /> 
                        <Route path="/entrenamiento_examen_admision_universidad/actividades" element={<Actividadeseeau />} /> 
                        <Route path="/entrenamiento_examen_admision_universidad/calendario" element={<Calendarioeeau />} /> 
                        <Route path="/entrenamiento_examen_admision_universidad/pagos" element={<Pagoseeau />} /> 

                        <Route path="/mi_perfil" element={<Profile />} />

                      </Route>
                    </Routes>
                  </BrowserRouter>
                </AuthProvider>
            </CounterProvider>
          </ResultProvider>
        </EeauProvider>
  )
}

export default App