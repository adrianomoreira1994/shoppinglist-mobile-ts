import { RectButton } from 'react-native-gesture-handler';
import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: #435C59;
`;

export const Header = styled.View`
    height: 300;
    align-items: center;
    justify-content: center;
    background-color: #3C5350;
`;

export const LogoLabel = styled.Text`
    font-size: 40;
    font-family: AllanBold;
    color: #FFCEA3;
    margin-top: 20;
`;
export const Form = styled.View`
    flex: 1;
    padding: 60px;
`;
export const FormGroup = styled.View`
    margin-bottom: 25px;
    flex-direction: row;
`;

export const ContainerIcon = styled.View`
    border-bottom-color: #96ADAB;
    border-bottom-width: 1px;
    padding: 15px;
`;

export const ContainerIconActiveEmail = styled.View`
    border-bottom-color: #FFCEA3;
    border-bottom-width: 1px;
    padding: 15px;
`;

export const ContainerIconActivePassword = styled.View`
    border-bottom-color: #FFCEA3;
    border-bottom-width: 1px;
    padding: 15px;
`;

export const ContainerInput = styled.View`
    flex: 1;
    border-left-color: #96ADAB;
    border-left-width: 1px;
    border-bottom-color: #96ADAB;
    border-bottom-width: 1px;
    padding: 0 20px;
    height: 50px;
`;

export const ContainerInputActiveEmail = styled.View`
    flex: 1;
    border-bottom-color: #FFCEA3;
    border-left-color: #96ADAB;
    border-left-width: 1px;
    border-bottom-width: 1px;
    padding: 0 20px;
    height: 50px;
`;

export const ContainerInputActivePassword = styled.View`
    flex: 1;
    border-bottom-color: #FFCEA3;
    border-left-color: #96ADAB;
    border-left-width: 1px;
    border-bottom-width: 1px;
    padding: 0 20px;
    height: 50px;
`;

export const Input = styled.TextInput`
    flex: 1;
    color: #FFF;
    font-size: 16px;
    height: 60px;
    font-family: "OpenSansRegular";
`;

export const Label = styled.Text`
    color: #96ADAB;
    font-size: 14px;
    font-family: "OpenSansSemiBold";
`;

export const ContainerButton = styled.VIew`
    margin-top: 20px;
`;

export const Button = styled(RectButton)`
    background-color: "#FFCEA3";
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const LabelButton = styled.Text`
    color: #435C59;
    font-size: 16px;
    font-family: "OpenSansBold";
`;

export const ContainerNotMember = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const NotMember = styled.View`
    margin-right: 5px;
    color: #96ADAB;
    align-items: center;
    font-family: "OpenSansRegular";
`;

export const NotMemberButton = styled.TouchableOpacity``;

export const NotMemberButtonLabel = styled.View`
    color: #FFCEA3;
    font-family: "OpenSansRegular";
`;