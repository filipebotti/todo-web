import React from 'react';
import styled from 'styled-components';
import { Colors } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../../actions/app';

import TaskList from '../task-list';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

const Header = styled.div`
    height: 70px;
    background-color: ${Colors.PURPLE};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 32px;
    padding-right: 10px;
    display: flex;
`

const Text = styled.span`
    color: white;
    font-size: 32px;
    font-weight: bold;    
    text-align: center;
`;

const SignOutButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;    
`;

class Main extends React.Component {

    constructor() {
        super();

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        this.props.appActions.signOut();
    }

    render() {
        if (!this.props.user.isAuthenticated)
            return <Redirect
                        to="/auth"
                    />

        return (
            <Container>
                <Header>   
                    <div></div>                 
                    <Text>Tasks</Text>
                    <SignOutButton onClick={this.handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" style={{color: 'white', fontSize: "22px"}}/>
                    </SignOutButton>
                </Header>
                <TaskList/>
            </Container>
        )
    }
}

export default withRouter(connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        appActions: bindActionCreators(appActions, dispatch)
    })
)(Main));