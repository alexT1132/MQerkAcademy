import {useState, useEffect} from 'react'
import NavLogin from "../../components/NavLogin";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import { Checkbox, Grid2 } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import {RadioGroup, Radio} from '@mui/material/';

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import ImgPlan1 from '../../assets/Test/P1-155/Planteamiento.png';
import P1R1 from '../../assets/Test/P1-155/Resp/P1-R1.png';
import P1R2 from '../../assets/Test/P1-155/Resp/P1-R2.png';
import P1R3 from '../../assets/Test/P1-155/Resp/P1-R3.png';
import P1R4 from '../../assets/Test/P1-155/Resp/P1-R4.png'; //Respuesta correcta

import ImgPlan2 from '../../assets/Test/P1-156/Planteamiento.png';
import P2R1 from '../../assets/Test/P1-156/Resp/P1-R1.png';
import P2R2 from '../../assets/Test/P1-156/Resp/P1-R2.png';
import P2R3 from '../../assets/Test/P1-156/Resp/P1-R3.png';
import P2R4 from '../../assets/Test/P1-156/Resp/P1-R4.png'; //Respuesta correcta

import ImgPlan3 from '../../assets/Test/P1-157/Planteamiento.png';
import P3R1 from '../../assets/Test/P1-157/Resp/P1-R1.png';
import P3R2 from '../../assets/Test/P1-157/Resp/P1-R2.png';
import P3R3 from '../../assets/Test/P1-157/Resp/P1-R3.png'; //Respuesta corecta
import P3R4 from '../../assets/Test/P1-157/Resp/P1-R4.png';

import ImgPlan4 from '../../assets/Test/P1-158/Planteamiento.png';
import P4R1 from '../../assets/Test/P1-158/Resp/P1-R1.png';
import P4R2 from '../../assets/Test/P1-158/Resp/P1-R2.png';
import P4R3 from '../../assets/Test/P1-158/Resp/P1-R3.png'; //Respuesta correcta
import P4R4 from '../../assets/Test/P1-158/Resp/P1-R4.png';

import ImgPlan5 from '../../assets/Test/P1-165/Planteamiento.png';
import P5R1 from '../../assets/Test/P1-165/Resp/P1-R1.png';
import P5R2 from '../../assets/Test/P1-165/Resp/P1-R2.png';
import P5R3 from '../../assets/Test/P1-165/Resp/P1-R3.png'; //Respuesta correcta
import P5R4 from '../../assets/Test/P1-165/Resp/P1-R4.png';




