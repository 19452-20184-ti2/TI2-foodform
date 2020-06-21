/**
 * Função que vai retornar o objecto com todos os posts, neste caso receitas.
 * @param  {} =>{returnnewPromise((resolve
 * @param  {} reject
 * @param  {} =>{fetch(`${serverURL}/post`
 * @param  {'GET'}} {method
 */
const getAll = () => {
    return new Promise ((resolve, reject) => {
        fetch(`${serverURL}/post`, {method:'GET'})
            .then(res => res.json())
            .then(posts => resolve (posts))
            .catch(err => reject (`error GET /post: ${err.message}`));
    });
};
/**
 * Função que retorna um objecto do tipo post, neste caso receita.
 * @param  {} id
 * @param  {} =>{returnnewPromise((resolve
 * @param  {} reject
 * @param  {} =>{fetch(`${serverURL}/post/${id}`
 * @param  {'GET'}} {method
 */
const getOne = (id) => {
    return new Promise( (resolve, reject) => {
        fetch(`${serverURL}/post/${id}`, {method:'GET'})
            .then(res => res.json())
            .then(posts => resolve (posts))
            .catch(err => reject (`error GET /post/${id}: ${err.message}`));
    });
}; 