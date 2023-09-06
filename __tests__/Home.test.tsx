import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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

  it('Modal Login Success', async  () => {

    render(<Home />);
    const btnAddPermission = screen.getByText<HTMLElement>("Login");
    await act(async () => { fireEvent.click(btnAddPermission) });

    await waitFor(async () => {
      const Modlogin = screen.getByText<HTMLElement>("Ingresar a tu Cuenta");
      expect(Modlogin).toBeInTheDocument();
    });
    await waitFor(() => {
      const valorLabel = screen.getByTestId("username-login");
      expect(valorLabel).toBeInTheDocument()
    })
    await waitFor(() => {
      const valorLabelPas = screen.getByTestId("password-login");
      expect(valorLabelPas).toBeInTheDocument()
    })

    const valorLabel:any = screen.getByTestId("username-login").querySelector('input')
    const valorLabelPas:any = screen.getByTestId("password-login").querySelector('input')

    fireEvent.input(valorLabel, {
      target: { value: "Carlos"}
    })
    fireEvent.input(valorLabelPas, {
      target: { value: "HolaMundo!" }
    })

    await waitFor(async () => {
      const sendButon = screen.getByTestId("send-login");
      await act(async () => { fireEvent.click(sendButon) });
    });
 
    await waitFor(async () => {
      const modalFinal = await waitFor(async () => screen.getByTestId('modal_result'))
      expect(modalFinal).toHaveTextContent('Ingreso Exitoso');
    });

  });

  it('Modal Login Failed', async  () => {

    render(<Home />);
    
    const btnAddPermission = screen.getByText<HTMLElement>("Login");
    await act(async () => { fireEvent.click(btnAddPermission) });

    await waitFor(async () => {
      const Modlogin = screen.getByText<HTMLElement>("Ingresar a tu Cuenta");
      expect(Modlogin).toBeInTheDocument();
    });
    await waitFor(() => {
      const valorLabel = screen.getByTestId("username-login");
      expect(valorLabel).toBeInTheDocument()
    })
    await waitFor(() => {
      const valorLabelPas = screen.getByTestId("password-login");
      expect(valorLabelPas).toBeInTheDocument()
    })

    const valorLabel:any = screen.getByTestId("username-login").querySelector('input')
    const valorLabelPas:any = screen.getByTestId("password-login").querySelector('input')

    fireEvent.input(valorLabel, {
      target: { value: "Basura"}
    })
    fireEvent.input(valorLabelPas, {
      target: { value: "dasdasdkasjldkj!" }
    })

    await waitFor(async () => {
      const sendButon = screen.getByTestId("send-login");
      await act(async () => { fireEvent.click(sendButon) });
    });
 
    await waitFor(async () => {
      const modalFinal = await waitFor(async () => screen.getByTestId('modal_result'))
      expect(modalFinal).toHaveTextContent('Ingreso Errado');
    });

  });
});