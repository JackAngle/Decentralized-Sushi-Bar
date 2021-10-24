import React from 'react';
import {
    Container, 
    Row, 
    Col,
    ListGroup,
    Table,
    Image
    } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import SushiTableCell from './SushiTableCell';


const cardBox = <ListGroup horizontal>
  <ListGroup.Item>This</ListGroup.Item>
  <ListGroup.Item>ListGroup</ListGroup.Item>
  <ListGroup.Item>renders</ListGroup.Item>
  <ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>


const sushiTable = 
<div  style={{backgroundColor: "#000000"}}>
  <div className="item-grid">
    <Table  bordered hover className="text-light text-center" style={{backgroundColor: "#000099"}}>
    {/* <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Username</th>
        <th>Username</th>
      </tr>
    </thead> */}
    <tbody>
      <tr>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="2"/></td>
        <td>
        <SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="3"/>
        </td>
      </tr>
      <tr>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="2"/></td>
        <td>
        <SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="3"/>
        </td>       
      </tr>
      <tr>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="2"/></td>
        <td>
        <SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="3"/>
        </td>   
      </tr>
      <tr>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="2"/></td>
        <td>
        <SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="3"/>
        </td>   
      </tr>
      <tr>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="2"/></td>
        <td>
        <SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="3"/>
        </td>   
      </tr>
      <tr>
        <td><SushiTableCell
            img="https://lh3.googleusercontent.com/0dqXHCVkacTtgfBwWlVP55_IN0h7bj2rk12BhergGjbSCxgsMGm2nu1OcWQ8mwrEzxcrqlrratOZBq_PWifFec3VzzE3xRIW-tw7cw=s0"
            description="4"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="5"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="6"/></td>
        
      </tr>
      <tr className="">
        
        <td className=""><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="7"/></td>
        <td><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="1"/></td>
        <td className=""><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="8"/></td>
        <td className=""><SushiTableCell
            img="https://images.unsplash.com/photo-1570780775848-bc1897788ce0"
            description="9"/></td>
      </tr>
      
    </tbody>
    </Table>
    </div>
</div>


const SushiGrid = () => {
    return <Container 
    className="text-light sushi-table p-0" 
    style={{marginLeft: "10.5px"}} 
    fluid>{sushiTable}</Container>
}


export default SushiGrid;