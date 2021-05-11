export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDm96z3Lv2tltf4Wee3HzsKgMffAI-XmvRCqVytdY3Jv2P360sG376wYxVxGNbbpKYrXOYg73DsRtoG-zDnB5qPVb3Nb0JR1QqrUQFeEP0PN--qPP-rYZATWr91jgCLYgFmMAanlYuIetuylyTxP1vRl2EPjCcoV1vYwdAqJ3OUOxkAtfTu",
};

const reducer = (state, action) => {
    console.log(action);

    //Action->type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }   
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }   
        
        default:
            return state;
    }
};

export default reducer;