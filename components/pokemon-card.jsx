class CartaPokemon extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            pokemon: {
                name:'',
                sprites: {},
                types:[
                   {
                       type: {

                       }
                   }
                ]
                

            }
        }

    }


    // async componentDidMount() {
    //     console.log('Terminando de montar el componente');
    //     const r =  await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.datos.name}`);
    //     const pokemon = await r.json();
    //     this.setState({ pokemon });
    // }

    render(){
        return(
            <React.Fragment>
            <div className='card'>
                <div className='card__img-container'>
                    {/* <img className='card__img' src={this.props.data.sprites.front_default} alt="" /> */}
                </div>
                <div className='card__info'>
                    <h1 className='card__info--h1'>{this.props.datos.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)}</h1>
                    <p>ID: {this.props.datos.id}</p>
                    <ul className='card__type-list'>
                        {/* <li className='card__type'>{this.props.types.map(i=> i.type.name)}</li> */}
                    </ul>
                    <p></p>
                </div>

            </div>
            </React.Fragment>
        )
    }
}