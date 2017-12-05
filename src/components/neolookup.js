import React, { Component } from 'react';
import axios from 'axios';
import logo from '../images/neo_logo.svg'


class NeoLookUp  extends Component {

    constructor(){
        super();

        this.state = {
            value: '',
            amount: 0,
            cryptos: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCryptos = this.getCryptos.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        //console.log('====================================');
        //console.log("value change", event.target.value);
        //console.log('====================================');
    }
    
      handleSubmit(event) {
          event.preventDefault();
          var rounded = Math.round(this.state.cryptos * this.state.value);
          this.setState({amount: rounded});   
    } 

    getCryptos() {
        axios.get('https://api.cryptonator.com/api/full/neo-eur')
        .then((response) => {
            this.setState({cryptos: response.data.ticker.price});
            //console.log('====================================');
            console.log("current crypto price:", this.state.cryptos);
            //console.log('====================================');
        })
        .catch(function(error){
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        });
    }

    componentDidMount() {
        this.getCryptos();
        setInterval(this.getCryptos, 60000); // Reload every 1 minute to Update Crypto Currencies.
    }
        
 
    
    render() {
        return (
            <div className="NeoLookUpCard">
                <form onSubmit={this.handleSubmit}>
                    <div className="card mx-auto" style={{"width" : "25rem"}}>
                        <img className="card-img-top" src={logo} alt="NEO Logo"></img>
                        <div className="card-block">
                            <br />
                            <h4 className="card-title">Neo look up App</h4>
                            <p className="card-text">A simple App written in node.js and React to look up your NEO Coins and amount of money you get for your NEOs.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Current NEO Price is <b>{this.state.cryptos}</b> €.</li>
                        <li className="list-group-item">
                            <span className="input-group-addon" id="btnGroupAddon2">NEOs</span>
                            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Input group example" aria-describedby="btnGroupAddon2"/>
                        </li>
                        <li className="list-group-item"><button className="btn btn-outline-primary" type="submit" value="Submit">Submit</button></li>
                        <li className="list-group-item">
                         <div className="alert alert-success" role="alert">
                            Your NEO coins are worth <strong>{this.state.amount} €.</strong> 
                        </div>
                        </li>
                        </ul>
                        <div className="card-block">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NeoLookUp ;