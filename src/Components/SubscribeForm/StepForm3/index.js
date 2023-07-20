import * as S from "./style";
import { useNavigate } from "react-router-dom"; // Importe useNavigate aqui
import { useEffect } from "react";
import { useForm } from "../../../Context/FormContext";

import Theme from "../Theme/index";

const StepForm3 = () => {
  const navigate = useNavigate(); // Use useNavigate em vez de useHistory
  const { name, email, step, setStep, subscribe } = useForm();

  useEffect(() => {
    if (name === "") {
      navigate("/stepform1"); // Use navigate em vez de history.push
    } else {
      setStep(3);
    }
  }, []);

  return (
    <Theme>
      <S.Section>
        <h1>Cadastro feito com sucesso!</h1>
        <small>Passo {step}/3</small>
        <S.Message>
          <p>
            Pronto {name}! Agora você receberá todas as notícias sobre{" "}
            <span>
              {(subscribe === 0 && `Marvel's Spider Man.`) ||
                (subscribe === 1 && `todos os jogos da Marvel.`) ||
                (subscribe === 2 && `a Playstation.`)}
            </span>{" "}
            no seguinte e-mail:
          </p>
          <h2>{email}</h2>
          <p>Obrigado por se inscrever!</p>
        </S.Message>
      </S.Section>
    </Theme>
  );
};

export default StepForm3;
