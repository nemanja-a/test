import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkerCommunicationComponent } from './service-worker-communication.component';

describe('ServiceWorkerCommunicationComponent', () => {
  let component: ServiceWorkerCommunicationComponent;
  let fixture: ComponentFixture<ServiceWorkerCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWorkerCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWorkerCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
