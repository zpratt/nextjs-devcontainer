import {describe, it} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Home from '@/pages/index';

describe('homepage smoke test', () => {
    it('should render without crashing', async () => {
        render(<Home />);
    });
});
