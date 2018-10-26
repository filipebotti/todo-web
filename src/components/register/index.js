import React from 'react';
import styled from 'styled-components'
import { Button, Input, ButtonText, Colors } from '../shared';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../actions/register';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

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

        this.handleRegister = this.handleRegister.bind(this);
        this.renderRegisterButtonChildren = this.renderRegisterButtonChildren.bind(this);
    }

    handleRegister() {
        this.props.registerActions.signUp({
            user: {
                username: this.state.username,
                name: this.state.name,
                password: this.state.password
            }
        });
    }

    componentWillUpdate(nextProps) {
        if(nextProps.user.error && this.props.user.isRegistering) {
            alert(nextProps.user.error);
            return false;
        }

        if(this.props.user.isRegistering && nextProps.user.isAuthenticated) {
            this.props.history.push("/");
            return false;
        }

        return true;
    }

    renderRegisterButtonChildren() {
        if(!this.props.user.isRegistering)
            return <ButtonText>Entrar</ButtonText>;
        else
            return <Dots size={12} color={Colors.LIGHT_PURPLE}/>;
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
                        onChange={({target}) => this.setState({username: target.value})}
                        value={this.state.username}
                    />
                    <Input 
                        placeholder={"Nome"}
                        onChange={({target}) => this.setState({name: target.value})}
                        value={this.state.name}
                    />
                    <Input 
                        placeholder={"Senha"}
                        onChange={({target}) => this.setState({password: target.value})}
                        value={this.state.password}
                        type="password"
                    />
                    <Button text={"Registrar"}
                        onPress={this.handleRegister}
                        disabled={this.props.user.isRegistering}
                    >
                        {this.renderRegisterButtonChildren()}                    
                    </Button>
                </FormWrapper>                                                   
                <Link to="/" style={{color: '#424242', textDecoration: "none"}}>Cancelar</Link>
            </Container>
        )
    }
}

export default withRouter(connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        registerActions: bindActionCreators(registerActions, dispatch)
    })
)(Register));