const initState = {
  coaches : [
    {id: '1', sport1: 'Cricket', sport1HrlyRate: 60, sport2: 'Tennis', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Wellington', shortDescription: 'Testing test lorem ipsum'},
    {id: '2', sport1: 'Volleyball', sport1HrlyRate: 50, sport2: 'Rugby', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Hamilton', shortDescription: 'Testing test lorem ipsum'},
    {id: '3', sport1: 'Netball', sport1HrlyRate: 50, sport2: 'Football', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Canterbury', shortDescription: 'Testing test lorem ipsum'},
  ]
}

const coachesReducer = (state = initState, action) => {
  return state;
}

export default coachesReducer
