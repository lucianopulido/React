import React from "react";
import PropTypes from 'prop-types'

const nombre = 'Luciano'

const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ({title, subTitle}) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <h1>{nombre}</h1>
            <p>{getResult()}</p>
        </>

    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo"
}