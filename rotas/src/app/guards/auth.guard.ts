import { AuthService } from "../login/auth.service";
import { inject } from "@angular/core";

export const authGuard = () => {
  const authService = inject(AuthService);

  if (authService.estaLogado()) {
    return true
  } else {
    authService.logout();
    return true;
  }
};
