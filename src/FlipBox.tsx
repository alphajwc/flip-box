import styles from "./FlipBox.module.css"

export enum Direction {
    v,
    h
}

function FlipBox({children,width,height,direction}:{children:JSX.Element|JSX.Element[],width:string|number,height:string|number,direction:Direction}){
    return(
        <div className={`${styles.flipBox} ${direction===Direction.v? styles.flipBoxV:styles.flipBoxH}`} style={{width:width,height:height}}>{children}</div>
    )

}

export default FlipBox;