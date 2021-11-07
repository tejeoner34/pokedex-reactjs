class App extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <PokemonList></PokemonList>
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)