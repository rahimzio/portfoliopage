import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmComponent } from './i-am.component';

describe('IAmComponent', () => {
  let component: IAmComponent;
  let fixture: ComponentFixture<IAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IAmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
