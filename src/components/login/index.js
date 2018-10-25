import React from 'react';
import styled from 'styled-components'
import { Button, Input, ButtonText } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as authActions from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { USER } from '../../services/config';

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
`;

const FormWrapper = styled.div`
    height: 30%;
    width: 15%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
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
            loading: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.renderLoginButtonChildren = this.renderLoginButtonChildren.bind(this);
	}

    componentDidMount() {
        // let credentials = USER.getStoredCredentials()
        // .then(credentials => {
            
        //     if (credentials) {
        //         this.props.authActions.auth(credentials);
                
        //     } else 
        //         this.setState({ loading: false });
        // })
        // .catch(() => this.setState({ loading: false }));
    }

    // componentWillUpdate(nextProps) {
    
    //     if(nextProps.auth.error) {
    //         if(this.state.loading) {
    //             this.setState({ loading: false })
    //         }

    //         if(this.props.auth.isAuthenticating && !this.state.loading)
    //             alert('Usuário ou senha incorreto.');
    //     }

    //     return true;
    // }

    handleLogin() {        
        // this.props.authActions.auth(this.state);
    }

    renderLoginButtonChildren() {
        if(!false)
            return <ButtonText>Entrar</ButtonText>;
        else
            return <span>Loading..</span>
    }

    render() {

        if(this.state.loading)
            return (
                <Container>
                    <span>loading...</span>
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
                            // disabled={this.props.auth.isAuthenticating}
                        >
                            {this.renderLoginButtonChildren()}
                        </Button>
                    </FormWrapper>
                    <div>
                        <a href="#" style={{color: '#424242', textDecoration: "none"}}>Cadastre-se</a>                        
                    </div>
                </Container>
            );
    }
}

// export default connect(
//     state => ({
//         auth: state.auth
//     }),
//     dispatch => ({
//         authActions: bindActionCreators(authActions, dispatch)
//     })
// )(Login);
export default Login;