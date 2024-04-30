 
import Image from "next/image"
export default async function Home() {
  async function getUsers(){
   let response=await  fetch('https://raw.githubusercontent.com/DarkPhoenix2704/json-host/main/news.json')
    let data=await response.json();
  
    return data;
  }
  let users= await  getUsers();
  return (
    <div>
      <h1>Blogs</h1>
      {users.map((user:any)=>{
        return(
          <div key={user.id}>
          <h2>{user.name}</h2>
          </div>
        );
      }
      )}
  

    <main className="px-6 mx-auto"> 
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
    Home Page&nbsp; 
      <span className="whitespace-nowrap">
      </span>
      </p>
      </main>
      </div>
   
  );
}
 