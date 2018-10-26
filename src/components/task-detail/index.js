import React from 'react';
import styled from 'styled-components'
import { Button, Input, ButtonText, Colors } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect, withRouter, Link } from 'react-router-dom';
import * as taskActions from '../../actions/task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class TaskDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.location.state.item.description,
        }

        this.handleSave = this.handleSave.bind(this);
        this.renderButtonChildren = this.renderButtonChildren.bind(this);
    }

    handleSave() {        

        if(!this.state.description)
            alert("Descrição é obrigatória");
        else {
            this.props.location.state.item.description = this.state.description;
            this.props.taskActions.updateTask(this.props.location.state.item);
        }
    }

    componentWillUpdate(nextProps) {
        if(this.props.task.isFetching && !nextProps.isFetching) {
            if(nextProps.task.error) {
                alert(nextProps.task.error);
            }
            else {
                this.props.history.goBack();
            }

            return false;
        }

        return true;
    }

    renderButtonChildren() {
        if(!this.props.task.isFetching)
            return <ButtonText>Salvar</ButtonText>;
        else
            return <Dots size={12} color={Colors.LIGHT_PURPLE}/>
    }

    render() {

        if (!this.props.user.isAuthenticated)
            return <Redirect
                        to={{
                            pathname: "/auth",
                        }}
                    />

        return (
            <Container>
                <Header>
                    <FontAwesomeIcon icon="check-square" style={{fontSize: "26px", color: '#320b86'}}/>
                    <HeaderTitle>Detalhes</HeaderTitle>
                </Header>
                <FormWrapper>                    
                    <Input 
                        placeholder={"Descrição"}
                        onChange={({target}) => this.setState({description: target.value})}
                        value={this.state.description}
                    />
                    <Button 
                        onPress={this.handleSave}
                        disabled={this.props.task.isFetching}
                    >
                        {this.renderButtonChildren()}
                    </Button>
                </FormWrapper>
                <Link to="/" style={{color: '#424242', textDecoration: "none"}}>Cancelar</Link>
            </Container>
        );
    }
}

export default withRouter(connect(
    state => ({
        task: state.task,
        user: state.user
    }),
    dispatch => ({
        taskActions: bindActionCreators(taskActions, dispatch)
    })
)(TaskDetail));