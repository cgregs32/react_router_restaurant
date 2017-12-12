import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Segment, Header, List } from 'semantic-ui-react';
import axios from 'axios';

class Dish extends React.Component {
  state = { dish: {} };
  componentDidMount() {
    const dishId = this.props.match.params.id;
    axios.get(`/api/dishes/${dishId}`)
      .then( res => {
        this.setState({ dish: res.data })
      }).catch( err => {
        console.log(err);
      });
  }

  displayDish = () => {
    const { id, name, ingredients, price } = this.state.dish;
    return (
      <Segment basic>
        <Header as='h1'>{name}</Header>
        <List>
          <List.Item>Price: ${price}</List.Item>
          <List.Item>Special Ingredient: {ingredients}</List.Item>
        </List>
          <Button as={Link} to={'/menu'}>Back to Menu</Button>
      </Segment>
    );
  }

  render () {
    return (
      <Segment basic>
        <Header as='h1'>Dish</Header>
        {this.displayDish()}
      </Segment>
    );
  }
}

export default Dish;

// displayProduct = () => {
//   const { id, name, price, description, department } = this.state.product;
//
//   return(
//     <Segment basic>
//       <Header as='h1'>{name}</Header>
//       <List>
//         <List.Item>Description: {description}</List.Item>
//         <List.Item>Price: {price}</List.Item>
//         <List.Item>Department: {department}</List.Item>
//       </List>
//       <Button as={Link} to={`/products/${id}/edit`} color='orange'>Edit</Button>
//       <Button color='red' onClick={this.deleteProduct}>Delete</Button>
//       <Button as={Link} to={'/dashboard'}>All Products</Button>
//     </Segment>
//   );
// }
