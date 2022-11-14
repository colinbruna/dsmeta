import NotificationButton from '../NotificationButton'
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#1</td>
                            <td className="show576">11/11/22</td>
                            <td>Bruna</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 500.00</td>
                            <td>
                                <div className="dsmeta-red-bottom-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#2</td>
                            <td className="show576">11/11/22</td>
                            <td>Duda</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 1500.00</td>
                            <td>
                                <div className="dsmeta-red-bottom-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#3</td>
                            <td className="show576">11/11/22</td>
                            <td>Davi</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 2500.00</td>
                            <td>
                                <div className="dsmeta-red-bottom-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard