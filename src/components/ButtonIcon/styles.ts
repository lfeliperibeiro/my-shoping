import styled from 'styled-components/native';

type Props = {
  color: 'success' | 'alert';
  size: 'small' | 'large';
}

export const Container = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color:  ${({ color, theme }) => color === 'success' ? theme.COLORS.GREEN : theme.COLORS.RED};
  width: ${({ size }) => size === 'small' ? 35 : 50}px;
  height: ${({ size }) => size === 'small' ? 35 : 50}px;
`;