import { routes as home } from '../views/home/index.js';
import { routes as skills } from '../views/skills/index.js';
import { routes as about } from '../views/about/index.js';
import { routes as projects } from '../views/projects/index.js';
import { routes as timeline } from '../views/timeline/index.js';

export default [
    ...home,
    ...skills,
    ...about,
    ...projects,
    ...timeline
]