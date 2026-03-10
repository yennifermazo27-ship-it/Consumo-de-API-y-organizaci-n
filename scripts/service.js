export async function getUsers() {

    const response = await fetch("https://swapi.dev/api/people/");

    if (!response.ok) {
        throw new Error("Error al obtener los datos");
    }

    const datos = await response.json();

    return datos.results;

}