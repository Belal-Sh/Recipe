const Summary = ({ style, title, summary }) => {
    return (
        <div className={style.mgBtm}>
            {summary ? <div className={style.fz_1_25}> {title}</div> : null}
            <div className={`${style.instructions}`} dangerouslySetInnerHTML={{ __html: summary }} />

        </div>
    )
}

export default Summary