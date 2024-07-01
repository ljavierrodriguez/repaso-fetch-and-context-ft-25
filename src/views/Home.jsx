import React, { useContext, useEffect, useState } from 'react'
import InfoCard from '../components/InfoCard'
import { Context } from '../store/AppContext'

const Home = () => {

    const { store, actions } = useContext(Context)

    //const [search, setSearch] = useState("")

    useEffect(() => {
        actions.getCharacters('https://rickandmortyapi.com/api/character')
    }, [])

    //const handleChange = (e) => setSearch(e.target.value)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">Home</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group mb-3">
                        <input type="search" name='search' value={store?.search} placeholder='Search...' className="form-control" onChange={actions.handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between py-2">
                    <button className={"btn btn-primary btn-sm " + (store?.characters?.info?.prev === null ? "disabled" : "")}
                        onClick={() => actions.getCharacters(store?.characters?.info?.prev)}
                    >
                        Previous
                    </button>
                    <button className={"btn btn-primary btn-sm " + (store?.characters?.info?.next === null ? "disabled" : "")}
                        onClick={() => actions.getCharacters(store?.characters?.info?.next)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="row">

                {
                    !!store.characters &&
                    Array.isArray(store.characters.results) &&
                    store.characters.results.filter((character) => {
                        return character?.name.toLowerCase().includes(store?.search?.toLowerCase()) ||
                            character?.species.toLowerCase().includes(store?.search?.toLowerCase())
                    }).map((character) => (
                        <div className="col-md-3" key={character.id}>
                            <InfoCard {...character} />
                            <div class="modal fade" id={"characterModal"+character.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            {character?.name}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary btn-sm">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Home