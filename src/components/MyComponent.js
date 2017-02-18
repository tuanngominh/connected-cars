import React, {Component} from 'react'
import imgSource from '../assets/milk-splash-2064088_640.jpg'
import Header1 from './Header1'
import Image from './Image'
import Link from './Link'
import Table from './Table'
import Button from './Button'

class MyComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className=".col-xs-12 .col-md-8 .col-md-off-set-2">
          <Header1>Title</Header1>

          <p>
            <Image src={imgSource} className="img-responsive" alt="Responsive image"/><br/>
            (Image from <Link href="https://pixabay.com/en/milk-splash-milk-cherry-spoon-2064088/" target="_blank">pixalbay</Link>)
          </p>
          <Table className="table table-striped"> 
            <thead>
              <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
              <tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr> 
              <tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr> 
            </tbody> 
          </Table>
          <p>
            <Button type="button" className="btn btn-primary">Submit</Button>
          </p>

        </div>
      </div>
    )
  }
}

export default MyComponent