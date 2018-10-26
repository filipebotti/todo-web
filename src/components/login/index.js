import React from 'react';
import styled from 'styled-components'
import { Button, Input, ButtonText, Colors } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import * as authActions from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { USER } from '../../services/config';
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

class Login extends React.Component {

	constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loading: true
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.renderLoginButtonChildren = this.renderLoginButtonChildren.bind(this);
	}

    componentDidMount() {
        let credentials = USER.getStoredCredentials();

        if (credentials)
            this.props.authActions.auth(credentials);
        else 
            this.setState({ loading: false });
    }

    componentWillUpdate(nextProps) {
    
        if(nextProps.auth.error) {
            if(this.state.loading) {
                this.setState({ loading: false })
            }

            if(this.props.auth.isAuthenticating && !this.state.loading)
                alert('Usuário ou senha incorreto.');
        }

        if(this.props.auth.isAuthenticating && nextProps.user.isAuthenticated) {
            this.props.history.push("/");
            return false;
        }

        return true;
    }

    handleLogin() {        
        this.props.authActions.auth(this.state);
    }

    renderLoginButtonChildren() {
        if(!this.props.auth.isAuthenticating)
            return <ButtonText>Entrar</ButtonText>;
        else
            return <Dots size={12} color={Colors.LIGHT_PURPLE}/>;
    }

    render() {

        if(this.state.loading)
            return (
                <Container>
                    <Dots size={12} color={Colors.DARK_GREY}/>
                </Container>
            );
        else
            return (
                <Container onSubmit={this.handleLogin}>     
                    <Header>
                        <FontAwesomeIcon icon="check-square" style={{fontSize: 26, color: '#320b86'}}/>
                        <HeaderTitle>Tasker</HeaderTitle>
                    </Header>
                    
                    <FormWrapper>
                        <Input 
                            placeholder={"Usuário"}
                            onChange={({target}) => this.setState({username: target.value })}
                            value={this.state.username}
                        />
                        <Input 
                            placeholder={"Senha"}
                            onChange={({target}) => this.setState({password: target.value })}
                            value={this.state.password}
                        />
                        <Button 
                            onPress={this.handleLogin}
                            disabled={this.props.auth.isAuthenticating}
                        >
                            {this.renderLoginButtonChildren()}
                        </Button>
                    </FormWrapper>                    
                    <Link to="/register" style={{color: '#424242', textDecoration: "none"}}>Cadastre-se</Link>
                    
                </Container>
            );
    }
}

export default withRouter(connect(
    state => ({
        auth: state.auth,
        user: state.user
    }),
    dispatch => ({
        authActions: bindActionCreators(authActions, dispatch)
    })
)(Login));