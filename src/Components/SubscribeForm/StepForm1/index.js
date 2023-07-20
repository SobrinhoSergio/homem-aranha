import * as S from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Alteração feita aqui
import { useForm } from "../../../Context/FormContext";

import Theme from "../Theme/index";
import Button from "../../Button";

const StepForm1 = () => {
  const navigate = useNavigate(); // Alteração feita aqui
  const {
    name,
    setName,
    step,
    setStep,
    email,
    setEmail,
    modal,
    setModal
  } = useForm();

  useEffect(() => {
    setStep(1);
  }, []);

  function handleNameChange({ target }) {
    setName(target.value);
  }

  function handleEmailChange({ target }) {
    setEmail(target.value);
  }

  function nextStep() {
    if (name === "" || email === "") {
      setModal(true);
    } else {
      setModal(false);
      navigate("/stepform2"); // Alteração feita aqui
    }
  }

  return (
    <Theme>
      <S.Section>
        <h1>Vamos fazer o seu cadastro</h1>
        <p>Informe seu nome e e-mail:</p>
        <small>Passo {step}/3</small>

        <S.Value>
          <label>Nome:</label>
          <input
            type="text"
            autoFocus
            value={name}
            onChange={handleNameChange}
          />

          <label>E-mail:</label>
          <input type="email" value={email} onChange={handleEmailChange} />

          <Button text="avançar" onClick={nextStep} />
        </S.Value>
      </S.Section>
    </Theme>
  );
};

export default StepForm1;
