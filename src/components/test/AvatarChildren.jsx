import styles from './Card.module.css';
function Card({ children, title }) {
    return (
      <div className={styles.card}>
        <div className="card-content">
          <h5>{title}</h5>
          {children}
        </div>
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Card title="Photo">
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
          />
        </Card>
        <Card title="About">
            <p>Can add anything you want because theres children</p>
        </Card>
      </div>
    );
  }
  