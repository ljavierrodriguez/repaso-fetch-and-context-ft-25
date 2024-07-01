const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            //url: 'https://rickandmortyapi.com',
            characters: null,
            character: null,
            search: '',
            contact: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
        },
        actions: {
            handleChangeContact: (e) => {
                const { name, value } = e.target
                const { contact } = getStore()
                contact[name] = value
                setStore({ contact: contact})
            },
            handleChange: (e) => setStore({ search: e.target.value }),
            getCharacters: (path) => {
                //const { url } = getStore()
                fetch(`${path}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        //console.log(response.status) // 200, 400, 500
                        return response.json()
                    })
                    .then((responseJson) => {
                        //console.log(responseJson)
                        setStore({ characters: responseJson })
                    })
            },
            getCharacterById: (path) => {
                //const { url } = getStore()
                fetch(`${path}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        //console.log(response.status) // 200, 400, 500
                        return response.json()
                    })
                    .then((responseJson) => {
                        //console.log(responseJson)
                        setStore({ character: responseJson })
                    })
            }
        }
    }
}

export default getState