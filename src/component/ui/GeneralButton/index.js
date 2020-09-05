import React from "react";
import {
  ButtonPrimary,
  ButtonSecundary,
  ButtonWarning,
  Title,
  Ico,
  CircleStatus,
} from "./styled";

const GeneralButton = ({ title, type, ico, color, onClick, size }) => {
  switch (type) {
    case "secundary":
      return (
        <ButtonSecundary onClick={onClick} size={size}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonSecundary>
      );
    case "warning":
      return (
        <ButtonWarning onClick={onClick} size={size}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonWarning>
      );
    case "status":
      return (
        <ButtonSecundary onClick={onClick} size={size}>
          <CircleStatus color={color}> </CircleStatus>
          <Title>{title}</Title>
        </ButtonSecundary>
      );
    default:
      return (
        <ButtonPrimary onClick={onClick} size={size}>
          {ico ? <Ico src={ico} alt={`${title} ico`} /> : null}
          <Title>{title}</Title>
        </ButtonPrimary>
      );
  }
};

export default GeneralButton;
