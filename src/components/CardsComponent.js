import React,{Component} from 'react';
import {MediaBox,Card} from 'react-materialize';

class CardsComponent extends Component {
  render() {
    return(
      <>
        <Card
          header={<MediaBox options={{
                  inDuration: 275,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200
                }}
                caption={this.props.captions}
                >
                  <img alt='barang' width='100' height='250' src={this.props.gambar}/>
              </MediaBox>}
          >
          {this.props.namaBarang} <span style={{backgroundColor:'red'}}>{this.props.harga}</span>
        </Card>
      </>
    );
  }
}
export default CardsComponent;
