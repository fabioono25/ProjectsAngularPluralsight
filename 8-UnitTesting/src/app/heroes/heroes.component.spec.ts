import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider Man', strength: 7},
      {id: 2, name: 'Bad Man', strength: 4},
      {id: 3, name: 'Super Man', strength: 10}
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated here from the heroes list', () => {
      // arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      // act
      component.delete(HEROES[2]);

      // assert
      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero (interaction test)', () => {
      // arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      // component.ngOnInit(); - could be use this approach instead of the lines above

      // act
      component.delete(HEROES[2]);

      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalled();
    });

    it('should call deleteHero with the correct value', () => {
      // arrange
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      // component.ngOnInit(); - could be use this approach instead of the lines above

      // act
      component.delete(HEROES[2]);

      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });

  xit('skipped test', () => {
    // arrange
    component.ngOnInit();

    // act
    component.delete(HEROES[2]);

    // assert
    expect(mockHeroService.deleteHero).toHaveBeenCalled();
  });
});
