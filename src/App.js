import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }


  editContent = (editPoem) => {
    // take out the old poem from the array
    const poemIndex = this.state.poems.findIndex((poem) => poem.name == editPoem.name)

    const poemsWithoutUpdatedPoem = this.state.poems.filter((poem) => editPoem.name != poem.name)

    poemsWithoutUpdatedPoem.splice(poemIndex, 0, editPoem)
    // poems.indexOf(this.state.poems.slice(0, 1))

    // insert the new poem in the same index as the old poem
    
    this.setState({
      poems: poemsWithoutUpdatedPoem
    })
  }

  deletePoem = (deletePoem) => {

    const poemsNotGettingDeleted = this.state.poems.filter((poem) => deletePoem.name != poem.name)
    this.setState({
      poems: poemsNotGettingDeleted
    })
  }


  addPoem = (newPoem) => {
    this.setState({
      poems: [...this.state.poems, newPoem]
    })
  }
  
  render(){
    return (
      <div className="ui container">
        <PoemForm addPoem={this.addPoem}/>
        <PoemList poems={this.state.poems} editContent={this.editContent} deletePoem={this.deletePoem}/>
      </div>
    );
  }

}

export default App;
