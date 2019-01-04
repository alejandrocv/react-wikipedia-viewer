import React, { Component } from 'react';
import Form from './components/Form';
import Item from './components/Item';
import Header from './components/Header';

class App extends Component {
  state = {
    consulta: '',
    titulos: '',
    descripciones: '',
    enlaces: ''

  }

  getContent = async (e) => {
    const queryText = e.target.elements.queryText.value;
    e.preventDefault();

    const wiki_url = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${queryText}&format=json&limit=20&origin=*`);

    if (this.state.consulta !== queryText) {
      const data = await wiki_url.json();
      this.setState({
        consulta: data[0],
        titulos: data[1],
        descripciones: data[2],
        enlaces: data[3]
      });
      console.log(data)
    }


  }


  render() {
    let { titulos, descripciones, enlaces } = this.state;
    return (
      <div>
        <Header title="React Wikipedia Viewer" />
        <Form getContent={this.getContent} />
        <div className="row" style={{ margin: "0 auto" }}>
          {                        
           (titulos) ?
              titulos.map((item, index) =>
                <Item
                  key={item}
                  titulo={item}
                  descripcion={(descripciones[index].length < 125) ?
                    descripciones[index] : descripciones[index].slice(0, 125).concat(' ', ". . .")}
                  enlace={enlaces[index]}
                />

              ) : ""
          }
        </div>
      </div>


    );
  }
}

export default App;