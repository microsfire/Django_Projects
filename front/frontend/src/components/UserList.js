import React ,{Component} from "react";
import List from "./List";


class Userlist extends Component {
    state = {list: [], loading: false}

    async componentDidMount() {
        const config = {
            headers: {'Content-Type':'application/json'}
        }
        config.headers['Authorization'] = 'Token 92382be924bc368f91212a85f4a0064fe4cffd0a'

        let url = 'http://localhost:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({list: data, loading: false});
    }

    render() {
        const listApi = this.state.list;
        return (
            <div>
                {listApi.map(list => <List key={ list.id} listName={list.name}/>)}
            </div>
        )
    }
}
export default Userlist;