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
  status,
  device_name,
  changeHandler,
  device_id,
}: LightProps): ReactElement => {
  return (
    <Container id={`light_${device_id}`}>
      <div className="light_details">
        <Lightbulb color={status === "ON" ? "warning" : "disabled"} />
        <h6>{device_name}</h6>
      </div>
      <SlideSwitch
        checked={status === "ON"}
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
