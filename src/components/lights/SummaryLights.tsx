import { ReactElement } from "react";
import styled from "styled-components";
import { SlideSwitch } from "../common";
import { Light } from "../../utils/types";
import { Divider } from "@mui/material";
import SingleLightWithSwitch from "./SingleLightWithSwitch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { switchAllLights, switchLight } from "../../utils/apiCalls";
import { Dispatch } from "@reduxjs/toolkit";

interface Props {
  isSummary: boolean;
}

const SummaryLights = ({ isSummary }: Props): ReactElement => {
  const { lights, number, allLightsOn, fetchingLights, refreshingLights } =
    useSelector((state: RootState) => state.lights);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useDispatch();

  const switchAllLightsHandler = async (): Promise<boolean> => {
    if (!fetchingLights && !refreshingLights) {
      return false;
    }
    const success = allLightsOn
      ? await switchAllLights(dispatch, "off", currentUser?.id)
      : await switchAllLights(dispatch, "on", currentUser?.id);
    !success && console.log("Failed To Switch All Lights");
    return success;
  };

  const switchSingleLightsHandler = async (
    status: boolean,
    id: number,
    name: string
  ): Promise<boolean> => {
    if (!fetchingLights && !refreshingLights) {
      return false;
    }
    const success = status
      ? await switchLight(dispatch, id, "off", currentUser?.id)
      : await switchLight(dispatch, id, "on", currentUser?.id);
    !success && console.log(`Failed To Switch Lights ${name}(${id})`);
    return success;
  };
  return (
    <Card>
      <div className="header">
        <h5 onClick={() => isSummary && navigate("/lights")}>Lights</h5>
        <SlideSwitch
          checked={allLightsOn}
          changeHandler={switchAllLightsHandler}
          disabled={fetchingLights || refreshingLights}
        />
      </div>
      <Divider />
      <div className="lights_container">
        {(!isSummary ? lights : lights?.slice(0, 5))?.map(
          (i: Light, n: number) => {
            return (
              <SingleLightWithSwitch
                {...i}
                changeHandler={() =>
                  switchSingleLightsHandler(i.isOn, i.id, i.name)
                }
                disabled={fetchingLights || refreshingLights}
                key={n}
              />
            );
          }
        )}
        {isSummary && number > 5 && (
          <div
            className="open_lights"
            onClick={() => isSummary && navigate("/lights")}
          >
            See All
          </div>
        )}

        {number === 0 && (
          <div className="no_lights">No Lights Registered Yet</div>
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 12px 10px;
  /* border: 1px solid black; */
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.21);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    h5 {
      margin: 0;
      padding: 0;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        color: #1976d2;
      }
    }
  }

  .lights_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;

    .no_lights {
      margin: 15px 0px 0px 8px;
    }

    .open_lights {
      margin: 15px 0px 0px 8px;
      cursor: pointer;

      &:hover {
        color: #1976d2;
      }
    }
  }
`;

export default SummaryLights;
