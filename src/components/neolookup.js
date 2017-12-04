import React from 'react';

componentDidMount() {
    axios.get('https://api.cryptonator.com/api/full/neo-eur')
    .then(result => neo: result.data);
    .then console.log(result);
}

class NeoLookUp  extends Component {
    state = {  }
    render() {
        return (
            
        );
    }
}

export default NeoLookUp ;