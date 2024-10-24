
import { right } from './../../node_modules/@popperjs/core/lib/enums';

const Fotter =(props) => {


const LoginFrom=async (event)=>{

    event.preventDefault();

    let formData=new FormData(event.target);
    
        let FirstName = formData.get('FirstName');        
        let LastName= formData.get('LastName');
        let email= formData.get('email');
        let password= formData.get('password');
        let cars= formData.get('cars');
        let messge=formData.get('messge');
        let vol=formData.get('vol');
        let Search=formData.get('Search')
       
       let postBody={
            FirstName:FirstName,
            LastName:LastName,
            email:email,
            password:password,
            cars:cars,
            messge:messge,
            vol:vol,
            Search:Search
      




        }

        console.log(postBody)

     


}




    return (

        <div>
        
        {props.objat}
                
                <form onSubmit={LoginFrom}>
                <h1>SING UP</h1>

               <div>
               <label >First name:</label>
               <input type="text"  name="FirstName" /><br /><br />
               </div>
                <div>
                    
                <label>Last name:</label>
                <input type="text" name="LastName" /><br /><br />

                </div>
                <div>
                <label>enter your email:</label>
                <input type="email"  name="email" /><br /><br />
                </div>

                <div><label>enter your password:</label>
                <input type="password" name="password" /><br /><br />
               </div>
               
                  <div>

                  <label for="cars">select your cite:</label>

                    <select name="cars">

                    <option value="dhaka">dhaka </option>
                    <option value="dinajpur">dinajpu</option>
                    <option value="rongpur">rongpur</option>
                    <option value="thakurgonj">thakurgonj</option>

                    </select>
                  </div><br />

              
                    
                <div>
                    <label>right your comment</label>
                   <input type="text" name="messge" /><br /><br />
                  </div>

                  <div>

                  <h1>Display a Range Field</h1>

          
                <label for="vol">Volume:</label>
                <input type="range" id="vol" name="vol" min="0" max="50" />
           
 

                  </div><br /><br />


                  <div>

                  <input type="text" placeholder="Search.."  name='Search'/>
               

                  </div><br />



                <div>
                <input type="submit" value="Submit"  />

                </div>

                </form>

 


        </div>
    );
};

export default Fotter;