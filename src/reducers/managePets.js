export let state;


export function managePets(state={pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {
        //spread operator
        ...state,
        pets: [
          ...state.pets,
          action.pet
        ]
      };
    case 'REMOVE_PET':
      const petById = state.pets.findIndex(pet=>pet.id === action.id)
      return {
        ...state,
        pets: [
          ...state.pets.slice(0, petById),
          ...state.pets.slice(petById + 1)
        ]
      }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
