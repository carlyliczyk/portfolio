import styles from './Card.module.css';
const today = new Date();


function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}


export default function BlogCard (){
    const title = 'Today is';
    const description = 'Description for blog';

    return (
        <>
            <div className={styles.card}>
                <h5>{title} {formatDate(today)}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}