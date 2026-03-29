import { Routes } from '@angular/router';

export const lessonsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/lessons-admin/lessons-admin').then(m => m.LessonsAdmin)
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/lesson-details/lesson-details').then(m => m.LessonDetails)
    }
];
