import styles from './Card.module.css';

// can also add import this from different file
export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];  

  export default function List() {
    const chemists = people.filter(person =>
      person.profession === 'chemist'
    );
    const everyoneElse = people.filter(person =>
      person.profession !== 'chemist'
    );
    return (
      <article className={styles.card}>
        <h4>Splitting Data into 2 lists</h4>
        <h5>Chemists</h5>
        <ul>
          {chemists.map(person =>
            <li key={person.id}>
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
              </p>
            </li>
          )}
        </ul>
        <h5>Everyone Else</h5>
        <ul>
          {everyoneElse.map(person =>
            <li key={person.id}>
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
              </p>
            </li>
          )}
        </ul>
      </article>
    );
  }
  
