import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoAngularComponent } from './emo-angular.component';

describe('EmoAngularComponent', () => {
  let component: EmoAngularComponent;
  let fixture: ComponentFixture<EmoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmoAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoAngularComponent);
    component = fixture.componentInstance;

    component.emoji = '😃';

    fixture.detectChanges();
  });

  it('should create and parse emoji', () => {
    expect(component).toBeTruthy();
    expect(component.url).toEqual(
      'https://twemoji.maxcdn.com/v/latest/svg/1f603.svg',
    );
  });
});
