class PokemonList extends React.Component{

    constructor(){
        super();
        this.array = [];
        this.state= {
            data: [],
            originalData: [],
            pokemon: []
        }
    }


  async componentDidMount(){
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0/`);
      const d = await r.json();
      this.setState({data: d.results, originalData: d.results})
      console.log(this.state.data);
      const r2 = await Promise.all(this.state.data.map((i)=> fetch(i.url).then((r2)=> {
          r2.json().then((d2)=> this.array.push(d2));
          this.setState({pokemon: this.array})

          console.log(this.state.pokemon)

        })));
    }

    filter(e){
        const item= e.target.value.toLowerCase();
        const filteredPokemon = this.state.originalData.filter(i=>i.name.toLowerCase().includes(item));
        this.setState({data:filteredPokemon})
        console.log(item)
    }


    render(){

        return(
            <React.Fragment>
                <div className='main'>
                <input className='search-bar' onChange={(e)=> this.filter(e)} type="text" placeholder='Type a Pokemon name'/>
                <div className='cards-container'>
                {this.state.pokemon.map(i=> <CartaPokemon datos={i}></CartaPokemon>)}
                </div>
                </div>
            </React.Fragment>
        )

    }
}