import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import userEvent from "@testing-library/user-event";

describe('common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
  it('Should render a dialog if its opened', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog title',
      labels: {
        closeButton: 'CANCELAR',
        acceptButton: 'ACEPTAR'
      },
      children: {

      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {null}
      </ConfirmationDialogComponent>
    );
    const dialogComponent = screen.getByRole('dialog');
    // Assert
    expect(dialogComponent).toBeInTheDocument();
  });

  it('Should not render a dialog if its closed', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog title',
      labels: {
        closeButton: 'CANCELAR',
        acceptButton: 'ACEPTAR'
      },
      children: {

      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {null}
      </ConfirmationDialogComponent>
    );
    const dialogComponent = screen.queryByRole('dialog');
    // Assert
    expect(dialogComponent).not.toBeInTheDocument();
  });

  it('Should render a dialog with data on it', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog title',
      labels: {
        closeButton: 'CANCELAR',
        acceptButton: 'ACEPTAR'
      },
      children: {

      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        Dialog body
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.getByRole('heading').textContent).toEqual('Dialog title');
    expect(screen.getByText('Dialog body')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'ACEPTAR'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'CANCELAR'})).toBeInTheDocument();
  });

  it('Should click buttons should run handlers', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Dialog title',
      labels: {
        closeButton: 'CANCELAR',
        acceptButton: 'ACEPTAR'
      },
      children: {

      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {null}
      </ConfirmationDialogComponent>
    );

    const acceptButton = screen.getByRole('button', {name: 'ACEPTAR'});
    const closeButton = screen.getByRole('button', {name: 'CANCELAR'});
    userEvent.click(acceptButton);
    userEvent.click(closeButton);
    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
