import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDadComponent } from './page-dad.component';

describe('PageDadComponent', () => {
  let component: PageDadComponent;
  let fixture: ComponentFixture<PageDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
