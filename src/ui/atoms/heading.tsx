import styled from 'styled-components';

interface Props {
  uppercase?: boolean;
  color?: string;
  textAlign?: string;
}

export const H1 = styled.h1<Props>`
  font-size: 36px;
  font-weight: bold;
  line-height: normal;
  margin: 15px 0;
  text-align: ${(props) => props.textAlign || 'left'};
  color: ${({ color }) => color};
`;

export const H2 = styled.h2<Props>`
  font-size: 30px;
  font-weight: bold;
  line-height: normal;
  margin: 12px 0;
  text-align: ${(props) => props.textAlign || 'left'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  color: ${({ color }) => color};
`;

export const H3 = styled.h3<Props>`
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  margin: 10px 0;
  text-align: ${(props) => props.textAlign || 'left'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  color: ${({ color }) => color};
`;

export const H4 = styled.h4<Props>`
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  margin: 10px 0;
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  text-align: ${(props) => props.textAlign || 'left'};
  color: ${({ color }) => color};
`;

export const H5 = styled.h5<Props>`
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  margin: 8px 0;
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  color: ${({ color }) => color};
`;

export const H6 = styled.h6<Props>`
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  margin: 5px 0;
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  color: ${({ color }) => color};
`;
