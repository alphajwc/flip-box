import styles from "./FlipBox.module.css"
import Property from 'csstype'

function FlipBoxBack({children,backgroundColor,textAlign,color}:{children:JSX.Element|JSX.Element[],backgroundColor:string,textAlign:Property.Property.TextAlign,color:Property.Property.Color}){
    return(
        <div className ={styles.flipBoxBack}  style={{backgroundColor:backgroundColor,textAlign:textAlign,color:color}}>{children}</div>
    )

}

export default FlipBoxBack;