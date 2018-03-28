import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import {Table,Button} from 'react-bootstrap';

class TableGrid extends Component {


    TableList(number){
	var lists=[];
	for(var cont = 0;cont <= number; cont++){
	    lists.push(
		<tr>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		  <td><Button bsSize="large" active>Button</Button></td>
		</tr>
	    )
	}
	return lists;
    }
    render() {
	return (
	    <Table striped bordered condensed hover>
	      <thead>
		<tr>
		  <th>Domingo</th>
		  <th>Segunda</th>
		  <th>Terça</th>
		  <th>Quarta</th>
		  <th>Quinta</th>
		  <th>Sexta</th>
		  <th>Sábado</th>
		</tr>
	      </thead>
	      <tbody>
		{this.TableList(2)}

	      </tbody>
	    </Table>

	);
    }
}

export default class ScheduleTable extends Component {

    resolveButton(line,column){
	
    };

    render() {
	return (
	    <div>
	      <NavBar></NavBar>
	      <h1 style={{marginTop:"70px"}}>Quadro de Horários</h1>
	      <TableGrid></TableGrid>
	    </div>
	);
    }
}
