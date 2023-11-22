import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled("div")`
  display: inline-block;
  animation: ${Spin} 1s linear infinite;
  font-size: 200px;
  margin: 100px;
  display: flex;
  justify-content: center;
`;

export default Spinner;
