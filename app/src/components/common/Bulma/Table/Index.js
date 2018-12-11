import React, { Component } from "react"


class Table extends Component {

    render() {
        return (
            <div className="App">

                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th><abbr title="Trail">Trail Name</abbr></th>
                            <th><abbr title="Difficulty">Difficulty</abbr></th>
                            <th><abbr title="Length">Length (miles)</abbr></th>
                            <th><abbr title="Location">Location </abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Walkers Pass</td>
                            <td>Expert</td>
                            <td>5</td>
                            <td>location</td>
                        </tr>
                        <tr>
                            <td>Horses Pass</td>
                            <td>Hard</td>
                            <td>8</td>
                            <td>location</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Table;