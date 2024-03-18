// importing css styles from css module
import styles from "./Album.module.css";
import 'animate.css';
import classNames from 'classnames';

// Album function to show album icon in AlbumList
export default function Album(props){

    const AlbumAnimation = classNames('animate__animated', 'animate__fadeInDown');

    // info about the album and to open an album
    const {info, setOpenAlbum}=props;

    // onClick over Album open the Album's content
    function handleClick(){
        setOpenAlbum({albumId:info.id,open:true});
    }

    return(
        <>
            {/* main container  */}
            <div className={`${styles.cardContainer} ${AlbumAnimation}`} >

                {/* album logo */}
                <div className={styles.cardImage} onClick={handleClick}>            
                </div>

                {/* album name*/}
                <div className={styles.cardName}>
                    {info.Albumname}
                </div>
            </div>
        </>
    )
}