import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext'

const Detail = () => {

    const { store, actions } = useContext(Context)

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        actions.getCharacterById(`https://rickandmortyapi.com/api/character/${id}`)
    }, [])

    return (
        <>
            <div>Character Number: {id}</div>
            <div>Character Name: {store?.character?.name}</div>
        </>
    )
}

export default Detail