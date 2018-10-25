import React from 'react';
import styled from 'styled-components'
import { Button, Input, ButtonText } from '../shared';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../actions/register';

const Container = styled.div`
    
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;

`;

const Header = styled.div`
	flexDirection: row;
    display: flex;
    margin-bottom: 2rem;
`;

const FormWrapper = styled.div`    
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

const HeaderTitle = styled.span`
	color: #320b86;
	font-size: 26px;
	font-weight: bold;
`;

class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            password: '',
            username: ''
        }

        // this.handleRegister = this.handleRegister.bind(this);
        // this.renderRegisterButtonChildren = this.renderRegisterButtonChildren.bind(this);
    }

    handleRegister() {
        // this.props.registerActions.signUp({
        //     username: this.state.username,
        //     name: this.state.name,
        //     password: this.state.password
        // });
    }

    // componentWillUpdate(nextProps) {
    //     if(nextProps.user.error && this.props.user.isRegistering) {
    //         Alert.alert(nextProps.user.error);
    //     }

    //     return true;
    // }

    renderRegisterButtonChildren() {
        // if(!this.props.user.isRegistering)
            return <ButtonText>Entrar</ButtonText>;
        // else
        //     return <ActivityIndicator size="small"/>
    }

    render() {
        return (
            <Container>
                <Header>                    
                    <HeaderTitle>Registre-se</HeaderTitle>
                </Header>
                <FormWrapper>
                    <Input 
                        placeholder={"Usuário"}
                        onChange={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <Input 
                        placeholder={"Nome"}
                        onChange={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                    <Input 
                        placeholder={"Senha"}
                        onChange={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Button text={"Registrar"}
                        onPress={this.handleRegister}
                        // disabled={this.props.user.isRegistering}
                    >
                        {this.renderRegisterButtonChildren()}                    
                    </Button>
                </FormWrapper>                                                   
                <Link to="/" style={{color: '#424242', textDecoration: "none"}}>Cancelar</Link>
            </Container>
        )
    }
}

// export default connect(
//     state => ({
//         user: state.user
//     }),
//     dispatch => ({
//         registerActions: bindActionCreators(registerActions, dispatch)
//     })
// )(Register);
export default Register;