export function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export function Love(){
    return (
      <h1>I Love You!</h1>
    );
  }

  export function Form (){
    return (
      <form>
          <input></input>
          <button>Submit</button>
      </form>
   )
  }


  export default function Gallery() {
    return (
      <section>
        <h1><Love/></h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
