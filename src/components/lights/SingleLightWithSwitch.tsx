import styled from "styled-components";
import { Light } from "../../utils/types";
import { SlideSwitch } from "../common";
import { ReactElement } from "react";
import { Lightbulb } from "@mui/icons-material";

interface LightProps extends Light {
  disabled: boolean;
  changeHandler: () => Promise<boolean>;
}

const SingleLightWithSwitch = ({
  disabled,
  isOn,
  name,
  changeHandler,
  id,
}: LightProps): ReactElement => {
  return (
    <Container id={`light_${id}`}>
      <div className="light_details">
        <Lightbulb color={isOn ? "warning" : "disabled"} />
        <h6>{name}</h6>
      </div>
      <SlideSwitch
        checked={isOn}
        changeHandler={changeHandler}
        disabled={disabled}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .light_details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    h6 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
    }

    svg {
      cursor: pointer;
    }
  }
`;

export default SingleLightWithSwitch;
