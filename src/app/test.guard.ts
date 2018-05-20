import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class TestGuard implements CanActivate {
  canActivate() {
    return false;
  }
}
