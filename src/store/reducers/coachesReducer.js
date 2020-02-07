const initState = {
  coaches : [
    {id: '1', sport1: 'Badminton', sport1HrlyRate: 90, sport2: 'Tennis', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Wellington', shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus massa, molestie et tincidunt at, pharetra ac metus. Suspendisse potenti. Nullam sollicitudin quam et nunc eleifend rhoncus. Phasellus nunc dui, sagittis nec massa sit amet, porta placerat mauris. Cras in feugiat dui. Pellentesque iaculis diam quam. Duis efficitur'},
    {id: '2', sport1: 'Volleyball', sport1HrlyRate: 50, sport2: 'Rugby', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Hamilton', shortDescription: ' Auctor ante sed sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id dolor non leo laoreet rutrum. Praesent blandit mi et elit interdum, at bibendum elit maximus. Nunc nec ultricies neque. Nulla eu dictum elit, vitae laoreet magna. Suspendisse et lacus quis ex vehicula placerat.'},
    {id: '3', sport1: 'Netball', sport1HrlyRate: 50, sport2: 'Football', sport2HrlyRate: 70, location: 'Auckland', otherAreas: 'Canterbury', shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus massa, molestie et tincidunt at, pharetra ac metus. Suspendisse potenti. Nullam sollicitudin quam et nunc eleifend rhoncus. Phasellus nunc dui, sagittis nec massa sit amet, porta placerat mauris. Cras in feugiat dui. Pellentesque iaculis diam quam. Duis efficitur'},
  ]
}

const coachesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COACH':
    console.log('Created Coach', action.coach);

  }
  return state;
}

export default coachesReducer
