import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #4f4f4f;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 10px 10px 10px 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  margin-top: 13px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;
