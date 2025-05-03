import React from 'react';
import styled from 'styled-components';

const DebugContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
  max-width: 300px;
  overflow: auto;
  max-height: 300px;
  font-family: monospace;
  font-size: 12px;
`;

interface DebugProps {
  data: any;
}

const Debug: React.FC<DebugProps> = ({ data }) => {
  return (
    <DebugContainer>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </DebugContainer>
  );
};

export default Debug;