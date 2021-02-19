export default function fetchCharacters() {
    return fetch('http://hp-api.herokuapp.com/api/characters').then((result) =>
        result.json());
}