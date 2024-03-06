import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDogsComponent } from './get-dogs.component';

describe('GetDogsComponent', () => {
  let component: GetDogsComponent;
  let fixture: ComponentFixture<GetDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetDogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
