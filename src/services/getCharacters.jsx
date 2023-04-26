

export const getCharacters = async ( { search, page, status, gender, species } ) => {



    const API_URL = `https://rickandmortyapi.com/api/character/?name=${ search }&page=${ page }&status=${status}&gender=${gender}&species=${species}`

    try {       
        
        
        const response = await fetch(API_URL)
        const data = await response.json()

    
        //Mapeamos la información, para en caso de que la API cambie el nombre de sus variables, sólo tengamos que cambiar el nombre aquí, y no en todos los lados donde se utilicen.

        if( data.error ) {
            return [];
        }

        return data.results?.map( character => {

            
           return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                image: character.image,
            }
        }

            

           
         )

    } catch(e) {
        throw new Error('Ha ocurrido un error')
    }
   

}