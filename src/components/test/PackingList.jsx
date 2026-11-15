import styles from './Card.module.css';


function Item({ name, isPacked, importance }) {
    return (
      <li className="item">{isPacked ? '✔' : '❌'} {name} {importance > 0 && ' '} {importance > 0 && <i>(Importance: {importance})</i>} </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section className={styles.card}>
        <h5>Sally Ride's Packing List</h5>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit"
            importance={9} 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
            importance={0} 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
            importance={6} 
          />
        </ul>
        <p><b>consition ? A : B means</b> "If the condition is true, render A, if not B</p>
      </section>
    );
  }
  