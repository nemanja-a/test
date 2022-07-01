import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkerNotificationsComponent } from './service-worker-notifications.component';

describe('ServiceWorkerNotificationsComponent', () => {
  let component: ServiceWorkerNotificationsComponent;
  let fixture: ComponentFixture<ServiceWorkerNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWorkerNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWorkerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
