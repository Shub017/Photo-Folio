// Importing dependencies
import { useRef } from "react";

// import css styles 
import styles from "./AlbumForm.module.css"
import 'animate.css';
import classNames from 'classnames';

// firestore database
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore"; 


// React-Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// form to add a new album in Albumlist
export default function AlbumForm(){
    
    const pStyling = classNames('animate__animated', 'animate__zoomInDown');

    // for Album name
    const nameRef=useRef();

    // to clear data from inputbox when user click on clear button
    function clearForm(e){
        e.preventDefault();
        nameRef.current.value="";
        nameRef.current.focus();
    }

    // add a new album inside the database
    async function handleSubmit(e){
        e.preventDefault();

        // Add a new document with a generated id.
        await addDoc(collection(db, "album"),{
            Albumname:nameRef.current.value,
            imageList:[],
            }
        );

        // notification for new album
        toast.success("New Album added!.");
        
        // clear values inside form after submission and focusing on input box
        nameRef.current.value="";
        nameRef.current.focus();
    }

    return(
        <>
            {/* for notification */}
            <ToastContainer />
            {/* main form container  */}
            <div className={`${styles.formContainer} ${pStyling}`}>
                <span>Create an album</span>

                <form onSubmit={handleSubmit}>
                    {/* input box */}
                    <input type="text" 
                        placeholder="Album Name" 
                        ref={nameRef} 
                        required
                        className={styles.input} />
                    
                    {/* delete input*/}
                    <button style={{backgroundColor:'blue'}}
                        onClick={clearForm}>Clear
                    </button>

                    {/* submit form */}
                    <button >Create</button>
                </form>
            </div>
        </>
    )
}