function Prueba() {

    const location = useLocation();
    const previo = location.state;

    const navigate = useNavigate();

    // bigfive state

    const [Bigfive1, setBigfive1] = useState('');
    const [Bigfive2, setBigfive2] = useState('');
    const [Bigfive3, setBigfive3] = useState('');
    const [Bigfive4, setBigfive4] = useState('');
    const [Bigfive5, setBigfive5] = useState('');
    const [Bigfive6, setBigfive6] = useState('');
    const [Bigfive7, setBigfive7] = useState('');
    const [Bigfive8, setBigfive8] = useState('');
    const [Bigfive9, setBigfive9] = useState('');
    const [Bigfive10, setBigfive10] = useState('');
    const [Bigfive11, setBigfive11] = useState('');
    const [Bigfive12, setBigfive12] = useState('');
    const [Bigfive13, setBigfive13] = useState('');
    const [Bigfive14, setBigfive14] = useState('');
    const [Bigfive15, setBigfive15] = useState('');
    const [Bigfive16, setBigfive16] = useState('');
    const [Bigfive17, setBigfive17] = useState('');
    const [Bigfive18, setBigfive18] = useState('');
    const [Bigfive19, setBigfive19] = useState('');
    const [Bigfive20, setBigfive20] = useState('');
    const [Bigfive21, setBigfive21] = useState('');
    const [Bigfive22, setBigfive22] = useState('');

    const DataBigFive = {
        Bigfive1,
        Bigfive2,
        Bigfive3,
        Bigfive4,
        Bigfive5,
        Bigfive6,
        Bigfive7,
        Bigfive8,
        Bigfive9,
        Bigfive10,
        Bigfive11,
        Bigfive12,
        Bigfive13,
        Bigfive14,
        Bigfive15,
        Bigfive16,
        Bigfive17,
        Bigfive18,
        Bigfive19,
        Bigfive20,
        Bigfive21,
        Bigfive22
    }

        // bigfive state Final

        // DASS-21 state

        const [Dass1, setDass1] = useState('');
        const [Dass2, setDass2] = useState('');
        const [Dass3, setDass3] = useState('');
        const [Dass4, setDass4] = useState('');
        const [Dass5, setDass5] = useState('');
        const [Dass6, setDass6] = useState('');
        const [Dass7, setDass7] = useState('');
        const [Dass8, setDass8] = useState('');
        const [Dass9, setDass9] = useState('');
        const [Dass10, setDass10] = useState('');
        const [Dass11, setDass11] = useState('');
        const [Dass12, setDass12] = useState('');
        const [Dass13, setDass13] = useState('');
        const [Dass14, setDass14] = useState('');
        const [Dass15, setDass15] = useState('');
        const [Dass16, setDass16] = useState('');
        const [Dass17, setDass17] = useState('');
        const [Dass18, setDass18] = useState('');
        const [Dass19, setDass19] = useState('');
        const [Dass20, setDass20] = useState('');
        const [Dass21, setDass21] = useState('');

        const DataDass = {
            Dass1,
            Dass2,
            Dass3,
            Dass4,
            Dass5,
            Dass6,
            Dass7,
            Dass8,
            Dass9,
            Dass10,
            Dass11,
            Dass12,
            Dass13,
            Dass14,
            Dass15,
            Dass16,
            Dass17,
            Dass18,
            Dass19,
            Dass20,
            Dass21
        }

        // DASS-21 state Final

        // ZAVIC state

        const [Zavic1, setZavic1] = useState('');
        const [Zavic2, setZavic2] = useState('');
        const [Zavic3, setZavic3] = useState('');
        const [Zavic4, setZavic4] = useState('');
        const [Zavic5, setZavic5] = useState('');
        const [Zavic6, setZavic6] = useState('');
        const [Zavic7, setZavic7] = useState('');
        const [Zavic8, setZavic8] = useState('');
        const [Zavic9, setZavic9] = useState('');
        const [Zavic10, setZavic10] = useState('');
        const [Zavic11, setZavic11] = useState('');
        const [Zavic12, setZavic12] = useState('');
        const [Zavic13, setZavic13] = useState('');
        const [Zavic14, setZavic14] = useState('');
        const [Zavic15, setZavic15] = useState('');
        const [Zavic16, setZavic16] = useState('');
        const [Zavic17, setZavic17] = useState('');
        const [Zavic18, setZavic18] = useState('');
        const [Zavic19, setZavic19] = useState('');
        const [Zavic20, setZavic20] = useState('');
        const [Zavic21, setZavic21] = useState('');
        const [Zavic22, setZavic22] = useState('');
        const [Zavic23, setZavic23] = useState('');
        const [Zavic24, setZavic24] = useState('');
        const [Zavic25, setZavic25] = useState('');
        const [Zavic26, setZavic26] = useState('');
        const [Zavic27, setZavic27] = useState('');
        const [Zavic28, setZavic28] = useState('');
        const [Zavic29, setZavic29] = useState('');
        const [Zavic30, setZavic30] = useState('');
        const [Zavic31, setZavic31] = useState('');
        const [Zavic32, setZavic32] = useState('');
        const [Zavic33, setZavic33] = useState('');
        const [Zavic34, setZavic34] = useState('');
        const [Zavic35, setZavic35] = useState('');
        const [Zavic36, setZavic36] = useState('');
        const [Zavic37, setZavic37] = useState('');
        const [Zavic38, setZavic38] = useState('');
        const [Zavic39, setZavic39] = useState('');
        const [Zavic40, setZavic40] = useState('');
        const [Zavic41, setZavic41] = useState('');
        const [Zavic42, setZavic42] = useState('');
        const [Zavic43, setZavic43] = useState('');
        const [Zavic44, setZavic44] = useState('');
        const [Zavic45, setZavic45] = useState('');
        const [Zavic46, setZavic46] = useState('');
        const [Zavic47, setZavic47] = useState('');
        const [Zavic48, setZavic48] = useState('');
        const [Zavic49, setZavic49] = useState('');
        const [Zavic50, setZavic50] = useState('');
        const [Zavic51, setZavic51] = useState('');
        const [Zavic52, setZavic52] = useState('');
        const [Zavic53, setZavic53] = useState('');
        const [Zavic54, setZavic54] = useState('');
        const [Zavic55, setZavic55] = useState('');
        const [Zavic56, setZavic56] = useState('');
        const [Zavic57, setZavic57] = useState('');
        const [Zavic58, setZavic58] = useState('');
        const [Zavic59, setZavic59] = useState('');
        const [Zavic60, setZavic60] = useState('');

        const DataZavic = {
            Zavic2,
            Zavic4,
            Zavic6,
            Zavic8,
            Zavic10,
            Zavic12,
            Zavic14,
            Zavic16,
            Zavic18,
            Zavic20,
            Zavic22,
            Zavic24,
            Zavic26,
            Zavic28,
            Zavic30,
            Zavic32,
            Zavic34,
            Zavic36,
            Zavic38,
            Zavic40,
            Zavic42,
            Zavic44,
            Zavic46,
            Zavic48,
            Zavic50,
            Zavic52,
            Zavic54,
            Zavic56,
            Zavic58,
            Zavic60
        }

        // ZAVIC state Final

        // BAR-ON state

        const [Bornon1, setBarnon1] = useState('');
        const [Bornon2, setBarnon2] = useState('');
        const [Bornon3, setBarnon3] = useState('');
        const [Bornon4, setBarnon4] = useState('');
        const [Bornon5, setBarnon5] = useState('');
        const [Bornon6, setBarnon6] = useState('');
        const [Bornon7, setBarnon7] = useState('');
        const [Bornon8, setBarnon8] = useState('');
        const [Bornon9, setBarnon9] = useState('');
        const [Bornon10, setBarnon10] = useState('');
        const [Bornon11, setBarnon11] = useState('');
        const [Bornon12, setBarnon12] = useState('');
        const [Bornon13, setBarnon13] = useState('');
        const [Bornon14, setBarnon14] = useState('');
        const [Bornon15, setBarnon15] = useState('');
        const [Bornon16, setBarnon16] = useState('');
        const [Bornon17, setBarnon17] = useState('');
        const [Bornon18, setBarnon18] = useState('');
        const [Bornon19, setBarnon19] = useState('');
        const [Bornon20, setBarnon20] = useState('');
        const [Bornon21, setBarnon21] = useState('');
        const [Bornon22, setBarnon22] = useState('');
        const [Bornon23, setBarnon23] = useState('');
        const [Bornon24, setBarnon24] = useState('');
        const [Bornon25, setBarnon25] = useState('');

        const DataBaron = {
            Bornon1,
            Bornon2,
            Bornon3,
            Bornon4,
            Bornon5,
            Bornon6,
            Bornon7,
            Bornon8,
            Bornon9,
            Bornon10,
            Bornon11,
            Bornon12,
            Bornon13,
            Bornon14,
            Bornon15,
            Bornon16,
            Bornon17,
            Bornon18,
            Bornon19,
            Bornon20,
            Bornon21,
            Bornon22,
            Bornon23,
            Bornon24,
            Bornon25
        }

        // BAR-ON state Final

         // WAIS state

         const [isCorrect, setIsCorrect] = useState(false);
         const [isCorrect2, setIsCorrect2] = useState(false);
         const [isCorrect3, setIsCorrect3] = useState(false);
         const [isCorrect4, setIsCorrect4] = useState(false);

        const keywords = [
            'práctico',
            'práctica', 
            'construir', 
            'construyendo',
            'entretenido',
            'entretenida',
            'creatividad',
            'creativo',
            'creativa',
            'relevancia',
            'relevante',
            'interactiva',
            'llamativa',
            'interesante'
        ];

        const keywords2 = [
            'Breve',
            'breve',
            'claro', 
            'conciso', 
            'positivo',
            'constructivo',
            'motivador',
            'específico',
            'claridad',
            'profesionalismo'
        ];

        const keywords3 = [
            'capacidad de persuasión',
            'persuasión', 
            'persuasiva', 
            'entusiasmo',
            'entusiasta'
        ];

        const keywords4 = [
            'Empatia',
            'empatia',
            'empatica',
            'Motivación',
            'motivación',
            'motivacional'
        ];

        const handleInputChange = (e) => {
            const value = e.target.value.toLowerCase();
            setWais10(value);


        // Check if any keyword is present in the input
            const containsKeyword = keywords.some(keyword => value.includes(keyword));
            setIsCorrect(containsKeyword);
        };

        const handleInputChange2 = (e) => {
            const value = e.target.value.toLowerCase();
            setWais12(value);


        // Check if any keyword is present in the input
            const containsKeyword2 = keywords2.some(keyword => value.includes(keyword));
            setIsCorrect2(containsKeyword2);
        };

        const handleInputChange3 = (e) => {
            const value = e.target.value.toLowerCase();
            setWais13(value);


        // Check if any keyword is present in the input
            const containsKeyword3 = keywords3.some(keyword => value.includes(keyword));
            setIsCorrect3(containsKeyword3);
        };

        const handleInputChange4 = (e) => {
            const value = e.target.value.toLowerCase();
            setWais15(value);


        // Check if any keyword is present in the input
            const containsKeyword4 = keywords4.some(keyword => value.includes(keyword));
            setIsCorrect4(containsKeyword4);
        };

         const [Wais1, setWais1] = useState('');
         const [Wais2, setWais2] = useState('');
         const [Wais3, setWais3] = useState('');
         const [Wais4, setWais4] = useState('');
         const [Wais5, setWais5] = useState('');
         const [Wais6, setWais6] = useState('');
         const [Wais7, setWais7] = useState('');
         const [Wais8, setWais8] = useState('');
         const [Wais9, setWais9] = useState('');
         const [Wais10, setWais10] = useState('');
         const [Wais11, setWais11] = useState('');
         const [Wais12, setWais12] = useState('');
         const [Wais13, setWais13] = useState('');
         const [Wais14, setWais14] = useState('');
         const [Wais15, setWais15] = useState('');
         const [Wais16, setWais16] = useState('');
         const [Wais17, setWais17] = useState('');
         const [Wais18, setWais18] = useState('');
         const [Wais19, setWais19] = useState('');
         const [Wais20, setWais20] = useState('');
         const [Wais21, setWais21] = useState([]);
         const [Wais22, setWais22] = useState([]);
         const [Wais23, setWais23] = useState([]);
         const [Wais24, setWais24] = useState([]);
         const [Wais25, setWais25] = useState([]);
         const [ResultWais, setResultWais] = useState(0);

         const handleRadioChange21 = (e) => {
            setWais21(e.target.value);
          };

          const handleRadioChange22 = (e) => {
            setWais22(e.target.value);
          };

          const handleRadioChange23 = (e) => {
            setWais23(e.target.value);
          };

          const handleRadioChange24 = (e) => {
            setWais24(e.target.value);
          };

          const handleRadioChange25 = (e) => {
            setWais25(e.target.value);
          };

         useEffect(() => {
            let temResultWais = 0;

            if (Wais1 === '80') {
                temResultWais = temResultWais + 10;
            }

            if (Wais2 === '-1') {
                temResultWais = temResultWais + 10;
            }

            if (Wais3 === ' 2 horas') {
                temResultWais = temResultWais + 10;
            }

            if (Wais4 === '66') {
                temResultWais = temResultWais + 10;
            }

            if (Wais5 === 'Carro') {
                temResultWais = temResultWais + 10;
            }

            if (Wais6 === 'Proporcionar un ejemplo práctico y verificar su comprensión.') {
                temResultWais = temResultWais + 10;
            }

            if (Wais7 === 'Diseñar actividades con diferentes niveles de dificultad.') {
                temResultWais = temResultWais + 10;
            }

            if (Wais8 === 'Escuchar y debatir respetuosamente.') {
                temResultWais = temResultWais + 10;
            }

            if (Wais9 === 'Prepararte lo mejor posible con los recursos disponibles.') {
                temResultWais = temResultWais + 10;
            }

            if (isCorrect) {
                temResultWais = temResultWais + 10;
            }

            if (Wais11 === 'Hablar con él para entender sus intereses.') {
                temResultWais = temResultWais + 10;
            }

            if (isCorrect2) {
                temResultWais = temResultWais + 10;
            }

            if (isCorrect3) {
                temResultWais = temResultWais + 10;
            }

            if (Wais14 === 'Corrigiendo de manera constructiva y explicativa.') {
                temResultWais = temResultWais + 10;
            }

            if (isCorrect4) {
                temResultWais = temResultWais + 10;
            }

            if (Wais16) {
                temResultWais = temResultWais + 10;
            }

            if (Wais17 === 'Hablar con él en privado para entender su comportamiento.') {
                temResultWais = temResultWais + 10;
            }

            if (Wais18) {
                temResultWais = temResultWais + 10;
            }

            if (Wais19 === 'Resolviéndolo en privado, escuchando ambas partes.') {
                temResultWais = temResultWais + 10;
            }

            if (Wais20) {
                temResultWais = temResultWais + 10;
            }

            if (Wais21 === 'd') {
                temResultWais = temResultWais + 10;
            }

            if (Wais22 === 'd') {
                temResultWais = temResultWais + 10;
            }

            if (Wais23 === 'c') {
                temResultWais = temResultWais + 10;
            }

            if (Wais24 === 'c') {
                temResultWais = temResultWais + 10;
            }

            if (Wais25 === 'c') {
                temResultWais = temResultWais + 10;
            }

            setResultWais(temResultWais);
         });
 
         // WAIS state Final

         // Academica state

         const [Academica1, setAcademica1] = useState('');
         const [Academica2, setAcademica2] = useState('');
         const [Academica3, setAcademica3] = useState('');
         const [Academica4, setAcademica4] = useState('');
         const [Academica5, setAcademica5] = useState('');
         const [Academica6, setAcademica6] = useState('');
         const [Academica7, setAcademica7] = useState('');
         const [Academica8, setAcademica8] = useState('');
         const [Academica9, setAcademica9] = useState('');
         const [Academica10, setAcademica10] = useState('');
         const [Academica11, setAcademica11] = useState('');
         const [Academica12, setAcademica12] = useState('');
         const [Academica13, setAcademica13] = useState('');
         const [Academica14, setAcademica14] = useState('');
         const [Academica15, setAcademica15] = useState('');
         const [Academica16, setAcademica16] = useState('');
         const [Academica17, setAcademica17] = useState('');
         const [Academica18, setAcademica18] = useState('');
         const [Academica19, setAcademica19] = useState('');
         const [Academica20, setAcademica20] = useState('');
         const [ResultAcademica, setResultAcademica] = useState(0);

         useEffect(() => {
            let temResultAcademica = 0;

            if (Academica1 === 'Escuchar activamente al estudiante') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica2) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica3 === 'Proporcionarle recursos adicionales, como ejercicios prácticos') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica4) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica5 === 'Investigar las causas subyacentes y buscar soluciones con él') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica6) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica7 === 'Empático') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica8 === 'Observar su desempeño general y recopilar retroalimentación') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica9) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica10 === 'Escuchar con empatía y referirlo a un profesional si es necesario') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica11) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica12 === 'Ser constructivo y destacar áreas de mejora junto con logros') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica13) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica14 === 'Hablar con él en privado para entender la causa del comportamiento') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica15) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica16 === 'Priorizar casos según su urgencia y delegar tareas si es necesario') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica17) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica18 === 'Ayudar a los estudiantes a alcanzar su máximo potencial académico y personal') {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica19) {
                temResultAcademica = temResultAcademica + 10;
            }

            if (Academica20) {
                temResultAcademica = temResultAcademica + 10;
            }

            setResultAcademica(temResultAcademica);

         })
 
         // Academica state Final


    const [step, setStep] = useState(1);
    const [hasAlertShow1, setHasAlertshow1] = useState(false); 
    const [hasAlertShow2, setHasAlertshow2] = useState(false); 
    const [hasAlertShow3, setHasAlertshow3] = useState(false); 

    // Temporizador 1
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutos en segundos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Inicia el temporizador cuando step sea 17
    if (step === 17) {
      setIsRunning(true);
    }

    // Detiene el temporizador cuando step sea 24
    if (step === 24) {
      setIsRunning(false);
    }
  }, [step]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0){
        setIsRunning(false);
        setStep(24);
    }

    // Limpia el intervalo si el temporizador se detiene o se agota el tiempo
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

      // Temporizador 2
    const [timeLeft2, setTimeLeft2] = useState(45 * 60); // 40 minutos en segundos
    const [isRunning2, setIsRunning2] = useState(false);

    useEffect(() => {
        // Inicia el temporizador cuando step sea 17
        if (step === 26) {
          setIsRunning2(true);
        }
    
        // Detiene el temporizador cuando step sea 24
        if (step === 29) {
          setIsRunning2(false);
        }
      }, [step]);

      useEffect(() => {
        let timer2;
        if (isRunning2 && timeLeft2 > 0) {
          timer2 = setInterval(() => {
            setTimeLeft2((prevTime) => prevTime - 1);
          }, 1000);
        } else if (timeLeft2 === 0){
            setIsRunning2(false);
            onsubmit();
        }
    
        // Limpia el intervalo si el temporizador se detiene o se agota el tiempo
        return () => clearInterval(timer2);
      }, [isRunning2, timeLeft2]);

      const formatTime2 = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };


    const nextStep = () => {
        setStep(step + 1);
      };
    
      const prevStep = () => {
        setStep(step - 1);
      };


        useEffect(() => {
            if (step === 4) {
                if (!hasAlertShow1) {
                    Swal.fire({
                        title: "Haz finalizado este test!",
                        text: "Continua con el siguiente!",
                        icon: "success"
                    }); 
                    setHasAlertshow1(true);
                } 
            }

            if (step === 7) {
                if (!hasAlertShow2) {
                    Swal.fire({
                        title: "Haz finalizado este test!",
                        text: "Continua con el siguiente!",
                        icon: "success"
                    }); 
                    setHasAlertshow2(true);
                } 
            }

            if (step === 12) {
                if (!hasAlertShow3) {
                    Swal.fire({
                        title: "Haz finalizado este test!",
                        text: "Continua con el siguiente!",
                        icon: "success"
                    }); 
                    setHasAlertshow3(true);
                } 
            }
            
        });

        const onSubmit = () => {
            navigate('/resultados-colab', { state: {previo, DataBigFive, DataDass, DataZavic, DataBaron, ResultWais, ResultAcademica} });
        };
      

  return (
    <div>
        <NavLogin />
        <div className="form-colab-page-pruebas">
            <div className="title-prueba-colab">
                {step === 1 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE PERSONALIDAD - BIG FIVE</h1>
                        <p className='parrafo-prueba-instruccion'>Instrucciones:</p>
                        <p className='parrafo-prueba-instruccion'>Responde cada afirmación indicando qué tan de acuerdo estás con la afirmación. Usa la siguiente escala:</p>
                        <div className='contenedor-puntos'>
                            <Grid container spacing={2} sx={{width: '95%'}}>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>0 = Totalmente en desacuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>1 = En desacuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>2 = Neutral</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>3 = De acuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>4 = Totalmente de acuerdo</p>
                                </Grid>
                            </Grid>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE PERSONALIDAD - BIG FIVE</h1>
                        <br />
                    </>
                )}
                {step === 3 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE PERSONALIDAD - BIG FIVE</h1>
                        <br />
                    </>
                )}
                {step === 4 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DASS-21</h1>
                        <p className='parrafo-prueba-instruccion'>Instrucciones:</p>
                        <p className='parrafo-prueba-instruccion'>Responde a cada ítem considerando cómo te has sentido o comportado en la última semana, seleccionando una opción por cada afirmación:</p>
                        <div className='contenedor-puntos'>
                            <Grid container spacing={2} sx={{width: '75%'}}>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>0 = Nunca</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>1 = Casi nunca</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>2 = A veces</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>3 = Frecuentemente</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>4 = Muy frecuentemente</p>
                                </Grid>
                            </Grid>
                        </div>
                    </>
                )}
                {step === 5 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DASS-21</h1>
                        <br />
                    </>
                )}
                {step === 6 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DASS-21</h1>
                        <br />
                    </>
                )}
                {step === 7 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE ZAVIC</h1>
                        <p className='parrafo-prueba-instruccion'>Instrucciones:</p>
                        <p className='parrafo-prueba-instruccion'>A continuación, encontrarás una serie de situaciones con cuatro posibles respuestas. Lee cada situación cuidadosamente y asigna un número del 1 al 4 según lo siguiente:</p>
                        <div className='contenedor-puntos'>
                            <Grid container spacing={2} sx={{width: '80%'}}>
                                <Grid item xs={3}>
                                    <p className='puntos-prueba'>4 = Más importante</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className='puntos-prueba'>3 = Importante pero no tanto</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className='puntos-prueba'>2 = Menos importante</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className='puntos-prueba'>1 = Menos relevante</p>
                                </Grid>
                            </Grid>
                        </div>
                    </>
                )}
                {step === 8 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE ZAVIC</h1>
                        <br />
                    </>
                )}
                {step === 9 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE ZAVIC</h1>
                        <br />
                    </>
                )}
                {step === 10 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE ZAVIC</h1>
                        <br />
                    </>
                )}
                {step === 11 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST DE ZAVIC</h1>
                        <br />
                    </>
                )}
                {step === 12 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">Test de Inteligencia Emocional Bar-On </h1>
                        <p className='parrafo-prueba-instruccion'>Instrucciones:</p>
                        <p className='parrafo-prueba-instruccion'>Lee cada afirmación y selecciona la opción que mejor describa tu comportamiento habitual en el entorno laboral. Utiliza una escala del 1 al 5:</p>
                        <div className='contenedor-puntos'>
                            <Grid container spacing={2} sx={{width: '95%'}}>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>0 = Totalmente en desacuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>1 = En desacuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>2 = Neutral</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>3 = De acuerdo</p>
                                </Grid>
                                <Grid item xs={2.4}>
                                    <p className='puntos-prueba'>4 = Totalmente de acuerdo</p>
                                </Grid>
                            </Grid>
                        </div>
                    </>
                )}
                {step === 13 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">Test de Inteligencia Emocional Bar-On </h1>
                        <br />
                    </>
                )}
                {step === 14 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">Test de Inteligencia Emocional Bar-On </h1>
                        <br />
                    </>
                )}
                {step === 15 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">Test de Inteligencia Emocional Bar-On </h1>
                        <br />
                    </>
                )}
                {step === 16 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS:</h1>
                        <br />
                    </>
                )}
                {step === 17 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS:</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 18 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS:</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 19 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS:</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 20 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">TEST de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS:</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 21 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">INDICACIÓN: En los siguientes ejercicios,
                                            selecciona el inciso de la figura que pertenece a la
                                            imagen.</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 22 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 23 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime(timeLeft)}</h2>
                        </div>
                    </>
                )}
                {step === 24 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                    </>
                )}
                {step === 25 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                    </>
                )}
                {step === 26 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime2(timeLeft2)}</h2>
                        </div>
                    </>
                )}
                {step === 27 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime2(timeLeft2)}</h2>
                        </div>
                    </>
                )}
                {step === 28 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime2(timeLeft2)}</h2>
                        </div>
                    </>
                )}
                {step === 29 && (
                    <>
                        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
                        <h1 className="titulo-form-colab primero">PRUEBA ACADÉMICA</h1>
                        <br />
                        <div className='timerIn'>
                            <h2 className='temporizador' >{formatTime2(timeLeft2)}</h2>
                        </div>
                    </>
                )}

            </div>
            <div className="form-section-welcome-colab">
                <div className="form-container-colab">

                    {/* TEST DE PERSONALIDAD BIG FIVE */}

                    {step === 1 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>1. Disfruto aprender cosas nuevas y explorar temas desconocidos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            name="bigfive1"
                                            value={Bigfive1}
                                            onChange={(e) => setBigfive1(Number(e.target.value))} 
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>2. Me gusta experimentar con métodos o ideas poco convencionales.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive2"
                                            value={Bigfive2}
                                            onChange={(e) => setBigfive2(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>3. Aprecio las artes, la creatividad y nuevas formas de expresión.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive3"
                                            value={Bigfive3}
                                            onChange={(e) => setBigfive3(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>4. Estoy abierto/a a los cambios y nuevas experiencias.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive4"
                                            value={Bigfive4}
                                            onChange={(e) => setBigfive4(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>5. Cumplo con mis compromisos sin importar las dificultades.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive5"
                                            value={Bigfive5}
                                            onChange={(e) => setBigfive5(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>6. Me considero una persona organizada y meticulosa en mi trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive6"
                                            value={Bigfive6}
                                            onChange={(e) => setBigfive6(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>7. Planeo con anticipación para evitar contratiempos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive7"
                                            value={Bigfive7}
                                            onChange={(e) => setBigfive7(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>8. Termino lo que empiezo, incluso si requiere un esfuerzo extra.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive8"
                                            value={Bigfive8}
                                            onChange={(e) => setBigfive8(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>9. Me gusta interactuar con otras personas y compartir ideas.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive9"
                                            value={Bigfive9}
                                            onChange={(e) => setBigfive9(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>10. Siento energía y entusiasmo cuando trabajo en equipo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive10"
                                            value={Bigfive10}
                                            onChange={(e) => setBigfive10(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>11. Tomo la iniciativa en conversaciones o proyectos grupales.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive11"
                                            value={Bigfive11}
                                            onChange={(e) => setBigfive11(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>12. Me resulta fácil presentarme y comunicarme con nuevas personas.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive12"
                                            value={Bigfive12}
                                            onChange={(e) => setBigfive12(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>13. Escucho y valoro las opiniones de los demás.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive13"
                                            value={Bigfive13}
                                            onChange={(e) => setBigfive13(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>14. Ayudo a compañeros o estudiantes cuando necesitan apoyo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive14"
                                            value={Bigfive14}
                                            onChange={(e) => setBigfive14(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 3 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>15. Mantengo un trato respetuoso y positivo en situaciones conflictivas.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive15"
                                            value={Bigfive15}
                                            onChange={(e) => setBigfive15(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>16. Celebro los logros de los demás y reconozco sus esfuerzos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive16"
                                            value={Bigfive16}
                                            onChange={(e) => setBigfive16(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>17. Mantengo la calma en situaciones estresantes o difíciles.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive17"
                                            value={Bigfive17}
                                            onChange={(e) => setBigfive17(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>18. No me dejo afectar fácilmente por críticas o problemas menores.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive18"
                                            value={Bigfive18}
                                            onChange={(e) => setBigfive18(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>19. Manejo mis emociones de manera equilibrada y reflexiva.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive19"
                                            value={Bigfive19}
                                            onChange={(e) => setBigfive19(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>20. Encuentro soluciones prácticas sin dejarme llevar por el estrés.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive20"
                                            value={Bigfive20}
                                            onChange={(e) => setBigfive20(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>21. Nunca me he sentido estresado o presionado en mi vida.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive21"
                                            value={Bigfive21}
                                            onChange={(e) => setBigfive21(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>22. Siempre he logrado todo sin enfrentar ningún error.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="bigfive22"
                                            value={Bigfive22}
                                            onChange={(e) => setBigfive22(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}

                    {/* TEST DASS 21 */}

                    {step === 4 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>1. Me ha sido difícil relajarme después de un día de trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass1"
                                            value={Dass1}
                                            onChange={(e) => setDass1(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>2. Me he sentido nervioso/a o alterado/a al enfrentar cambios importantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass2"
                                            value={Dass2}
                                            onChange={(e) => setDass2(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>3. He sentido que no puedo organizar mis tareas y responsabilidades de forma efectiva.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass3"
                                            value={Dass3}
                                            onChange={(e) => setDass3(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>4. Me he sentido tenso/a o irritado/a sin motivo aparente.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass4"
                                            onChange={(e) => setDass4(Number(e.target.value))} 
                                            value={Dass4}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>5. Siento que mi carga de trabajo me resulta difícil de manejar.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass5"
                                            onChange={(e) => setDass5(Number(e.target.value))} 
                                            value={Dass5}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>6. Me cuesta pensar con claridad cuando me encuentro bajo presión.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass6"
                                            onChange={(e) => setDass6(Number(e.target.value))}
                                            value={Dass6} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>7. Me frustro fácilmente cuando las cosas no salen como planeo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass7"
                                            value={Dass7}
                                            onChange={(e) => setDass7(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 5 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>8. He sentido una sensación de miedo, aunque no haya un motivo claro.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass8"
                                            onChange={(e) => setDass8(Number(e.target.value))} 
                                            value={Dass8}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>9. He sentido que mi corazón late rápido incluso en reposo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass9"
                                            value={Dass9}
                                            onChange={(e) => setDass9(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>10. Me cuesta mantener la calma al enfrentar conflictos o desafíos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass10"
                                            onChange={(e) => setDass10(Number(e.target.value))} 
                                            value={Dass10}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>11. He sentido que no puedo detener pensamientos preocupantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass11"
                                            onChange={(e) => setDass11(Number(e.target.value))} 
                                            value={Dass11}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>12. Me he sentido abrumado/a ante tareas importantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass12"
                                            onChange={(e) => setDass12(Number(e.target.value))} 
                                            value={Dass12}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>13. He evitado situaciones que me ponen nervioso/a.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass13"
                                            onChange={(e) => setDass13(Number(e.target.value))} 
                                            value={Dass13}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>14. He sentido incomodidad física (como temblores o sudoración) en situaciones estresantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass14"
                                            onChange={(e) => setDass14(Number(e.target.value))} 
                                            value={Dass14}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 6 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>15. Me he sentido triste o vacío/a durante la última semana.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass15"
                                            onChange={(e) => setDass15(Number(e.target.value))} 
                                            value={Dass15}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>16. He perdido interés en actividades que antes disfrutaba.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass16"
                                            onChange={(e) => setDass16(Number(e.target.value))}
                                            value={Dass16} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>17. He sentido que no tengo energía para cumplir con mis responsabilidades.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass17"
                                            onChange={(e) => setDass17(Number(e.target.value))} 
                                            value={Dass17}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>18. Me he sentido inferior o poco capaz comparado con otros.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass18"
                                            onChange={(e) => setDass18(Number(e.target.value))} 
                                            value={Dass18}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>19. Me cuesta encontrar cosas positivas en mi día a día.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass19"
                                            onChange={(e) => setDass19(Number(e.target.value))} 
                                            value={Dass19}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>20. Me he sentido desmotivado/a para resolver problemas cotidianos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass20"
                                            onChange={(e) => setDass20(Number(e.target.value))} 
                                            value={Dass20}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>21. Siento que no estoy logrando los objetivos que me he propuesto.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Dass21"
                                            onChange={(e) => setDass21(Number(e.target.value))}
                                            value={Dass21} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}

                    {/* TEST DE ZAVIC */}

                    {/* La condicional de aceptacion al postulante es mayor o = a 100 pts */}

                    {step === 7 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>1. Si descubres que un colega no está cumpliendo con las normas de la empresa, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic1"
                                            onChange={(e) => setZavic1(e.target.value)} 
                                            value={Zavic1}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Lo reportas a un supervisor de inmediato.'>Lo reportas a un supervisor de inmediato.</MenuItem>
                                                <MenuItem value='Intentas hablar con él para entender la situación.'>Intentas hablar con él para entender la situación.</MenuItem>
                                                <MenuItem value='Decides no involucrarte en el asunto.'>Decides no involucrarte en el asunto.</MenuItem>
                                                <MenuItem value='Consideras que es su responsabilidad y no intervienes.'>Consideras que es su responsabilidad y no intervienes.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic2"
                                            value={Zavic2}
                                            onChange={(e) => setZavic2(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>2. En una situación en la que tu equipo debe tomar una decisión difícil, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic3"
                                            onChange={(e) => setZavic3(e.target.value)} 
                                            value={Zavic3}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Propones seguir estrictamente las políticas establecidas.'>Propones seguir estrictamente las políticas establecidas.</MenuItem>
                                                <MenuItem value='Buscas la opción más justa para todos.'>Buscas la opción más justa para todos.</MenuItem>
                                                <MenuItem value='Consideras lo que beneficiaría más a la mayoría.'>Consideras lo que beneficiaría más a la mayoría.</MenuItem>
                                                <MenuItem value='Optas por la decisión más eficiente, sin importar las reglas.'>Optas por la decisión más eficiente, sin importar las reglas.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic4"
                                            onChange={(e) => setZavic4(Number(e.target.value))} 
                                            value={Zavic4}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>3. Si tienes que elegir entre dos proyectos, eliges el que:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic5"
                                            onChange={(e) => setZavic5(e.target.value)} 
                                            value={Zavic5}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Está alineado con las normas de la empresa.'>Está alineado con las normas de la empresa.</MenuItem>
                                                <MenuItem value='Tiene un mayor impacto positivo en las personas.'>Tiene un mayor impacto positivo en las personas.</MenuItem>
                                                <MenuItem value='Te brinde más beneficios económicos.'>Te brinde más beneficios económicos.</MenuItem>
                                                <MenuItem value='Sea más fácil de completar rápidamente.'>Sea más fácil de completar rápidamente.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic6"
                                            onChange={(e) => setZavic6(Number(e.target.value))}
                                            value={Zavic6} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>4. Cuando trabajas en equipo, priorizas:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic7"
                                            onChange={(e) => setZavic7(e.target.value)} 
                                            value={Zavic7}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Seguir las reglas para evitar conflictos.'>Seguir las reglas para evitar conflictos.</MenuItem>
                                                <MenuItem value='Crear un ambiente de respeto mutuo.'>Crear un ambiente de respeto mutuo.</MenuItem>
                                                <MenuItem value='Cumplir con los objetivos, sin importar las relaciones personales.'>Cumplir con los objetivos, sin importar las relaciones personales.</MenuItem>
                                                <MenuItem value='Minimizar el esfuerzo necesario para lograr los resultados.'>Minimizar el esfuerzo necesario para lograr los resultados.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic8"
                                            value={Zavic8}
                                            onChange={(e) => setZavic8(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>5. Si observas que un proyecto no cumple con los estándares éticos de la empresa, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic9"
                                            value={Zavic9}
                                            onChange={(e) => setZavic9(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Informas inmediatamente a los responsables.'>Informas inmediatamente a los responsables.</MenuItem>
                                                <MenuItem value='Buscas entender las razones detrás de la situación antes de actuar.'>Buscas entender las razones detrás de la situación antes de actuar.</MenuItem>
                                                <MenuItem value='Te mantienes al margen para evitar conflictos.'>Te mantienes al margen para evitar conflictos.</MenuItem>
                                                <MenuItem value='Lo consideras un error menor si no afecta directamente el resultado.'>Lo consideras un error menor si no afecta directamente el resultado.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic10"
                                            value={Zavic10}
                                            onChange={(e) => setZavic10(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>6. Si encuentras un objeto valioso olvidado en tu lugar de trabajo, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic11"
                                            onChange={(e) => setZavic11(e.target.value)}
                                            value={Zavic11} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Lo devuelves inmediatamente a su dueño.'>Lo devuelves inmediatamente a su dueño.</MenuItem>
                                                <MenuItem value='Informas a tus superiores y entregas el objeto.'>Informas a tus superiores y entregas el objeto.</MenuItem>
                                                <MenuItem value='Decides esperar para ver si alguien lo reclama.'>Decides esperar para ver si alguien lo reclama.</MenuItem>
                                                <MenuItem value='Lo dejas donde lo encontraste.'>Lo dejas donde lo encontraste.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic12"
                                            onChange={(e) => setZavic12(Number(e.target.value))} 
                                            value={Zavic12}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 8 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>7. Si un cliente ofrece un incentivo para recibir un trato especial, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic13"
                                            onChange={(e) => setZavic13(e.target.value)} 
                                            value={Zavic13}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Rechazas el incentivo y explicas que no es ético.'>Rechazas el incentivo y explicas que no es ético.</MenuItem>
                                                <MenuItem value='Informas la situación a tu supervisor.'>Informas la situación a tu supervisor.</MenuItem>
                                                <MenuItem value='Aceptas el incentivo para evitar problemas.'>Aceptas el incentivo para evitar problemas.</MenuItem>
                                                <MenuItem value='Consideras si afecta negativamente a alguien antes de decidir.'>Consideras si afecta negativamente a alguien antes de decidir.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic14"
                                            onChange={(e) => setZavic14(Number(e.target.value))} 
                                            value={Zavic14}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>8. En una situación de presión por cumplir metas laborales, prefieres:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic15"
                                            onChange={(e) => setZavic15(e.target.value)} 
                                            value={Zavic15}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Mantener la integridad, aunque afecte los resultados.'>Mantener la integridad, aunque afecte los resultados.</MenuItem>
                                                <MenuItem value='Buscar apoyo del equipo para trabajar dentro de las reglas.'>Buscar apoyo del equipo para trabajar dentro de las reglas.</MenuItem>
                                                <MenuItem value='Tomar atajos siempre que sean efectivos.'>Tomar atajos siempre que sean efectivos.</MenuItem>
                                                <MenuItem value='Adaptarte a las circunstancias, incluso si eso implica romper algunas normas.'>Adaptarte a las circunstancias, incluso si eso implica romper algunas normas.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic16"
                                            onChange={(e) => setZavic16(Number(e.target.value))} 
                                            value={Zavic16}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>9. Si un compañero de trabajo te pide que lo cubras en una actividad que no completó, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic17"
                                            onChange={(e) => setZavic17(e.target.value)} 
                                            value={Zavic17}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Informas al supervisor sobre la situación.'>Informas al supervisor sobre la situación.</MenuItem>
                                                <MenuItem value='Lo ayudas solo si es una emergencia.'>Lo ayudas solo si es una emergencia.</MenuItem>
                                                <MenuItem value='Aceptas hacerlo, pero te aseguras de que sea la última vez.'>Aceptas hacerlo, pero te aseguras de que sea la última vez.</MenuItem>
                                                <MenuItem value='Te niegas porque no es tu responsabilidad.'>Te niegas porque no es tu responsabilidad.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic18"
                                            onChange={(e) => setZavic18(Number(e.target.value))} 
                                            value={Zavic18}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>10. Si tuvieras que elegir entre dos trabajos, elegirías el que:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic19"
                                            onChange={(e) => setZavic19(e.target.value)} 
                                            value={Zavic19}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ofrece mayor estabilidad económica.'>Ofrece mayor estabilidad económica.</MenuItem>
                                                <MenuItem value='Te permite obtener mayores ingresos a corto plazo.'>Te permite obtener mayores ingresos a corto plazo.</MenuItem>
                                                <MenuItem value='Ofrece menos ingresos pero más equilibrio personal.'>Ofrece menos ingresos pero más equilibrio personal.</MenuItem>
                                                <MenuItem value='Brinda más oportunidades de crecimiento profesional.'>Brinda más oportunidades de crecimiento profesional.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic20"
                                            onChange={(e) => setZavic20(Number(e.target.value))} 
                                            value={Zavic20}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>11. Cuando se trata de beneficios laborales, priorizas:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic21"
                                            onChange={(e) => setZavic21(e.target.value)} 
                                            value={Zavic21}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Un salario justo y competitivo.'>Un salario justo y competitivo.</MenuItem>
                                                <MenuItem value='Incentivos adicionales como bonos.'>Incentivos adicionales como bonos.</MenuItem>
                                                <MenuItem value='Un ambiente laboral cómodo y equilibrado.'>Un ambiente laboral cómodo y equilibrado.</MenuItem>
                                                <MenuItem value='Oportunidades de aprendizaje y desarrollo.'>Oportunidades de aprendizaje y desarrollo.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="zavic22"
                                            onChange={(e) => setZavic22(Number(e.target.value))}
                                            value={Zavic22}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>12. Si tienes la oportunidad de mejorar un proceso en tu trabajo, lo haces porque:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic23"
                                            onChange={(e) => setZavic23(e.target.value)} 
                                            value={Zavic23}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Aumenta la productividad de tu equipo.'>Aumenta la productividad de tu equipo.</MenuItem>
                                                <MenuItem value='Mejora los ingresos de la empresa.'>Mejora los ingresos de la empresa.</MenuItem>
                                                <MenuItem value='Beneficia a los clientes o usuarios.'>Beneficia a los clientes o usuarios.</MenuItem>
                                                <MenuItem value='Genera menos estrés en tu día a día.'>Genera menos estrés en tu día a día.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic24"
                                            onChange={(e) => setZavic24(Number(e.target.value))}
                                            value={Zavic24}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 9 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>13. Si tu supervisor te pide que completes una tarea extra sin remuneración adicional, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic25"
                                            onChange={(e) => setZavic25(e.target.value)} 
                                            value={Zavic25}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Te aseguras de que valga la pena el esfuerzo.'>Te aseguras de que valga la pena el esfuerzo.</MenuItem>
                                                <MenuItem value='Preguntas si habrá beneficios futuros por hacerlo.'>Preguntas si habrá beneficios futuros por hacerlo.</MenuItem>
                                                <MenuItem value='Lo haces porque es parte de tu compromiso.'>Lo haces porque es parte de tu compromiso.</MenuItem>
                                                <MenuItem value='Lo rechazas si consideras que no es justo.'>Lo rechazas si consideras que no es justo.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic26"
                                            value={Zavic26}
                                            onChange={(e) => setZavic26(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>14. En un proyecto grupal, prefieres ser:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic27"
                                            value={Zavic27}
                                            onChange={(e) => setZavic27(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='El líder que toma decisiones.'>El líder que toma decisiones.</MenuItem>
                                                <MenuItem value='Parte del equipo que ejecuta las tareas.'>Parte del equipo que ejecuta las tareas.</MenuItem>
                                                <MenuItem value='El apoyo técnico que brinda soluciones.'>El apoyo técnico que brinda soluciones.</MenuItem>
                                                <MenuItem value='El observador que monitorea el progreso.'>El observador que monitorea el progreso.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic28"
                                            onChange={(e) => setZavic28(Number(e.target.value))} 
                                            value={Zavic28}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>15. Si tu supervisor te pide una opinión sobre una estrategia, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic29"
                                            value={Zavic29}
                                            onChange={(e) => setZavic29(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Propones una alternativa más efectiva.'>Propones una alternativa más efectiva.</MenuItem>
                                                <MenuItem value='Das tu opinión solo si estás seguro/a de que será bien recibida.'>Das tu opinión solo si estás seguro/a de que será bien recibida.</MenuItem>
                                                <MenuItem value='Apoyas lo que ya está decidido.'>Apoyas lo que ya está decidido.</MenuItem>
                                                <MenuItem value='Evitas opinar para no complicarte.'>Evitas opinar para no complicarte.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic30"
                                            value={Zavic30}
                                            onChange={(e) => setZavic30(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>16. En un entorno laboral, buscas roles que:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic31"
                                            value={Zavic31}
                                            onChange={(e) => setZavic31(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Te permitan tomar decisiones importantes.'>Te permitan tomar decisiones importantes.</MenuItem>
                                                <MenuItem value='Sean clave para el éxito del equipo.'>Sean clave para el éxito del equipo.</MenuItem>
                                                <MenuItem value='No requieran demasiada exposición.'>No requieran demasiada exposición.</MenuItem>
                                                <MenuItem value='Te ofrezcan la posibilidad de aprender sin presión.'>Te ofrezcan la posibilidad de aprender sin presión.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic32"
                                            onChange={(e) => setZavic32(Number(e.target.value))} 
                                            value={Zavic32}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>17. Cuando surge un problema en tu equipo, tiendes a:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic33"
                                            onChange={(e) => setZavic33(e.target.value)} 
                                            value={Zavic33}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Asumir la responsabilidad de encontrar una solución.'>Asumir la responsabilidad de encontrar una solución.</MenuItem>
                                                <MenuItem value='Esperar a que alguien más tome la iniciativa.'>Esperar a que alguien más tome la iniciativa.</MenuItem>
                                                <MenuItem value='Consultar a tus superiores antes de actuar.'>Consultar a tus superiores antes de actuar.</MenuItem>
                                                <MenuItem value='Resolverlo solo si afecta directamente tu desempeño.'>Resolverlo solo si afecta directamente tu desempeño.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic34"
                                            value={Zavic34}
                                            onChange={(e) => setZavic34(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>18. Si un colega está teniendo un mal día, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic35"
                                            onChange={(e) => setZavic35(e.target.value)} 
                                            value={Zavic35}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Le ofreces tu ayuda para aliviar su carga.'>Le ofreces tu ayuda para aliviar su carga.</MenuItem>
                                                <MenuItem value='Intentas animarlo con una conversación positiva.'>Intentas animarlo con una conversación positiva.</MenuItem>
                                                <MenuItem value='Decides darle su espacio para que lo resuelva por su cuenta.'>Decides darle su espacio para que lo resuelva por su cuenta.</MenuItem>
                                                <MenuItem value='Lo reportas a los supervisores para que lo apoyen.'>Lo reportas a los supervisores para que lo apoyen.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic36"
                                            onChange={(e) => setZavic36(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            value={Zavic36}
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 10 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>19. Si tu equipo está enfrentando dificultades, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic37"
                                            onChange={(e) => setZavic37(e.target.value)} 
                                            value={Zavic37}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Buscas formas de motivarlos a seguir adelante.'>Buscas formas de motivarlos a seguir adelante.</MenuItem>
                                                <MenuItem value='Les recuerdas que todos deben cumplir sus responsabilidades.'>Les recuerdas que todos deben cumplir sus responsabilidades.</MenuItem>
                                                <MenuItem value='Los apoyas solo si afecta directamente tus tareas'>Los apoyas solo si afecta directamente tus tareas.</MenuItem>
                                                <MenuItem value='Esperas a que encuentren una solución por sí mismos.'>Esperas a que encuentren una solución por sí mismos.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic38"
                                            onChange={(e) => setZavic38(Number(e.target.value))} 
                                            value={Zavic38}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>20. Cuando se trata de compartir recursos laborales, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic39"
                                            onChange={(e) => setZavic39(e.target.value)}
                                            value={Zavic39} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Aseguras que todos tengan acceso equitativo.'>Aseguras que todos tengan acceso equitativo.</MenuItem>
                                                <MenuItem value='Priorizas las necesidades de quienes más lo necesitan.'>Priorizas las necesidades de quienes más lo necesitan.</MenuItem>
                                                <MenuItem value='Utilizas los recursos de manera personal para garantizar resultados.'>Utilizas los recursos de manera personal para garantizar resultados.</MenuItem>
                                                <MenuItem value='Propones que los recursos sean asignados por orden jerárquico.'>Propones que los recursos sean asignados por orden jerárquico.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic40"
                                            onChange={(e) => setZavic40(Number(e.target.value))}
                                            value={Zavic40} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>21. Si un cliente necesita más tiempo o apoyo del esperado, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic41"
                                            onChange={(e) => setZavic41(e.target.value)} 
                                            value={Zavic41}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Lo ayudas sin dudar porque es tu responsabilidad.'>Lo ayudas sin dudar porque es tu responsabilidad.</MenuItem>
                                                <MenuItem value='Buscas apoyo de otros para brindarle el servicio necesario.'>Buscas apoyo de otros para brindarle el servicio necesario.</MenuItem>
                                                <MenuItem value='Haces lo que puedes sin comprometer tus tareas.'>Haces lo que puedes sin comprometer tus tareas.</MenuItem>
                                                <MenuItem value='Le explicas que hay límites claros en los servicios ofrecidos.'>Le explicas que hay límites claros en los servicios ofrecidos.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic42"
                                            onChange={(e) => setZavic42(Number(e.target.value))} 
                                            value={Zavic42}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>22. Prefieres un entorno laboral donde puedas:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic43"
                                            onChange={(e) => setZavic43(e.target.value)} 
                                            value={Zavic43}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Innovar constantemente en los procesos.'>Innovar constantemente en los procesos.</MenuItem>
                                                <MenuItem value='Mejorar la eficiencia con métodos probados.'>Mejorar la eficiencia con métodos probados.</MenuItem>
                                                <MenuItem value='Tener un enfoque claro y estructurado.'>Tener un enfoque claro y estructurado.</MenuItem>
                                                <MenuItem value='Cumplir tus tareas sin necesidad de cambiar lo establecido.'>Cumplir tus tareas sin necesidad de cambiar lo establecido.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic44"
                                            onChange={(e) => setZavic44(Number(e.target.value))} 
                                            value={Zavic44}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>23. Al abordar un problema complejo, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic45"
                                            onChange={(e) => setZavic45(e.target.value)} 
                                            value={Zavic45}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Piensas fuera de lo convencional para resolverlo.'>Piensas fuera de lo convencional para resolverlo.</MenuItem>
                                                <MenuItem value='Analizas las soluciones más prácticas disponibles.'>Analizas las soluciones más prácticas disponibles.</MenuItem>
                                                <MenuItem value='Buscas ejemplos previos para guiarte.'>Buscas ejemplos previos para guiarte.</MenuItem>
                                                <MenuItem value='Evitas involucrarte si no es parte de tu rol.'>Evitas involucrarte si no es parte de tu rol.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic46"
                                            onChange={(e) => setZavic46(Number(e.target.value))} 
                                            value={Zavic46}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>24. Cuando tienes una idea nueva, tiendes a:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic47"
                                            onChange={(e) => setZavic47(e.target.value)} 
                                            value={Zavic47}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Compartirla con el equipo para desarrollarla juntos.'>Compartirla con el equipo para desarrollarla juntos.</MenuItem>
                                                <MenuItem value='Analizarla primero para asegurarte de que es viable.'>Analizarla primero para asegurarte de que es viable.</MenuItem>
                                                <MenuItem value='Guardarla para ti hasta que sea necesaria.'>Guardarla para ti hasta que sea necesaria.</MenuItem>
                                                <MenuItem value='Evitar proponerla si no estás seguro/a de su éxito.'>Evitar proponerla si no estás seguro/a de su éxito.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic48"
                                            onChange={(e) => setZavic48(Number(e.target.value))} 
                                            value={Zavic48}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 11 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>25. Si un proyecto requiere innovación, prefieres:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic49"
                                            value={Zavic49}
                                            onChange={(e) => setZavic49(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Proponer nuevas formas de hacerlo.'>Proponer nuevas formas de hacerlo.</MenuItem>
                                                <MenuItem value='Seguir métodos que ya hayan funcionado antes.'>Seguir métodos que ya hayan funcionado antes.</MenuItem>
                                                <MenuItem value='Pedir apoyo a un colega más experimentado.'>Pedir apoyo a un colega más experimentado.</MenuItem>
                                                <MenuItem value='Cumplir tu parte sin involucrarte en la planificación.'>Cumplir tu parte sin involucrarte en la planificación.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic50"
                                            value={Zavic50}
                                            onChange={(e) => setZavic50(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>26. Si tu empresa enfrenta un problema recurrente, prefieres:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic51"
                                            value={Zavic51}
                                            onChange={(e) => setZavic51(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Aseguras que todos tengan acceso equitativo.'>Aseguras que todos tengan acceso equitativo.</MenuItem>
                                                <MenuItem value='Priorizas las necesidades de quienes más lo necesitan.'>Priorizas las necesidades de quienes más lo necesitan.</MenuItem>
                                                <MenuItem value='Utilizas los recursos de manera personal para garantizar resultados.'>Utilizas los recursos de manera personal para garantizar resultados.</MenuItem>
                                                <MenuItem value='Propones que los recursos sean asignados por orden jerárquico.'>Propones que los recursos sean asignados por orden jerárquico.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic52"
                                            value={Zavic52}
                                            onChange={(e) => setZavic52(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>27. Cuando trabajas en un equipo diverso con distintas ideas, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic53"
                                            value={Zavic53}
                                            onChange={(e) => setZavic53(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Fomentas la integración de todas las perspectivas.'>Fomentas la integración de todas las perspectivas.</MenuItem>
                                                <MenuItem value='Analizas qué idea tiene más sentido práctico.'>Analizas qué idea tiene más sentido práctico.</MenuItem>
                                                <MenuItem value='Prefieres seguir con las ideas que ya funcionan.'>Prefieres seguir con las ideas que ya funcionan.</MenuItem>
                                                <MenuItem value='Te adaptas a la decisión de la mayoría sin cuestionar.'>Te adaptas a la decisión de la mayoría sin cuestionar.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic54"
                                            value={Zavic54}
                                            onChange={(e) => setZavic54(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>28. Si la empresa donde trabajas implementa un proyecto de impacto social, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic55"
                                            value={Zavic55}
                                            onChange={(e) => setZavic55(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Participas activamente y propones ideas.'>Participas activamente y propones ideas.</MenuItem>
                                                <MenuItem value='Colaboras si te lo solicitan.'>Colaboras si te lo solicitan.</MenuItem>
                                                <MenuItem value='Lo apoyas solo si no interfiere con tus tareas.'>Lo apoyas solo si no interfiere con tus tareas.</MenuItem>
                                                <MenuItem value='Consideras que es una actividad secundaria.'>Consideras que es una actividad secundaria.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic56"
                                            value={Zavic56}
                                            onChange={(e) => setZavic56(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>29. Cuando observas prácticas laborales que dañan el medio ambiente, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic57"
                                            value={Zavic57}
                                            onChange={(e) => setZavic57(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Informas a tus superiores para buscar soluciones.'>Informas a tus superiores para buscar soluciones.</MenuItem>
                                                <MenuItem value='Propones alternativas más sostenibles.'>Propones alternativas más sostenibles.</MenuItem>
                                                <MenuItem value='Te enfocas en cumplir con tus propias responsabilidades.'>Te enfocas en cumplir con tus propias responsabilidades.</MenuItem>
                                                <MenuItem value='Lo ignoras porque no depende de ti cambiarlo.'>Lo ignoras porque no depende de ti cambiarlo.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic58"
                                            value={Zavic58}
                                            onChange={(e) => setZavic58(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className='pregunta-prueba'>30. Si tu equipo recibe fondos adicionales para un proyecto, tú:</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic59"
                                            value={Zavic59}
                                            onChange={(e) => setZavic59(e.target.value)} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Aseguras que se usen de manera eficiente y responsable.'>Aseguras que se usen de manera eficiente y responsable.</MenuItem>
                                                <MenuItem value='Propones invertirlos en actividades que beneficien a la comunidad.'>Propones invertirlos en actividades que beneficien a la comunidad.</MenuItem>
                                                <MenuItem value='Sugieres utilizarlos en mejorar los recursos internos del equipo.'>Sugieres utilizarlos en mejorar los recursos internos del equipo.</MenuItem>
                                                <MenuItem value='Consideras que deberían distribuirse como incentivos individuales.'>Consideras que deberían distribuirse como incentivos individuales.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Zavic60"
                                            value={Zavic60}
                                            onChange={(e) => setZavic60(Number(e.target.value))} 
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}

                    {/* Test de Inteligencia Emocional Bar-On */}

                    {step === 12 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>1. Soy capaz de reconocer cuando mis emociones afectan mi desempeño en el trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                             name="Barnon1"
                                             value={Bornon1}
                                             onChange={(e) => setBarnon1(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>2. Entiendo cómo mis emociones pueden influir en la dinámica del equipo de trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon2"
                                            value={Bornon2}
                                            onChange={(e) => setBarnon2(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>3. Reflexiono sobre mis emociones después de situaciones estresantes para aprender de ellas.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon3"
                                            value={Bornon3}
                                            onChange={(e) => setBarnon3(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>4. Soy consciente de las emociones que siento cuando estoy trabajando bajo presión.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon4"
                                            value={Bornon4}
                                            onChange={(e) => setBarnon4(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>5. Reconozco mis fortalezas y debilidades emocionales.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon5"
                                            value={Bornon5}
                                            onChange={(e) => setBarnon5(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>6. Mantengo la calma en situaciones de alta presión o conflicto en el trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon6"
                                            value={Bornon6}
                                            onChange={(e) => setBarnon6(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>7. En momentos de estrés, puedo mantener un enfoque claro y no dejo que mis emociones me descontrolen.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon7"
                                            value={Bornon7}
                                            onChange={(e) => setBarnon7(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 13 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>8. Cuando estoy frustrado, sé cómo calmarme y seguir adelante.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon8"
                                            value={Bornon8}
                                            onChange={(e) => setBarnon8(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>9. Me esfuerzo por mantener una actitud positiva frente a desafíos o fracasos.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon9"
                                            value={Bornon9}
                                            onChange={(e) => setBarnon9(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>10. Suelo manejar mis emociones sin que estas interfieran con la toma de decisiones en el trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon10"
                                            value={Bornon10}
                                            onChange={(e) => setBarnon10(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>11. Trato de comprender cómo se sienten los demás antes de actuar o dar una respuesta.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon11"
                                            value={Bornon11}
                                            onChange={(e) => setBarnon11(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>12. Escucho activamente a los compañeros de trabajo para comprender sus necesidades y emociones.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon12"
                                            value={Bornon12}
                                            onChange={(e) => setBarnon12(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>13. Soy capaz de reconocer cuando los estudiantes o colegas necesitan apoyo emocional.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon13"
                                            value={Bornon13}
                                            onChange={(e) => setBarnon13(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 14 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>14. Intento adaptar mi enfoque a las necesidades emocionales de los demás, especialmente cuando trato con estudiantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon14"
                                            value={Bornon14}
                                            onChange={(e) => setBarnon14(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>15. Me esfuerzo por mostrar empatía y apoyo en situaciones emocionales difíciles en el entorno académico.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon15"
                                            value={Bornon15}
                                            onChange={(e) => setBarnon15(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>16. Puedo manejar conflictos de manera eficaz sin que estos afecten las relaciones laborales.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon16"
                                            value={Bornon16}
                                            onChange={(e) => setBarnon16(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>17. Me siento cómodo estableciendo relaciones de confianza con colegas y estudiantes.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon17"
                                            value={Bornon17}
                                            onChange={(e) => setBarnon17(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>18. Fomento un ambiente de trabajo colaborativo y respetuoso.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon18"
                                            value={Bornon18}
                                            onChange={(e) => setBarnon18(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>19. Soy capaz de comunicarme claramente con los estudiantes y compañeros, incluso en situaciones difíciles.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon19"
                                            value={Bornon19}
                                            onChange={(e) => setBarnon19(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 15 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>20. Me esfuerzo por crear un clima laboral inclusivo y positivo en el trabajo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon20"
                                            value={Bornon20}
                                            onChange={(e) => setBarnon20(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>21. Al tomar decisiones importantes, considero tanto los hechos como mis emociones.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon21"
                                            value={Bornon21}
                                            onChange={(e) => setBarnon21(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>22. En situaciones complicadas, busco soluciones que beneficien tanto a los estudiantes como al equipo.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon22"
                                            value={Bornon22}
                                            onChange={(e) => setBarnon22(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>23. Soy capaz de evaluar las posibles consecuencias emocionales de mis decisiones antes de actuar.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon23"
                                            value={Bornon23}
                                            onChange={(e) => setBarnon23(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>24. A la hora de resolver problemas, soy creativo y abierto a nuevas ideas.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon24"
                                            value={Bornon24}
                                            onChange={(e) => setBarnon24(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <p className='pregunta-prueba'>25. Tomo decisiones basadas en un equilibrio entre la lógica y las emociones de los involucrados.</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Barnon25"
                                            value={Bornon25}
                                            onChange={(e) => setBarnon25(Number(e.target.value))}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='4'>4</MenuItem>
                                                <MenuItem value='3'>3</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}

                    {/* Prueba de Inteligencia Cognitiva Completa (IQ Test de Alto Nivel)-WAIS: */}

                    {step === 16 && (
                        <form onSubmit={nextStep}>
                            <div className="instricciones-test-wais">
                                <br />
                                <p className='texto-instrucciones-wais'>Instrucciones:</p>
                                <br />
                                <p className='indicaciones-wais'>1. Lee cuidadosamente cada pregunta antes de responder.</p>
                                <p className='indicaciones-wais'>2. Responde con claridad y en el espacio indicado.</p>
                                <p className='indicaciones-wais'>3. Algunas preguntas son cerradas (elige la opción correcta) y otras abiertas (explica o describe).</p>
                                <p className='indicaciones-wais'>4. En las preguntas abiertas, procura incluir ejemplos prácticos, soluciones claras o reflexiones relevantes según corresponda.</p>
                                <br />
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>Tiempo estimado:</p>
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Tienes un máximo de 40 minutos para completar el test.</p>
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>¡Buena suerte!</p>
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Si tienes alguna duda antes de comenzar, consulta con el evaluador.</p>
                                <br />
                                <div className="control-btns-steps-one wais">
                                    <button type="submit" className="btn-next-step-wais">Iniciar</button>
                                </div>
                            </div>
                        </form>    
                    )}
                    {step === 17 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>1. Encuentra el siguiente número en la serie: 5, 10, 20, 40, ...</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais1"
                                            value={Wais1}
                                            onChange={(e) => setWais1(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='50'>50</MenuItem>
                                                <MenuItem value='60'>60</MenuItem>
                                                <MenuItem value='80'>80</MenuItem>
                                                <MenuItem value='100'>100</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>2. Si 2(x+3)=3x+7, ¿cuánto vale x?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais2"
                                            value={Wais2}
                                            onChange={(e) => setWais2(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='-1'>-1</MenuItem>
                                                <MenuItem value='1'>1</MenuItem>
                                                <MenuItem value='0'>0</MenuItem>
                                                <MenuItem value='2'>2</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>3. Un empleado realiza una tarea en 4 horas. Si trabaja al doble de velocidad, ¿cuánto tardará en terminar?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais3"
                                            value={Wais3}
                                            onChange={(e) => setWais3(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value=' 2 horas'> 2 horas</MenuItem>
                                                <MenuItem value=' 3 horas'> 3 horas</MenuItem>
                                                <MenuItem value=' 1 horas'> 1 horas</MenuItem>
                                                <MenuItem value=' 4 horas'> 4 horas</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>4. En un grupo hay 12 personas. Cada una debe saludar a las demás una vez. ¿Cuántos saludos se realizan en total?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais4"
                                            value={Wais4}
                                            onChange={(e) => setWais4(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='66'>66</MenuItem>
                                                <MenuItem value='72'>72</MenuItem>
                                                <MenuItem value='144'>144</MenuItem>
                                                <MenuItem value='12'>12</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>5. Encuentra el elemento que no encaja: Manzana, Pera, Carro, Mango.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais5"
                                            value={Wais5}
                                            onChange={(e) => setWais5(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Manzana'>Manzana</MenuItem>
                                                <MenuItem value='Pera'>Pera</MenuItem>
                                                <MenuItem value='Carro'>Carro</MenuItem>
                                                <MenuItem value='Mango'>Mango</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 18 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>6. Un estudiante no entiende un concepto clave en clase. ¿Qué pasos seguirías?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais6"
                                            value={Wais6}
                                            onChange={(e) => setWais6(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorar el problema y continuar.'>Ignorar el problema y continuar.</MenuItem>
                                                <MenuItem value='Repetir la explicación de la misma manera.'>Repetir la explicación de la misma manera.</MenuItem>
                                                <MenuItem value='Proporcionar un ejemplo práctico y verificar su comprensión.'>Proporcionar un ejemplo práctico y verificar su comprensión.</MenuItem>
                                                <MenuItem value='Pedirle que lo estudie después de clase.'>Pedirle que lo estudie después de clase.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>7. Si te enfrentas a un grupo con niveles de aprendizaje variados, ¿qué harías?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais7"
                                            value={Wais7}
                                            onChange={(e) => setWais7(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Dividir el grupo en niveles y trabajar con cada nivel por separado.'>Dividir el grupo en niveles y trabajar con cada nivel por separado.</MenuItem>
                                                <MenuItem value='Ignorar las diferencias y enseñar al ritmo promedio.'>Ignorar las diferencias y enseñar al ritmo promedio.</MenuItem>
                                                <MenuItem value='Diseñar actividades con diferentes niveles de dificultad.'>Diseñar actividades con diferentes niveles de dificultad.</MenuItem>
                                                <MenuItem value='Enfocarme solo en los más avanzados.'>Enfocarme solo en los más avanzados.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>8. ¿Qué harías si un estudiante cuestiona tu explicación con argumentos válidos?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais8"
                                            value={Wais8}
                                            onChange={(e) => setWais8(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Escuchar y debatir respetuosamente.'>Escuchar y debatir respetuosamente.</MenuItem>
                                                <MenuItem value='Rechazar sus argumentos de inmediato.'>Rechazar sus argumentos de inmediato.</MenuItem>
                                                <MenuItem value='Ignorar el comentario y seguir.'>Ignorar el comentario y seguir.</MenuItem>
                                                <MenuItem value='Pedirle que consulte otras fuentes.'>Pedirle que consulte otras fuentes.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>9. Te informan de un cambio de tema con 24 horas de anticipación. ¿Qué harías?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais9"
                                            value={Wais9}
                                            onChange={(e) => setWais9(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Solicitar más tiempo para prepararte.'>Solicitar más tiempo para prepararte.</MenuItem>
                                                <MenuItem value='Prepararte lo mejor posible con los recursos disponibles.'>Prepararte lo mejor posible con los recursos disponibles.</MenuItem>
                                                <MenuItem value='Cancelar la clase si no te sientes listo.'>Cancelar la clase si no te sientes listo.</MenuItem>
                                                <MenuItem value='Ignorar la preparación y trabajar improvisando.'>Ignorar la preparación y trabajar improvisando.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>10. Propón una actividad dinámica para enseñar un concepto complejo.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            name="Wais10"
                                            value={Wais10}
                                            onChange={handleInputChange}
                                            id="outlined-basic" 
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 19 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>11. ¿Qué harías para motivar a un estudiante desinteresado?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais11"
                                            value={Wais11}
                                            onChange={(e) => setWais11(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Hablar con él para entender sus intereses.'>Hablar con él para entender sus intereses.</MenuItem>
                                                <MenuItem value='Ignorar su actitud.'>Ignorar su actitud.</MenuItem>
                                                <MenuItem value='Regañarlo frente a la clase.'>Regañarlo frente a la clase.</MenuItem>
                                                <MenuItem value='Pedirle que busque motivación en casa.'>Pedirle que busque motivación en casa.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>12. ¿Cómo redactarías un correo breve a los padres de un estudiante sobre su progreso?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            value={Wais12}
                                            onChange={handleInputChange2}
                                            id="outlined-basic" 
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>13. ¿Cómo explicarías la importancia de tu materia?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            value={Wais13}
                                            onChange={handleInputChange3}
                                            id="outlined-basic" 
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>14. ¿Cómo corregirías a un estudiante sin hacerlo sentir mal?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais14"
                                            value={Wais14}
                                            onChange={(e) => setWais14(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Regañandolo en privado.'>Regañandolo en privado.</MenuItem>
                                                <MenuItem value='Ignorando el error.'>Ignorando el error.</MenuItem>
                                                <MenuItem value='Corrigiendo de manera constructiva y explicativa.'>Corrigiendo de manera constructiva y explicativa.</MenuItem>
                                                <MenuItem value='Pidiéndole que lo investigue por su cuenta.'>Pidiéndole que lo investigue por su cuenta.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>15. Describe tu introducción ideal para tu primera clase.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            label="Escribe aqui tu respuesta:" 
                                            value={Wais15}
                                            onChange={handleInputChange4}
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 20 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>16. Un estudiante argumenta que una técnica no es útil en la vida real. ¿Cómo responderías?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            value={Wais16}
                                            onChange={(e) => setWais16(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>17. Describe cómo manejarías una situación en la que un estudiante interrumpe constantemente.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais17"
                                            value={Wais17}
                                            onChange={(e) => setWais17(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorar las interrupciones.'>Ignorar las interrupciones.</MenuItem>
                                                <MenuItem value='Llamarle la atención frente a la clase.'>Llamarle la atención frente a la clase.</MenuItem>
                                                <MenuItem value='Hablar con él en privado para entender su comportamiento.'>Hablar con él en privado para entender su comportamiento.</MenuItem>
                                                <MenuItem value='Pedirle que abandone la clase.'>Pedirle que abandone la clase.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>18. Si no tienes acceso a tus materiales preparados, ¿cómo improvisarías una clase?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic"
                                            value={Wais18}
                                            onChange={(e) => setWais18(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>19. ¿Cómo manejarías un conflicto entre dos estudiantes?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Wais19"
                                            value={Wais19}
                                            onChange={(e) => setWais19(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorando el conflicto.'>Ignorando el conflicto.</MenuItem>
                                                <MenuItem value='Resolviéndolo en privado, escuchando ambas partes.'>Resolviéndolo en privado, escuchando ambas partes.</MenuItem>
                                                <MenuItem value='Sancionándolos a ambos.'>Sancionándolos a ambos.</MenuItem>
                                                <MenuItem value='Pidiendo la intervención de un superior.'>Pidiendo la intervención de un superior.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>20. Explica cómo evaluarías si los estudiantes comprendieron el tema al final de la sesión.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            value={Wais20}
                                            onChange={(e) => setWais20(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 21 && (
                        <form 
                        className='container-steps'
                        onSubmit={nextStep}>
                        <br />
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1}}>
                            <p className='ass'>21.</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ImgPlan1} className='img-test-wais'/>
                                    </Grid>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}} >
                                    <FormControl className='frame-resp'>                            
                                            <RadioGroup value={Wais21} onChange={handleRadioChange21}
                                                aria-labelledby="radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                            
                                            <FormControlLabel 
                                            value='a'
                                            control={<Radio />}
                                            label={
                                                <img
                                                className='center-resp-form'
                                                src={P1R1}
                                                alt='Respuesta 1'>
                                                </img>
                                            } />
                                            <FormControlLabel 
                                            value='b'
                                            control={<Radio 
                                                
                                                />}
                                                label={
                                                <img className='center-resp-form'
                                                src={P1R2}
                                                alt='Respuesta 2'>
                                                </img>} />

                                            <FormControlLabel 
                                            value='c'
                                                control={<Radio
                                                
                                                    />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P1R3}
                                                alt='Respuesta 3'>
                                                </img>} />
                                            <FormControlLabel 
                                            value='d'
                                            control={<Radio 
                                                
                                                />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P1R4}
                                                >
                                                </img>} />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    
                                </Grid>
                                
                                <br /><br />

                                <p className='ass'>22.</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ImgPlan2} className='img-test-wais'/>
                                    </Grid>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}} >
                                    <FormControl
                                            className='frame-resp'>                            
                                            <RadioGroup
                                                value={Wais22} onChange={handleRadioChange22}
                                                aria-labelledby="radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                            
                                            <FormControlLabel
                                            value='a'
                                            control={<Radio />}
                                            label={
                                                <img
                                                className='center-resp-form'
                                                src={P2R1}
                                                >
                                                </img>
                                            } />
                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='b'
                                                label={
                                                <img className='center-resp-form'
                                                src={P2R2}
                                                alt='Respuesta 2'>
                                                </img>} />

                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='c'
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P2R3}
                                                alt='Respuesta 3'>
                                                </img>} />
                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='d'
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P2R4}
                                                alt='Respuesta 4'>
                                                </img>} />
                                            </RadioGroup>
                                            </FormControl>
                                    </Grid>
                                    
                                    
                                </Grid>

                            </Box>
                            
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 22 && (
                        <form 
                        className='container-steps'
                        onSubmit={nextStep}>
                        <br />
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1}}>
                            <p className='ass'>23.</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ImgPlan3} className='img-test-wais'/>
                                    </Grid>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}} >
                                    <FormControl
                                            className='frame-resp'>                            
                                            <RadioGroup
                                                value={Wais23} onChange={handleRadioChange23}
                                                aria-labelledby="radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                            
                                            <FormControlLabel
                                            control={<Radio />}
                                            value='a'
                                            label={
                                                <img
                                                className='center-resp-form'
                                                src={P3R1}
                                                >
                                                </img>
                                            } />
                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='b'
                                                label={
                                                <img className='center-resp-form'
                                                src={P3R2}
                                                alt='Respuesta 2'>
                                                </img>} />

                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='c'
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P3R3}
                                                alt='Respuesta 3'>
                                                </img>} />
                                            <FormControlLabel 
                                                control={<Radio />}
                                                value='d'
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P3R4}
                                                alt='Respuesta 4'>
                                                </img>} />
                                            </RadioGroup>
                                            </FormControl>
                                    </Grid>
                                    
                                </Grid>
                                
                                <br /><br />

                                <p className='ass'>24.</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ImgPlan4} className='img-test-wais'/>
                                    </Grid>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}} >
                                    <FormControl
                                            className='frame-resp'>                            
                                            <RadioGroup
                                                value={Wais24} onChange={handleRadioChange24}
                                                aria-labelledby="radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                            
                                            <FormControlLabel
                                            control={<Radio />}
                                            value='a'
                                            label={
                                                <img
                                                className='center-resp-form'
                                                src={P4R1}
                                                alt='Respuesta 1'>
                                                </img>
                                            } />
                                            <FormControlLabel value="b" control={<Radio />}
                                                label={
                                                <img className='center-resp-form'
                                                src={P4R2}
                                                alt='Respuesta 2'>
                                                </img>} />

                                            <FormControlLabel value="c" control={<Radio />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P4R3}
                                                alt='Respuesta 3'>
                                                </img>} />
                                            <FormControlLabel value="d" control={<Radio />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P4R4}
                                                alt='Respuesta 4'>
                                                </img>} />
                                            </RadioGroup>
                                            </FormControl>
                                    </Grid>
                                    
                                    
                                </Grid>

                            </Box>
                            
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 23 && (
                        <form 
                        className='container-steps'
                        onSubmit={nextStep}>
                        <br />
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1}}>
                            <p className='ass'>25.</p>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ImgPlan5} />
                                    </Grid>
                                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}} >
                                    <FormControl
                                            className='frame-resp'>                            
                                            <RadioGroup
                                                value={Wais25} onChange={handleRadioChange25}
                                                aria-labelledby="radio-buttons-group-label"
                                                name="radio-buttons-group"
                                            >
                                            
                                            <FormControlLabel
                                            value="a" control={<Radio />}
                                            label={
                                                <img
                                                className='center-resp-form'
                                                src={P5R1}
                                                alt='Respuesta 1'>
                                                </img>
                                            } />
                                            <FormControlLabel value="b" control={<Radio />}
                                                label={
                                                <img className='center-resp-form'
                                                src={P5R2}
                                                alt='Respuesta 2'>
                                                </img>} />

                                            <FormControlLabel value="c" control={<Radio />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P5R3}
                                                alt='Respuesta 3'>
                                                </img>} />
                                            <FormControlLabel value="d" control={<Radio />}
                                                label={
                                                <img
                                                className='center-resp-form'
                                                src={P5R4}
                                                alt='Respuesta 4'>
                                                </img>} />
                                            </RadioGroup>
                                            </FormControl>
                                    </Grid>
                                    
                                </Grid>

                            </Box>
                            
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Finalizar</button>
                        </div>
                    </form>
                    )}                  
                    {step === 24 && (
                        <form onSubmit={nextStep}>
                            <div className="instricciones-test-wais">
                                <br />
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Tu compromiso y dedicación en esta etapa son muy valiosos para nosotros. Ahora que has finalizado esta fase, estás listo(a) para pasar a las pruebas académicas, donde podrás demostrar tus conocimientos y habilidades en las áreas clave de nuestra academia.</p>
                                <br />
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Recuerda que estas pruebas son una oportunidad para destacar tus fortalezas y confirmar tu preparación para formar parte del equipo de asesores especializados de MQerKAcademy.</p>
                                <br />
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Te invitamos a mantener la misma actitud positiva y enfoque en esta próxima etapa. Si tienes dudas o necesitas alguna orientación, no dudes en preguntarnos.</p>
                                <br />
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>¡Mucho éxito!</p>
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>El equipo de MQerKAcademy</p>
                                <br />
                                <div className="control-btns-steps-one wais">
                                    <button type="submit" className="btn-next-step-wais">Siguiente</button>
                                </div>
                            </div>
                        </form>    
                    )}

                    {/* PRUEBA ACADEMICA */}

                    {step === 25 && (
                        <form onSubmit={nextStep}>
                            <div className="instricciones-test-wais">
                                <br />
                                <p className='texto-instrucciones-wais'>Instrucciones:</p>
                                <br />
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Esta prueba académica tiene como objetivo evaluar tus habilidades, conocimientos y estrategias como asesor educativo. Responde con sinceridad y claridad, demostrando tu capacidad para abordar situaciones académicas y personales de los estudiantes. Completa las preguntas dentro del tiempo establecido y entrega tus respuestas al finalizar.</p>
                                <br />
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>Tiempo estimado:</p>
                                <p className='indicaciones-wais' style={{textAlign: 'center'}}>Tienes un máximo de 45 minutos</p>
                                <p className='texto-instrucciones-wais' style={{textAlign: 'center'}}>¡Éxito!</p>
                                <br />
                                <div className="control-btns-steps-one pruebaacademica">
                                    <button type="submit" className="btn-next-step-pruebaacademica">Iniciar Prueba</button>
                                </div>
                            </div>
                        </form>    
                    )}
                    {step === 26 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>1. ¿Cuál es el primer paso al identificar el problema de un estudiante?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica1"
                                            value={Academica1}
                                            onChange={(e) => setAcademica1(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Proponer soluciones inmediatas'>Proponer soluciones inmediatas</MenuItem>
                                                <MenuItem value='Escuchar activamente al estudiante'>Escuchar activamente al estudiante</MenuItem>
                                                <MenuItem value='Informar a los padres sin consultar al estudiante'>Informar a los padres sin consultar al estudiante</MenuItem>
                                                <MenuItem value='Revisar el expediente académico'>Revisar el expediente académico</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>2. ¿Qué estrategia usarías para motivar a un estudiante desinteresado?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            value={Academica2}
                                            onChange={(e) => setAcademica2(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>3. Si un estudiante tiene dificultades en matemáticas, ¿cuál sería tu acción inmediata?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica3"
                                            value={Academica3}
                                            onChange={(e) => setAcademica3(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Regañarlo por su bajo rendimiento'>Regañarlo por su bajo rendimiento</MenuItem>
                                                <MenuItem value='Proporcionarle recursos adicionales, como ejercicios prácticos'>Proporcionarle recursos adicionales, como ejercicios prácticos</MenuItem>
                                                <MenuItem value='Cambiar su enfoque hacia otra materia'>Cambiar su enfoque hacia otra materia</MenuItem>
                                                <MenuItem value='Decirle que es cuestión de práctica'>Decirle que es cuestión de práctica</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>4. Define "escucha activa" en tus propias palabras.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica4"
                                            value={Academica4}
                                            onChange={(e) => setAcademica4(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>5. ¿Qué harías si un estudiante no muestra interés en mejorar?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica5"
                                            value={Academica5}
                                            onChange={(e) => setAcademica5(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorarlo y centrarte en otros estudiantes'>Ignorarlo y centrarte en otros estudiantes</MenuItem>
                                                <MenuItem value='Investigar las causas subyacentes y buscar soluciones con él'>Investigar las causas subyacentes y buscar soluciones con él</MenuItem>
                                                <MenuItem value='Aplicar castigos para que se motive'>Aplicar castigos para que se motive</MenuItem>
                                                <MenuItem value='Dejarlo a cargo de otro asesor'>Dejarlo a cargo de otro asesor</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps-one testing">
                            <button type="submit" className="btn-next-step-testing">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 27 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>6. ¿Cómo manejarías un conflicto entre dos estudiantes?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            value={Academica6}
                                            onChange={(e) => setAcademica6(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>7. Completa la frase: "Un buen asesor debe ser ______."</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica7"
                                            value={Academica7}
                                            onChange={(e) => setAcademica7(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Autoritario'>Autoritario</MenuItem>
                                                <MenuItem value='Empático'>Empático</MenuItem>
                                                <MenuItem value='Distante'>Distante</MenuItem>
                                                <MenuItem value='Impersonal'>Impersonal</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>8. ¿Cuál es la mejor forma de evaluar el progreso de un estudiante?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica8"
                                            value={Academica8}
                                            onChange={(e) => setAcademica8(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Aplicar exámenes semanales'>Aplicar exámenes semanales</MenuItem>
                                                <MenuItem value='Observar su desempeño general y recopilar retroalimentación'>Observar su desempeño general y recopilar retroalimentación</MenuItem>
                                                <MenuItem value='Compararlo con otros estudiantes'>Compararlo con otros estudiantes</MenuItem>
                                                <MenuItem value='Presionarlo para obtener mejores resultados'>Presionarlo para obtener mejores resultados</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>9. Describe un caso en el que tu intervención como asesor sería crítica.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            value={Academica9}
                                            onChange={(e) => setAcademica9(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>10. ¿Qué harías si un estudiante confiesa tener problemas personales graves?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica10"
                                            value={Academica10}
                                            onChange={(e) => setAcademica10(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorar el problema y seguir con los temas académicos'>Ignorar el problema y seguir con los temas académicos</MenuItem>
                                                <MenuItem value='Escuchar con empatía y referirlo a un profesional si es necesario'>Escuchar con empatía y referirlo a un profesional si es necesario</MenuItem>
                                                <MenuItem value='Decirle que no puedes ayudarle'>Decirle que no puedes ayudarle</MenuItem>
                                                <MenuItem value='Hablar directamente con sus padres sin su consentimiento'>Hablar directamente con sus padres sin su consentimiento</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 28 && (
                        <form onSubmit={nextStep}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>11. ¿Qué herramientas tecnológicas usarías para asesorar?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica11"
                                            value={Academica11}
                                            onChange={(e) => setAcademica11(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>12. ¿Qué actitud es más importante al dar retroalimentación?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica12"
                                            value={Academica12}
                                            onChange={(e) => setAcademica12(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ser crítico para que el estudiante mejore'>Ser crítico para que el estudiante mejore</MenuItem>
                                                <MenuItem value='Ser constructivo y destacar áreas de mejora junto con logros'>Ser constructivo y destacar áreas de mejora junto con logros</MenuItem>
                                                <MenuItem value='Ser permisivo y evitar dar críticas'>Ser permisivo y evitar dar críticas</MenuItem>
                                                <MenuItem value='Mostrar indiferencia'>Mostrar indiferencia</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>13. ¿Cómo equilibrarías la disciplina y la motivación?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica13"
                                            value={Academica13}
                                            onChange={(e) => setAcademica13(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>14. ¿Qué harías si un estudiante interrumpe constantemente la clase?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica14"
                                            value={Academica14}
                                            onChange={(e) => setAcademica14(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Ignorarlo para no afectar a otros'>Ignorarlo para no afectar a otros</MenuItem>
                                                <MenuItem value='Hablar con él en privado para entender la causa del comportamiento'>Hablar con él en privado para entender la causa del comportamiento</MenuItem>
                                                <MenuItem value='Expulsarlo de la sesión'>Expulsarlo de la sesión</MenuItem>
                                                <MenuItem value='Regañarlo públicamente para que aprenda'>Regañarlo públicamente para que aprenda</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>15. ¿Qué importancia tiene la empatía en el rol de asesor?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica15"
                                            value={Academica15}
                                            onChange={(e) => setAcademica15(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Siguiente</button>
                        </div>
                    </form>
                    )}
                    {step === 29 && (
                        <form onSubmit={onSubmit}>
                        <br />
                        <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>16. ¿Cómo manejarías la presión de trabajar con varios estudiantes al mismo tiempo?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica16"
                                            value={Academica16}
                                            onChange={(e) => setAcademica16(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Priorizar casos según su urgencia y delegar tareas si es necesario'>Priorizar casos según su urgencia y delegar tareas si es necesario</MenuItem>
                                                <MenuItem value='Trabajar de forma rápida y superficial'>Trabajar de forma rápida y superficial</MenuItem>
                                                <MenuItem value='Ignorar a los menos problemáticos'>Ignorar a los menos problemáticos</MenuItem>
                                                <MenuItem value='Centrarse solo en un estudiante hasta resolver su caso'>Centrarse solo en un estudiante hasta resolver su caso</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>17. ¿Qué harías si un estudiante rechaza tu ayuda constantemente?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica17"
                                            value={Academica17}
                                            onChange={(e) => setAcademica17(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>18. ¿Cuál es el principal objetivo de un asesor educativo?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Selecciona una opcion</InputLabel>
                                            <Select
                                            name="Academica18"
                                            value={Academica18}
                                            onChange={(e) => setAcademica18(e.target.value)}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label='Selecciona una opcion'
                                            >
                                                <MenuItem value='Resolver problemas administrativos'>Resolver problemas administrativos</MenuItem>
                                                <MenuItem value='Ayudar a los estudiantes a alcanzar su máximo potencial académico y personal'>Ayudar a los estudiantes a alcanzar su máximo potencial académico y personal</MenuItem>
                                                <MenuItem value='Garantizar que todos obtengan las mejores calificaciones'>Garantizar que todos obtengan las mejores calificaciones</MenuItem>
                                                <MenuItem value='Cumplir con los requisitos de la institución'>Cumplir con los requisitos de la institución</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>19. Describe una técnica creativa que usarías para enseñar un tema complejo.</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic"
                                            name="Academica19"
                                            value={Academica19}
                                            onChange={(e) => setAcademica19(e.target.value)} 
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className='pregunta-prueba'>20. ¿Qué significa ser un líder para tus estudiantes?</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                            id="outlined-basic" 
                                            name="Academica20"
                                            value={Academica20}
                                            onChange={(e) => setAcademica20(e.target.value)}
                                            label="Escribe aqui tu respuesta:" 
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <br />
                        <div className="control-btns-steps welcome">
                            <button type="button" className="btn-next welcome-colab" onClick={prevStep}>Anterior</button>
                            <button type="submit" className="btn-next welcome-colab">Finalizar</button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prueba