import React from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import '../cards.css';
import Cards, { Card } from 'react-swipe-card';
import { Image } from 'semantic-ui-react';



class Product extends React.Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get(`/api/apps/${this.props.match.params.id}`)
    .then( response => this.setState({ apps: response.data }))
    .catch( res => console.log(res) )
  }
  
  render() {

    // let { app: {name, description, category, price, version, author, logo }} = this.state;
    
      return (
        { this.state.apps.map( app =>
          <div>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>{price}</h3>
            <h3>{category}</h3>
          </div>
        )}
      )
  }
}

export default Product;



state = { cats: [] }

  componentDidMount() {
    axios.get('/api/cats')
      .then( res => this.setState({ cats: res.data }) )
    }

    render() {
      return(
        <Cards className="cards-root">
          { this.state.cats.map( cat =>
              <Card key={cat.id}>
                <h2>{cat.name}</h2>
                <Image src={cat.avatar} />
                <h3>{cat.breed}</h3>
                <h3>{cat.registry}</h3>
              </Card>
            )
          }
        </Cards>
      );
    }