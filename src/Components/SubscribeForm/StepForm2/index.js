import * as S from "./style";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importe useNavigate aqui
import { useForm } from "../../../Context/FormContext";

import Theme from "../Theme/index";
import SelectBox from "../../SelectBox";
import Button from "../../Button";

const StepForm2 = () => {
  const navigate = useNavigate(); // Use useNavigate em vez de useHistory
  const { name, step, setStep, subscribe, setSubscribe } = useForm();

  useEffect(() => {
    if (name === "") {
      navigate("/stepform1"); // Use navigate em vez de history.push
    } else {
      setStep(2);
    }
  }, []);

  function nextStep() {
    navigate("/stepform3"); // Use navigate em vez de history.push
  }

  return (
    <Theme>
      <S.Section>
        <h1>Ok {name}.</h1>
        <p>Selecione a opção que deseja receber:</p>
        <small>Passo {step}/3</small>

        <S.Value>
          <SelectBox
            id="0"
            text="Apenas Notícias sobre Marvel's Spider Man."
            onClick={() => setSubscribe(0)}
            selected={subscribe === 0}
          />

          <SelectBox
            id="1"
            text="Apenas Notícias sobre todos os jogos da Marvel."
            onClick={() => setSubscribe(1)}
            selected={subscribe === 1}
          />

          <SelectBox
            id="2"
            text="Todas as Notícias sobre a Playstation."
            onClick={() => setSubscribe(2)}
            selected={subscribe === 2}
          />

          <S.GroupButton>
            <Link className="btn-back" to="stepform1">
              Voltar
            </Link>
            <Button text="finalizar" onClick={nextStep} />
          </S.GroupButton>
        </S.Value>
      </S.Section>
    </Theme>
  );
};

export default StepForm2;
