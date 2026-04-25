import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clubit-front');
  private translate = inject(TranslateService);

  constructor() {
    const supported = ['en-US', 'es-CL', 'es-AR'];
    this.translate.addLangs(supported);
    this.translate.setFallbackLang('es-CL');

    const langMap: Record<string, string> = { 'es': 'es-CL', 'en': 'en-US' };

    // Hierarchy of language candidates by priority
    const candidates = [
      localStorage.getItem('user_lang'),
      this.translate.getBrowserCultureLang(),
      langMap[this.translate.getBrowserLang() || '']
    ];

    // Select the first candidate that is both defined and supported
    const finalLang = candidates.find(lang => lang && supported.includes(lang)) || 'es-CL';

    this.translate.use(finalLang);
  }
}
