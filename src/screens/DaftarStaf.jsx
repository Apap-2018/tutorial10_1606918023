import React from 'react';
import { DaftarStafRow } from '../components/DaftarStafRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarStaf extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaf: []
		}

		Appointment.getAllStaf().then(response => {
			this.setState({
				loading: false,
				listStaf: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis Staf']}>
                    <DaftarStafRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
	}
}