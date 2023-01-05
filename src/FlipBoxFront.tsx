import styles from "./FlipBox.module.css"
import Property from 'csstype'

function FlipBoxFront({children,backgroundColor,textAlign}:{children:JSX.Element|JSX.Element[],backgroundColor:string,textAlign:Property.Property.TextAlign}){
    return(
        <div className ={styles.flipBoxFront} style={{backgroundColor:backgroundColor, textAlign:textAlign}}>{children}</div>
    )

}

export default FlipBoxFront;