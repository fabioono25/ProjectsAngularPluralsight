import { HeroesComponent } from './heroes.component';
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider Man', strength: 7},
      {id: 2, name: 'Bad Man', strength: 4},
      {id: 3, name: 'Super Man', strength: 10}
    ];

    component = new HeroesComponent();
  });

  it('should have no messages to start', () => {
    // arrange
    service = new MessageService();

    // assert
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {

    // arrange
    service = new MessageService();

    // act
    service.add('message1');

    // assert
    expect(service.messages.length).toBe(1);
  });

  it('should remove all messages when clear is called', () => {

    // arrange
    service = new MessageService();
    service.add('message1');

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  });
});
