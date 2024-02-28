

const List = ({ animalArray }) => {
    return (
        <ul>
        {animalArray.map((animal) => {
            return <li>{animal}</li>
            })}
        </ul>
    );
}

export default List;