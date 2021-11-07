class SearchBar extends React.Component{
    constructor(){
        super();

    }

    handleChange(e){
        const item= e.target.value;
        console.log(item)
    }


    render(){
        return(
            <input onChange={(e)=> this.handleChange} type="text"/>
        )
    }
}