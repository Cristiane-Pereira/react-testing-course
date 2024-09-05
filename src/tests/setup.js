import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react'; 
import '@testing-library/jest-dom/vitest';

// setup.js
afterEach(() => {
    cleanup();
    vi.clearAllMocks();
})