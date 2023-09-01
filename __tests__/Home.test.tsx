import { render, screen } from '@testing-library/react';
import Home from "@/app/page"

describe('Get Home Component IN ROOT PAGE', () => {
  it('renders Home', () => {
    render(<Home />);
    const text = screen.getByText("Blue Express");
    //const main = screen.getByRole("main");
    expect(text).toBeInTheDocument();
  });

  it('renders words variable', () => {
    render(<Home />);
    const text = screen.getByText(/testing/);
    expect(text).toBeInTheDocument();
  });
  it('renders words Carlos', () => {
    render(<Home />);
    const text = screen.getByText(/Carlos/);
    expect(text).toBeInTheDocument();
  });
});