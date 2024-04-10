import style from './Error404.module.css'

const Error404 = ()=>{
    return(
        <div className={style.container}>
            <h3 className={style.title}>Ops!</h3>
            <p className={style.description}>No hemos encontrado la ruta que buscas</p>
        </div>
    )
}

export default Error404;