import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

@Component({selector: 'app-techs', template: ''})
class MockTechsComponent {}
@Component({selector: 'app-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'app-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'fountain-title', template: ''})
class MockTitleComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockTechsComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockTitleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('app-header')).toBeDefined();
    expect(main.querySelector('fountain-title')).toBeDefined();
    expect(main.querySelector('app-techs')).toBeDefined();
    expect(main.querySelector('app-footer')).toBeDefined();
  });
});
