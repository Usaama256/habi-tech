import { Divider } from "@mui/material";
import { ReactElement } from "react";
import styled from "styled-components";

const SummaryGadgets = (): ReactElement => {
  return (
    <Card>
      <div className="header">
        <h5 onClick={() => {}}>Gadgets</h5>
      </div>
      <Divider />
      <div className="summaries_container"></div>
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

  .summaries_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  }
`;

export default SummaryGadgets;
