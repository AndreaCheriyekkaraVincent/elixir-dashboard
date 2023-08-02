import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ElixirService } from '../services/elixir.service';
import { ElixirDetailComponent } from './elixir-detail.component';
import { MatIconModule } from '@angular/material/icon';

describe('ElixirDetailComponent', () => {
  let component: ElixirDetailComponent;
  let fixture: ComponentFixture<ElixirDetailComponent>;

  beforeEach(() => {
    const elixirServiceSpy = jasmine.createSpyObj('ElixirService', ['searchElixirsByName']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { paramMap: of({ get: () => '1' }) });

    TestBed.configureTestingModule({
      declarations: [ElixirDetailComponent],
      imports: [MatIconModule],
      providers: [
        { provide: ElixirService, useValue: elixirServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ],
    });
    fixture = TestBed.createComponent(ElixirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
